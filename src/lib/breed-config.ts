export type BreedSlug = 'dachshund' | 'pastor-belga';

export interface BreedVariety {
  label: string;
  slug: string;
  coatTypes?: string[];
}

export interface BreedConfig {
  label: string;
  slug: BreedSlug;
  varieties: BreedVariety[];
  hasCoatTypes: boolean;
}

export const BREEDS: BreedConfig[] = [
  {
    label: 'Dachshund',
    slug: 'dachshund',
    hasCoatTypes: true,
    varieties: [
      { label: 'Miniatura', slug: 'miniatura', coatTypes: ['Pelo Curto', 'Pelo Longo', 'Pelo Duro'] },
      { label: 'Kaninchen', slug: 'kaninchen', coatTypes: ['Pelo Curto', 'Pelo Longo', 'Pelo Duro'] },
    ],
  },
  {
    label: 'Pastor Belga',
    slug: 'pastor-belga',
    hasCoatTypes: false,
    varieties: [
      { label: 'Pastor Belga de Groenendael', slug: 'groenendael' },
      { label: 'Pastor Belga Tervueren', slug: 'tervueren' },
    ],
  },
];

export function getBreedBySlug(slug: string | null | undefined): BreedConfig | undefined {
  if (!slug) return undefined;
  return BREEDS.find((b) => b.slug === slug);
}

export function getVarietyBySlug(breedSlug: string | null | undefined, varietySlug: string | null | undefined): BreedVariety | undefined {
  if (!breedSlug || !varietySlug) return undefined;
  const breed = getBreedBySlug(breedSlug);
  if (!breed) return undefined;
  return breed.varieties.find((v) => v.slug === varietySlug);
}

export function getBreedDisplayLabel(breedSlug?: string | null, varietySlug?: string | null, coat?: string | null): string {
  if (!breedSlug) return 'Raça não definida';
  
  const breed = getBreedBySlug(breedSlug);
  if (!breed) return breedSlug; // fallback to raw string if not found

  const variety = getVarietyBySlug(breedSlug, varietySlug);
  
  let parts = [];
  
  if (breedSlug === 'pastor-belga' && variety) {
    return variety.label;
  }
  
  parts.push(breed.label);

  if (variety) parts.push(variety.label);
  if (breed.hasCoatTypes && coat) parts.push(coat);
  
  return parts.join(' · ');
}
