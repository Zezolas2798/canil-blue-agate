import { PrismaClient, Prisma } from '@prisma/client';

export async function generateNextRegistro(tx: Prisma.TransactionClient | PrismaClient): Promise<string> {
  const lastDog = await tx.dog.findFirst({
    where: { registro: { startsWith: 'RG_' } },
    orderBy: { registro: 'desc' },
  });
  
  const lastPuppy = await tx.puppy.findFirst({
    where: { registro: { startsWith: 'RG_' } },
    orderBy: { registro: 'desc' },
  });

  const extractNumber = (reg?: string | null) => {
    if (!reg) return 0;
    const numStr = reg.replace('RG_', '');
    const num = parseInt(numStr, 10);
    return isNaN(num) ? 0 : num;
  };

  const maxDog = extractNumber(lastDog?.registro);
  const maxPuppy = extractNumber(lastPuppy?.registro);
  
  // O usuário solicitou ex: RG_118101
  let nextNum = Math.max(maxDog, maxPuppy, 118100) + 1;
  
  return `RG_${nextNum}`;
}
