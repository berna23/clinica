export interface Professional {
  id: string;
  name: string;
  cp: string; // ✅ Adicionado
  role: string;
  specialty: string;
  category: string;
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  experience: string[];
  contactEmail: string;
  curiosidades: string[]; // ✅ Adicionado
  quote: string; // ✅ Adicionado
}

export interface Service {
  id: string;
  title: string;
  factor: string; // e.g., "Avaliação/Intervenção a nível Psicoafetivo"
  items: string[];
  iconImage: string; // Changed to string for custom image URLs/base64
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  installments?: number; // e.g., 4 for "4x"
  comingSoon?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface InsightCard {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}