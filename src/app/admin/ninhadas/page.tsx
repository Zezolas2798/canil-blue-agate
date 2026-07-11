import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import AdminLittersClient from "./AdminLittersClient";

export const dynamic = "force-dynamic";

export default async function AdminLitters() {
  const allLitters = await prisma.litter.findMany({
    include: {
      sire: true,
      dam: true,
      _count: {
        select: { puppies: true }
      }
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Gerenciar Ninhadas</h1>
          <p className="text-sm text-zinc-400 mt-1">Controle de reprodução e filhotes</p>
        </div>
        <Link
          href="/admin/ninhadas/novo"
          className="px-6 py-3 bg-brand-bronze text-white rounded-lg font-semibold hover:bg-brand-gold transition-colors shadow-lg shadow-brand-bronze/20 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nova Ninhada
        </Link>
      </div>

      <Suspense fallback={<div className="flex justify-center items-center py-20"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-bronze"></div></div>}>
        <AdminLittersClient initialLitters={allLitters} />
      </Suspense>
    </div>
  );
}
