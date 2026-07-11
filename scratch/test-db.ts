import { PrismaClient } from '@prisma/client';

const regions = [
  'sa-east-1',
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'eu-central-1',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ca-central-1'
];

async function testConnection(region: string) {
  const url = `postgresql://postgres.wwjyspwfentvrqmnilcg:AGATEBLUE1965@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true`;
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url
      }
    }
  });

  try {
    // Try to run a simple query
    await prisma.$queryRaw`SELECT 1`;
    console.log(`✅ Success! Region is: ${region}`);
    return true;
  } catch (err: any) {
    if (err.message.includes('tenant/user') && err.message.includes('not found')) {
      // Tenant not in this region, which is expected for incorrect regions
      return false;
    }
    console.log(`❓ Region ${region} returned other error: ${err.message.substring(0, 150)}`);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  for (const region of regions) {
    const success = await testConnection(region);
    if (success) {
      process.exit(0);
    }
  }
  console.log("❌ Finished checking all regions. None succeeded.");
}

main();
