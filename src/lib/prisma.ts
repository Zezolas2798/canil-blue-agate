import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? (() => {
  if (!process.env.POSTGRES_PRISMA_URL) {
    console.error("❌ CRÍTICO: POSTGRES_PRISMA_URL não encontrada no ambiente.");
  }
  return prismaClientSingleton();
})();

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
