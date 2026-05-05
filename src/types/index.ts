// ─── Psychologist ────────────────────────────────────────────────────────────
export interface Psychologist {
  id: string;
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  certified: boolean;
  specializations: string[];
  bio?: string;
}

// ─── Service ─────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  detailUrl: string;
}

// ─── Test ────────────────────────────────────────────────────────────────────
export interface PsychTest {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  questionCount: number;
  isFree: boolean;
  category: string;
}

// ─── Blog Post ───────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  author?: string;
}

// ─── Booking ─────────────────────────────────────────────────────────────────
export interface BookingFormData {
  psychologistId: string;
  date: string;
  time: string;
  sessionType: 'online' | 'office';
  fullName?: string;
  phone?: string;
  email?: string;
  note?: string;
}

export interface AvailableSlot {
  time: string;
  available: boolean;
}

// ─── Nav / Footer ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
