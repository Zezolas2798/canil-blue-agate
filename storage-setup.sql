-- Simplified SQL for correct project wwjyspwfentvrqmnilcg
INSERT INTO storage.buckets (id, name, public) VALUES ('kennel-media', 'kennel-media', true) ON CONFLICT (id) DO NOTHING;

-- Force public access for reading
UPDATE storage.buckets SET public = true WHERE id = 'kennel-media';

-- We use DO blocks to avoid errors if policies already exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'Public Access' AND tablename = 'objects' AND schemaname = 'storage'
    ) THEN
        CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'kennel-media');
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'Allow All for Migration' AND tablename = 'objects' AND schemaname = 'storage'
    ) THEN
        CREATE POLICY "Allow All for Migration" ON storage.objects FOR ALL USING (bucket_id = 'kennel-media') WITH CHECK (bucket_id = 'kennel-media');
    END IF;
END
$$;
