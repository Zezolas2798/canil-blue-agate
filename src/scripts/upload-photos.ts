import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const supabaseFullUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseFullUrl) {
  console.error('❌ Erro: NEXT_PUBLIC_SUPABASE_URL não encontrada no .env');
  process.exit(1);
}

if (!supabaseKey) {
  console.error('❌ Erro: SUPABASE_SERVICE_ROLE_KEY não encontrada no .env');
  process.exit(1);
}

const supabase = createClient(supabaseFullUrl, supabaseKey);
const prisma = new PrismaClient();

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');
const BUCKET_NAME = 'kennel-media';

// Forçar atualização se o link for do projeto antigo ou pasta local
const shouldUpdateUrl = (url: string | null) => {
  if (!url) return false;
  return url.includes('/uploads/') || (url.includes('supabase.co') && !url.includes('wwjyspwfentvrqmnilcg'));
};

async function uploadFile(filePath: string, fileName: string) {
  const fileBuffer = fs.readFileSync(filePath);
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, fileBuffer, {
      contentType: 'image/jpeg', 
      upsert: true,
    });

  if (error) {
    console.error(`❌ Erro ao enviar ${fileName}:`, error.message);
    return null;
  }

  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(fileName);

  return publicUrl;
}

async function main() {
  console.log('🚀 Iniciando upload de fotos para o Supabase Storage...');

  if (!fs.existsSync(UPLOADS_DIR)) {
    console.error('❌ Diretório de uploads não encontrado:', UPLOADS_DIR);
    return;
  }

  const files = fs.readdirSync(UPLOADS_DIR);
  console.log(`📸 Encontradas ${files.length} fotos para upload.`);

  const urlMap: Record<string, string> = {};

  for (const file of files) {
    const filePath = path.join(UPLOADS_DIR, file);
    if (fs.lstatSync(filePath).isFile()) {
      console.log(`📤 Enviando ${file}...`);
      const publicUrl = await uploadFile(filePath, file);
      if (publicUrl) {
        urlMap[file] = publicUrl;
        console.log(`✅ ${file} enviado. URL: ${publicUrl}`);
      }
    }
  }

  console.log('🔄 Atualizando referências no banco de dados...');

  // 1. Atualizar Dogs
  const dogs = await prisma.dog.findMany();
  for (const dog of dogs) {
    let updated = false;
    let profilePhoto = dog.profilePhoto;
    let media = dog.media;

    if (shouldUpdateUrl(profilePhoto)) {
      const fileName = profilePhoto?.split('/').pop();
      if (fileName && urlMap[fileName]) {
        profilePhoto = urlMap[fileName];
        updated = true;
      }
    }

    if (media) {
      try {
        const mediaUrls = JSON.parse(media);
        const newMediaUrls = mediaUrls.map((url: string) => {
          if (shouldUpdateUrl(url)) {
            const fileName = url.split('/').pop();
            return (fileName && urlMap[fileName]) ? urlMap[fileName] : url;
          }
          return url;
        });
        media = JSON.stringify(newMediaUrls);
        updated = true;
      } catch (e) {}
    }

    if (updated) {
      await prisma.dog.update({
        where: { id: dog.id },
        data: { profilePhoto, media },
      });
      console.log(`🐕 Referências do cão ${dog.name} atualizadas.`);
    }
  }

  // 2. Ninhadas (Litters)
  const litters = await prisma.litter.findMany();
  for (const litter of litters) {
     if (shouldUpdateUrl(litter.media)) {
         try {
             const mediaUrls = JSON.parse(litter.media || '[]');
             const newMediaUrls = mediaUrls.map((url: string) => {
               if (shouldUpdateUrl(url)) {
                 const fileName = url.split('/').pop();
                 return (fileName && urlMap[fileName]) ? urlMap[fileName] : url;
               }
               return url;
             });
             await prisma.litter.update({
                 where: { id: litter.id },
                 data: { media: JSON.stringify(newMediaUrls) }
             });
             console.log(`📦 Referências da ninhada ${litter.title || litter.id} atualizadas.`);
         } catch(e) {}
     }
  }

  // 3. Filhotes (Puppies)
  const puppies = await prisma.puppy.findMany();
  for (const puppy of puppies) {
      if (shouldUpdateUrl(puppy.photo)) {
          const fileName = puppy.photo?.split('/').pop();
          if (fileName && urlMap[fileName]) {
              await prisma.puppy.update({
                  where: { id: puppy.id },
                  data: { photo: urlMap[fileName] }
              });
              console.log(`🐾 Referências do filhote ${puppy.name || puppy.id} atualizadas.`);
          }
      }
  }

  console.log('✨ UPLOAD E ATUALIZAÇÃO CONCLUÍDOS! ✨');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
