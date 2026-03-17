-- Granting permissions for anonymous uploads during migration
-- Ensure bucket exists
INSERT INTO storage.buckets (id, name, public) VALUES ('kennel-media', 'kennel-media', true) ON CONFLICT (id) DO UPDATE SET public = true;

-- Drop existing if any to avoid conflicts during setup
DROP POLICY IF EXISTS "Public Selection" ON storage.objects;
DROP POLICY IF EXISTS "Anon Insert" ON storage.objects;

-- Allow anyone to read
CREATE POLICY "Public Selection" ON storage.objects FOR SELECT USING (bucket_id = 'kennel-media');

-- Allow anon to upload (ONLY FOR MIGRATION, USER SHOULD RESTRICT THIS LATER)
CREATE POLICY "Anon Insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'kennel-media');
