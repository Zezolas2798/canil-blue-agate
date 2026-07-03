import prisma from "@/lib/prisma";

type AncestorInfo = {
  dogId: string;
  generation: number;
  path: string[];
};

export async function calculateCOI(sireId: string, damId: string, maxGenerations = 5): Promise<number> {
  if (!sireId || !damId) return 0;
  if (sireId === damId) return 0.25; // fallback for strange loops (shouldn't happen)

  // Recursively fetch ancestors
  const fetchAncestors = async (
    currentId: string, 
    currentGen: number, 
    path: string[]
  ): Promise<AncestorInfo[]> => {
    if (currentGen > maxGenerations) return [];

    const dog = await prisma.dog.findUnique({
      where: { id: currentId },
      select: { id: true, sireId: true, damId: true, coi: true } // coi could be used for Fa (Ancestor COI)
    });

    if (!dog) return [];

    let ancestors: AncestorInfo[] = [{
      dogId: dog.id,
      generation: currentGen,
      path: [...path, dog.id]
    }];

    if (dog.sireId) {
      ancestors = ancestors.concat(await fetchAncestors(dog.sireId, currentGen + 1, ancestors[0].path));
    }
    if (dog.damId) {
      ancestors = ancestors.concat(await fetchAncestors(dog.damId, currentGen + 1, ancestors[0].path));
    }

    return ancestors;
  };

  const sireAncestors = await fetchAncestors(sireId, 1, []);
  const damAncestors = await fetchAncestors(damId, 1, []);

  // Find common ancestors (exists in both sire and dam lineages)
  const damAncestorIds = new Set(damAncestors.map(a => a.dogId));
  const commonAncestorIds = Array.from(new Set(sireAncestors.map(a => a.dogId).filter(id => damAncestorIds.has(id))));

  let coi = 0;

  for (const ancestorId of commonAncestorIds) {
    // We need to fetch the ancestor's own COI for Wright's Formula (Fa)
    const ancestor = await prisma.dog.findUnique({ where: { id: ancestorId }, select: { coi: true } });
    const ancestorCoi = parseFloat(ancestor?.coi || "0") / 100 || 0; // assuming stored as string percentage or decimal

    const sirePaths = sireAncestors.filter(a => a.dogId === ancestorId);
    const damPaths = damAncestors.filter(a => a.dogId === ancestorId);

    // For every combination of paths to this common ancestor
    for (const sPath of sirePaths) {
      for (const dPath of damPaths) {
        // Wright's Formula: COI = Sum( (1/2)^(n1 + n2 + 1) * (1 + Fa) )
        // n1 = generations from sire to common ancestor
        // n2 = generations from dam to common ancestor
        
        // Ensure path doesn't go through the same individual twice (excluding the common ancestor)
        const commonNodes = sPath.path.filter(nodeId => dPath.path.includes(nodeId));
        if (commonNodes.length === 1 && commonNodes[0] === ancestorId) {
          // n is the generation distance (path length - 1)
          const n1 = sPath.generation - 1; 
          const n2 = dPath.generation - 1;
          coi += Math.pow(0.5, n1 + n2 + 1) * (1 + ancestorCoi);
        }
      }
    }
  }

  return parseFloat((coi * 100).toFixed(4)); // returns as percentage (e.g. 3.125)
}
