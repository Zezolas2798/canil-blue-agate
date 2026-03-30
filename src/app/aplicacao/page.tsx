import prisma from "@/lib/prisma";
import ApplicationFormClient from "./ApplicationFormClient";

export const dynamic = "force-dynamic";

export default async function ApplicationPage() {
  const litters = await prisma.litter.findMany({
    where: {
      status: { in: ["DISPONIVEL", "PLANEJADA"] }
    },
    include: {
      puppies: {
        where: {
          status: "DISPONIVEL"
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="bg-brand-blue min-h-screen">
      <ApplicationFormClient initialLitters={litters} />
    </div>
  );
}
