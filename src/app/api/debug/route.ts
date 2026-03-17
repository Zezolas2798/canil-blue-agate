import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const diagnostics = {
    env: {
      has_supabase_url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabase_url_value: process.env.NEXT_PUBLIC_SUPABASE_URL,
      has_prisma_url: !!process.env.POSTGRES_PRISMA_URL,
      prisma_url_points_to: process.env.POSTGRES_PRISMA_URL?.split('@')[1]?.split(':')[0] || 'not found',
    },
    database: {
      can_connect: false,
      error: null as string | null,
      dogs_count: 0,
      litters_count: 0,
    }
  };

  try {
    const dogsCount = await prisma.dog.count();
    const littersCount = await prisma.litter.count();
    
    diagnostics.database.can_connect = true;
    diagnostics.database.dogs_count = dogsCount;
    diagnostics.database.litters_count = littersCount;
  } catch (error: any) {
    diagnostics.database.error = error.message;
  }

  return NextResponse.json(diagnostics);
}
