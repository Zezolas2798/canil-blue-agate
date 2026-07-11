import { PrismaClient } from '@prisma/client';

async function testConnection(url: string) {
  console.log(`Testing connection with URL: ${url.replace(/:[^:]+@/, ':****@')}`);
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url
      }
    }
  });

  try {
    const start = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    console.log(`✅ Success! Connected in ${Date.now() - start}ms`);
    return true;
  } catch (err: any) {
    console.error(`❌ Failed: ${err.message}`);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  const transactionUrl = "postgresql://postgres.wwjyspwfentvrqmnilcg:AGATEBLUE1965@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true";
  const sessionUrl = "postgresql://postgres.wwjyspwfentvrqmnilcg:AGATEBLUE1965@aws-1-sa-east-1.pooler.supabase.com:5432/postgres";

  console.log("--- Testing aws-1-sa-east-1 Port 6543 (Transaction Mode) ---");
  const success1 = await testConnection(transactionUrl);

  if (!success1) {
    console.log("\n--- Testing aws-1-sa-east-1 Port 5432 (Session Mode) ---");
    await testConnection(sessionUrl);
  }
}

main();
