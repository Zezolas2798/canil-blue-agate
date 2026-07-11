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
  // Using direct IPv6 address on default port 5432
  const directUrl = "postgresql://postgres:AGATEBLUE1965@[2600:1f1e:dbb:f601:5f5f:dda5:19b7:557e]:5432/postgres";
  // Using direct IPv6 address on pooling port 6543
  const poolingUrl = "postgresql://postgres:AGATEBLUE1965@[2600:1f1e:dbb:f601:5f5f:dda5:19b7:557e]:6543/postgres?pgbouncer=true";

  console.log("--- Testing Direct IPv6 Port 5432 ---");
  const directSuccess = await testConnection(directUrl);

  if (!directSuccess) {
    console.log("\n--- Testing Direct IPv6 Port 6543 ---");
    await testConnection(poolingUrl);
  }
}

main();
