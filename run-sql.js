const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();

async function main() {
    const sql = fs.readFileSync(path.resolve('storage-setup.sql'), 'utf8');
    console.log('Executing SQL for storage setup...');
    try {
        // Split by semicolon and run separately if needed, but let's try whole block
        const statements = sql.split(';').filter(s => s.trim().length > 0);
        for (const s of statements) {
            console.log(`Running: ${s.trim().substring(0, 50)}...`);
            await prisma.$executeRawUnsafe(s);
        }
        console.log('✅ SQL executed successfully.');
    } catch (e) {
        console.error('❌ Error executing SQL:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
