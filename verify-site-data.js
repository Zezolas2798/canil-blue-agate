const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();

async function main() {
    console.log('--- TESTE DE CONEXÃO SUPABASE (PRODUÇÃO) ---');
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    
    try {
        const dogs = await prisma.dog.findMany();
        console.log(`✅ Cães encontrados: ${dogs.length}`);
        
        const litters = await prisma.litter.findMany();
        console.log(`✅ Ninhadas encontradas: ${litters.length}`);
        
        if (dogs.length > 0) {
            console.log('Amostra de foto:', dogs[0].profilePhoto || dogs[0].media);
        }
    } catch (e) {
        console.error('❌ Erro na conexão:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
