import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import LitterManagerClient from "../LitterManagerClient";

export default async function EditLitterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [litter, dogs] = await Promise.all([
    prisma.litter.findUnique({
      where: { id },
      include: { puppies: true }
    }),
    prisma.dog.findMany({
      orderBy: { nickname: "asc" }
    })
  ]);

  if (!litter) notFound();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <LitterManagerClient mode="edit" existingLitter={litter} dogs={dogs} />
    </div>
  );
}
