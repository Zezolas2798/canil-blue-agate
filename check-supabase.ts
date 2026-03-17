import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function main() {
    console.log('Checking Supabase records for project wwjyspwfentvrqmnilcg...');
    try {
        const dogs = await prisma.dog.findMany();
        console.log(`- Dogs in Supabase: ${dogs.length}`);
        if (dogs.length > 0) {
            console.log('Sample Dog:', JSON.stringify(dogs[0], null, 2));
        }
    } catch (e: any) {
        console.log(`- Error fetching Dogs: ${e.message}`);
    } finally {
        await prisma.$disconnect();
    }
}

main();
