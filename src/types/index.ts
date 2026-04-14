export interface LeadData {
  interest: string;
  capacity: string;
  urgency: string;
  budget: string;
  parking: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  comments: string;
  score?: 'Alto' | 'Medio' | 'Bajo';
}
