import prisma from "@/lib/prisma";
import SimulatorClient from "./SimulatorClient";

export const dynamic = "force-dynamic";
export const metadata = { title: "Simulador de Ninhadas | Admin" };

export default async function SimuladorPage() {
  const dogs = await prisma.dog.findMany({
    orderBy: { name: "asc" }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-white">Simulador de Cruzamento</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Selecione uma matriz e um padreador (incluindo cães externos) para prever o COI e visualizar a possível árvore genealógica.
        </p>
      </div>

      <SimulatorClient dogs={dogs} />
    </div>
  );
}
