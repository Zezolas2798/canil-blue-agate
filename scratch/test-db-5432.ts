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
  const saUrl = "postgresql://postgres.wwjyspwfentvrqmnilcg:AGATEBLUE1965@aws-0-sa-east-1.pooler.supabase.com:5432/postgres";
  const usUrl = "postgresql://postgres.wwjyspwfentvrqmnilcg:AGATEBLUE1965@aws-0-us-east-1.pooler.supabase.com:5432/postgres";

  console.log("--- Testing São Paulo (sa-east-1) Port 5432 ---");
  const saSuccess = await testConnection(saUrl);

  if (!saSuccess) {
    console.log("\n--- Testing N. Virginia (us-east-1) Port 5432 ---");
    await testConnection(usUrl);
  }
}

main();
