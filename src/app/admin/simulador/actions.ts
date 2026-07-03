"use server";

import { calculateCOI } from "@/lib/coi";
import { requireAdminAuth } from "@/lib/auth-check";

import prisma from "@/lib/prisma";

export async function getSimulatedCOI(sireId: string, damId: string) {
  await requireAdminAuth();
  
  const coi = await calculateCOI(sireId, damId);
  
  const getParentsTree = {
    include: {
      sire: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } }
        }
      },
      dam: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } }
        }
      }
    }
  };

  const sire = await prisma.dog.findUnique({
    where: { id: sireId },
    ...getParentsTree
  });

  const dam = await prisma.dog.findUnique({
    where: { id: damId },
    ...getParentsTree
  });

  return { coi, sire, dam };
}
