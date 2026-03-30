"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth-check";

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
  
  // Puppies data from hidden field
  const puppiesJson = formData.get("_puppies") as string;
  let puppies = [];
  try { puppies = JSON.parse(puppiesJson || "[]"); } catch (e) { console.error(e); }

  await prisma.$transaction(async (tx) => {
    // 1. Update Litter
    await tx.litter.update({
      where: { id },
      data: { ...data }
    });

    // 2. Sync Puppies (Simple approach: delete and recreate for this MVP)
    // In a production app, we should do a proper diff/upsert
    await tx.puppy.deleteMany({ where: { litterId: id } });
    
    if (puppies.length > 0) {
      const createdPuppies = [];
      for (const p of puppies) {
        const cp = await tx.puppy.create({
          data: {
            litterId: id,
            name: p.name || null,
            sex: p.sex || "M",
            color: p.color || "",
            birthWeight: p.birthWeight ? parseFloat(p.birthWeight) : null,
            price: p.price ? parseFloat(p.price) : (data.price || null),
            status: p.status || "DISPONIVEL",
            photo: p.photo || null,
            media: p.media || (p.photo ? JSON.stringify([p.photo]) : "[]"),
          }
        });
        createdPuppies.push(cp);
      }

      // 3. Auto-generate Vaccine Schedules if birthDate exists
      if (data.birthDate) {
        const bd = new Date(data.birthDate);
        for (const puppy of createdPuppies) {
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
                puppyId: puppy.id,
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
