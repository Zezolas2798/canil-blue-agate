const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const litters = await prisma.litter.findMany({
    include: {
      sire: true,
      dam: true,
    }
  });

  console.log(JSON.stringify(litters, null, 2));
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
