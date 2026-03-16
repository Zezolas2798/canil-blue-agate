import prisma from "@/lib/prisma";
import DogManagerClient from "../DogManagerClient";

export const dynamic = "force-dynamic";

export default async function NovoCao() {
  const dogs = await prisma.dog.findMany({
    orderBy: { nickname: "asc" }
  });

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <DogManagerClient dogs={dogs} mode="create" />
    </div>
  );
}
