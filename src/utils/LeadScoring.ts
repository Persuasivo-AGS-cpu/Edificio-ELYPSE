import { LeadData } from "../types";

export function calculateLeadScore(lead: Partial<LeadData>): 'Alto' | 'Medio' | 'Bajo' {
  // Inicializamos puntaje
  let scorePoints = 0;

  // Urgencia
  if (lead.urgency === "inmediato") scorePoints += 3;
  else if (lead.urgency === "en 1 mes") scorePoints += 2;
  else if (lead.urgency === "en 1 a 3 meses") scorePoints += 1;
  else scorePoints += 0; // solo explorando

  // Presupuesto
  if (lead.budget === "entre 10k y 15k" || lead.budget === "más de 15k") scorePoints += 3;
  else if (lead.budget === "menos de 10k") scorePoints += 0; // The office is $12,500, so <10k is bad
  else scorePoints += 1; // aún no lo sé

  // The Elypse target is private offices. If interest is 'oficina privada' or 'oficina + dirección fiscal', that's good.
  
  if (scorePoints >= 5) {
    return 'Alto';
  } else if (scorePoints >= 3) {
    return 'Medio';
  } else {
    return 'Bajo';
  }
}
