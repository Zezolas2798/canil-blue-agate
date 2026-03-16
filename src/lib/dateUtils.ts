/**
 * Calculates the age of a dog based on its birth date.
 * Returns a string like "2 anos e 3 meses" or "5 meses".
 */
export function calculateAge(birthDate: Date | string | null): string {
  if (!birthDate) return "Idade não informada";

  const birth = new Date(birthDate);
  const now = new Date();

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();

  if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
    years--;
    months += 12;
  }

  if (now.getDate() < birth.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  const yearStr = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : "";
  const monthStr = months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : "";

  if (yearStr && monthStr) {
    return `${yearStr} e ${monthStr}`;
  }
  
  return yearStr || monthStr || "Recém-nascido";
}
