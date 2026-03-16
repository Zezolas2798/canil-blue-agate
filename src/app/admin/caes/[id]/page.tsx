import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import DogManagerClient from "../DogManagerClient";

export const dynamic = "force-dynamic";

export default async function EditarCao({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const [dog, dogs] = await Promise.all([
    prisma.dog.findUnique({
      where: { id },
      include: {
        sireLitters: { include: { puppies: true } },
        damLitters: { include: { puppies: true } },
        sire: {
          include: {
            sire: { include: { sire: true, dam: true } },
            dam: { include: { sire: true, dam: true } },
          }
        },
        dam: {
          include: {
            sire: { include: { sire: true, dam: true } },
            dam: { include: { sire: true, dam: true } },
          }
        },
      }
    }),
    prisma.dog.findMany({ orderBy: { nickname: "asc" } })
  ]);

  if (!dog) return notFound();

  // Gather all descendant puppies
  const allLitters = [...(dog.sireLitters || []), ...(dog.damLitters || [])];

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <DogManagerClient dogs={dogs} mode="edit" existingDog={dog} litters={allLitters} />
    </div>
  );
}
