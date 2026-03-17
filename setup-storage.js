const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`Setting up storage at ${supabaseUrl}...`);
  
  const { data, error } = await supabase.storage.createBucket('kennel-media', {
    public: true,
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'],
    fileSizeLimit: 5242880 // 5MB
  });

  if (error) {
    if (error.message.includes('already exists')) {
      console.log('✅ Bucket "kennel-media" already exists.');
    } else {
      console.error('❌ Error creating bucket:', error.message);
    }
  } else {
    console.log('✅ Bucket "kennel-media" created successfully.');
  }
}

main();
