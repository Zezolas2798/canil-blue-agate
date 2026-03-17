const { PrismaClient } = require('./prisma/generated/sqlite-client');
const path = require('path');

async function check(dbPath) {
    console.log(`Checking ${dbPath}...`);
    process.env.DATABASE_URL = `file:${dbPath}`;
    const prisma = new PrismaClient();
    try {
        const dogs = await prisma.dog.findMany();
        console.log(`- Dogs: ${dogs.length}`);
    } catch (e) {
        console.log(`- Error: ${e.message}`);
    } finally {
        await prisma.$disconnect();
    }
}

async function main() {
    await check(path.resolve('dev.db'));
    await check(path.resolve('prisma/dev.db'));
}

main();
