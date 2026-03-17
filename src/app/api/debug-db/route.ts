import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    console.log("--- DATABASE DIAGNOSTIC START ---");
    
    // 1. Test basic connection
    await prisma.$queryRaw`SELECT 1`;
    
    // 2. Fetch counts for main tables
    const [dogs, litters, leads, puppies, vaccines, clients, siteConfigs] = await Promise.all([
      prisma.dog.count().catch(() => -1),
      prisma.litter.count().catch(() => -1),
      prisma.lead.count().catch(() => -1),
      prisma.puppy.count().catch(() => -1),
      prisma.vaccine.count().catch(() => -1),
      prisma.client.count().catch(() => -1),
      prisma.siteConfig.count().catch(() => -1),
    ]);

    const results = {
      status: "connected",
      message: "Conexão com o banco de dados estabelecida com sucesso.",
      database_url_pool: process.env.POSTGRES_PRISMA_URL ? "Configurada" : "NÃO CONFIGURADA",
      database_url_direct: process.env.POSTGRES_URL_NON_POOLING ? "Configurada" : "NÃO CONFIGURADA",
      counts: {
        dogs: dogs === -1 ? "Tabela não encontrada ou erro" : dogs,
        litters: litters === -1 ? "Tabela não encontrada ou erro" : litters,
        leads: leads === -1 ? "Tabela não encontrada ou erro" : leads,
        puppies: puppies === -1 ? "Tabela não encontrada ou erro" : puppies,
        vaccines: vaccines === -1 ? "Tabela não encontrada ou erro" : vaccines,
        clients: clients === -1 ? "Tabela não encontrada ou erro" : clients,
        siteConfigs: siteConfigs === -1 ? "Tabela não encontrada ou erro" : siteConfigs,
      }
    };

    console.log("Diagnostic Results:", results);
    return NextResponse.json(results);
  } catch (error: any) {
    console.error("--- DATABASE DIAGNOSTIC ERROR ---", error);
    return NextResponse.json({
      status: "error",
      message: "Falha ao conectar com o banco de dados.",
      error: error.message,
      code: error.code,
      meta: error.meta
    }, { status: 500 });
  }
}
