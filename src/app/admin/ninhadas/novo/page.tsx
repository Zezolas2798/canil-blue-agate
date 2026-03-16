import prisma from "@/lib/prisma";
import LitterManagerClient from "../LitterManagerClient";

export const dynamic = "force-dynamic";

export default async function NewLitterPage() {
  const dogs = await prisma.dog.findMany({
    orderBy: { nickname: "asc" }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <LitterManagerClient mode="create" dogs={dogs} />
    </div>
  );
}
