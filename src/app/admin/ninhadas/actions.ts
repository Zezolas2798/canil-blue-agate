"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth-check";
import { generateNextRegistro } from "@/lib/registry";

function extractLitterData(formData: FormData) {
  return {
    title: (formData.get("title") as string) || null,
    status: (formData.get("status") as string) || "PLANEJADA",
    matingDate: formData.get("matingDate") ? new Date(formData.get("matingDate") as string) : null,
    expectedBirthDate: formData.get("expectedBirthDate") ? new Date(formData.get("expectedBirthDate") as string) : null,
    birthDate: formData.get("birthDate") ? new Date(formData.get("birthDate") as string) : null,
    sireId: (formData.get("sireId") as string) || null,
    damId: (formData.get("damId") as string) || null,
    price: formData.get("price") ? parseFloat(formData.get("price") as string) : null,
    breed: (formData.get("breed") as string) || null,
    variety: (formData.get("variety") as string) || null,
    media: (formData.get("_media") as string) || "[]",
  };
}

export async function addLitter(formData: FormData) {
  await requireAdminAuth();
  const data = extractLitterData(formData);
  
  await prisma.litter.create({
    data: {
      ...data,
      // Puppies are usually added after the litter is created/born
    }
  });

  revalidatePath("/admin/ninhadas");
  redirect("/admin/ninhadas");
}

export async function updateLitter(formData: FormData) {
  await requireAdminAuth();
  const id = formData.get("litterId") as string;
  const data = extractLitterData(formData);
  
  const puppiesJson = formData.get("_puppies") as string;
  let puppies: any[] = [];
  try { puppies = JSON.parse(puppiesJson || "[]"); } catch (e) { console.error(e); }

  await prisma.$transaction(async (tx) => {
    // 1. Update Litter
    await tx.litter.update({
      where: { id },
      data: { ...data }
    });

    // 2. Diff/Upsert Puppies
    const existingPuppies = await tx.puppy.findMany({ where: { litterId: id } });
    
    // IDs fornecidos pelo frontend (excluindo os temporários que não existem no DB)
    const submittedPuppyIds = puppies.map(p => p.id).filter(id => id && !id.startsWith('new_'));
    
    // Deletar os filhotes que foram removidos
    const puppiesToDelete = existingPuppies.filter(ep => !submittedPuppyIds.includes(ep.id));
    if (puppiesToDelete.length > 0) {
      await tx.puppy.deleteMany({
        where: { id: { in: puppiesToDelete.map(p => p.id) } }
      });
    }

    if (puppies.length > 0) {
      for (const p of puppies) {
        let registro = p.registro;
        let createdPuppy = null;

        const puppyData = {
          litterId: id,
          name: p.name || null,
          sex: p.sex || "M",
          color: p.color || "",
          coat: p.coat || null,
          breed: data.breed,
          variety: data.variety,
          birthWeight: p.birthWeight ? parseFloat(p.birthWeight) : null,
          price: p.price ? parseFloat(p.price) : (data.price || null),
          status: p.status || "DISPONIVEL",
          photo: p.photo || null,
          media: p.media || (p.photo ? JSON.stringify([p.photo]) : "[]"),
        };

        const isNew = !p.id || String(p.id).startsWith("new_");
        
        if (isNew) {
          // New Puppy
          registro = await generateNextRegistro(tx);
          createdPuppy = await tx.puppy.create({
            data: { ...puppyData, registro }
          });
          
          Object.assign(p, createdPuppy); // attach new info for vaccines

          // 3. Auto-generate Vaccine Schedules se birthDate existe
          if (data.birthDate) {
            const bd = new Date(data.birthDate);
            const doses = [
              { name: "V8/V10 - 1ª Dose", days: 45 },
              { name: "V8/V10 - 2ª Dose", days: 75 },
              { name: "V8/V10 - 3ª Dose", days: 105 },
              { name: "Gripe / Giárdia", days: 90 },
            ];

            for (const dose of doses) {
              const dueDate = new Date(bd);
              dueDate.setDate(dueDate.getDate() + dose.days);
              
              await tx.vaccine.create({
                data: {
                  name: dose.name,
                  dueDate: dueDate,
                  status: "PENDENTE",
                  puppyId: createdPuppy.id,
                }
              });
            }
          }
        } else {
          // Update Existing Puppy
          await tx.puppy.update({
            where: { id: p.id },
            data: puppyData
          });
          
          if (!registro) {
             const exist = existingPuppies.find(ep => ep.id === p.id);
             registro = exist?.registro; // preserve existing
          }

          if (!registro) {
             registro = await generateNextRegistro(tx);
             await tx.puppy.update({
               where: { id: p.id },
               data: { registro }
             });
          }
        }

        // 4. Lógica do PLANTEL
        if (puppyData.status === "PLANTEL" && registro) {
          // Checar se já criamos o cão no plantel
          const dogExists = await tx.dog.findUnique({ where: { registro } });
          if (!dogExists) {
            await tx.dog.create({
              data: {
                registro,
                name: puppyData.name || `Cão de Plantel (${registro})`,
                breed: data.breed || "Não definida",
                variety: data.variety,
                sex: puppyData.sex,
                color: puppyData.color,
                coat: puppyData.coat,
                status: "ATIVO", // Ou "PENDENTE" se o usuário não completou o cadastro, usaremos ATIVO com aviso
                profilePhoto: puppyData.photo,
                media: puppyData.media,
                sireId: data.sireId,
                damId: data.damId,
                birthDate: data.birthDate
              }
            });
          }
        }
      }
    }
  });

  revalidatePath("/admin/ninhadas");
  revalidatePath(`/admin/ninhadas/${id}`);
  redirect("/admin/ninhadas");
}

export async function deleteLitter(id: string) {
  await requireAdminAuth();

  await prisma.litter.delete({ where: { id } });
  revalidatePath("/admin/ninhadas");
  redirect("/admin/ninhadas");
}
