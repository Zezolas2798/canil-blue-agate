"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth-check";
function extractDogData(formData: FormData) {
  const sireId = formData.get("sireId") as string;
  const damId = formData.get("damId") as string;

  return {
    name: (formData.get("name") as string) || "Sem Nome",
    profilePhoto: (formData.get("_profilePhoto") as string) || null,
    sire: sireId ? { connect: { id: sireId } } : { disconnect: true },
    dam: damId ? { connect: { id: damId } } : { disconnect: true },
    registrySystem: (formData.get("registrySystem") as string) || null,
    nickname: (formData.get("nickname") as string) || null,
    registrationName: (formData.get("registrationName") as string) || null,
    breed: (formData.get("breed") as string) || "Não definida",
    variety: (formData.get("variety") as string) || null,
    sex: (formData.get("sex") as string) || "M",
    color: (formData.get("color") as string) || "Indefinida",
    coat: (formData.get("coat") as string) || null,
    birthDate: formData.get("birthDate") ? new Date(formData.get("birthDate") as string) : null,
    arrivalDate: formData.get("arrivalDate") ? new Date(formData.get("arrivalDate") as string) : null,
    height: formData.get("height") ? parseFloat(formData.get("height") as string) : null,
    nationality: (formData.get("nationality") as string) || null,
    temperament: (formData.get("temperament") as string) || null,
    showGenealogy: formData.get("showGenealogy") === "true",
    notes: (formData.get("notes") as string) || null,
    microchip: (formData.get("microchip") as string) || null,
    microchipDate: formData.get("microchipDate") ? new Date(formData.get("microchipDate") as string) : null,
    dnaProfile: (formData.get("dnaProfile") as string) || null,
    tagId: (formData.get("tagId") as string) || null,
    status: (formData.get("status") as string) || "ATIVO",
    coi: (formData.get("coi") as string) || null,
    hipDysplasia: (formData.get("hipDysplasia") as string) || null,
    elbowDysplasia: (formData.get("elbowDysplasia") as string) || null,
    patellaLuxation: (formData.get("patellaLuxation") as string) || null,
    pedigreeId: (formData.get("pedigreeId") as string) || null,
    media: (formData.get("_media") as string) || null,
    videos: (() => {
      const raw = formData.get("videos") as string;
      return raw ? JSON.stringify(raw.split(',').map(s => s.trim()).filter(Boolean)) : null;
    })(),
  };
}

export async function addDog(formData: FormData) {
  await requireAdminAuth();
  
  const data: any = extractDogData(formData);
  // On create, we use 'connect' only, not 'disconnect'
  if (data.sire?.disconnect) delete data.sire;
  if (data.dam?.disconnect) delete data.dam;

  await prisma.dog.create({ data });
  revalidatePath("/admin/caes");
  revalidatePath("/caes");
  redirect("/admin/caes");
}

export async function updateDog(formData: FormData) {
  await requireAdminAuth();
  
  const id = formData.get("dogId") as string;
  await prisma.dog.update({ where: { id }, data: extractDogData(formData) });
  revalidatePath("/admin/caes");
  revalidatePath(`/admin/caes/${id}`);
  revalidatePath("/caes");
  redirect("/admin/caes");
}
