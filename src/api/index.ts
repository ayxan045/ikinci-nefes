/**
 * API Layer
 * ─────────────────────────────────────────────────────────────────────────────
 * Hazırda bütün funksiyalar mock data qaytarır.
 * Backend qoşulduqda yalnız bu faylı dəyişmək kifayətdir —
 * komponentlər eyni qalır.
 *
 * BASE_URL env variable-dan oxunur:
 *   VITE_API_BASE_URL=https://api.psixologiya.az
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  PSYCHOLOGISTS, SERVICES, PSYCH_TESTS, BLOG_POSTS,
} from '../constants';
import type {
  Psychologist, Service, PsychTest, BlogPost,
  BookingFormData, AvailableSlot,
} from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

// Generic fetch helper (aktivləşdirmək üçün BASE_URL set edin)
async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

// ─── Psychologists ────────────────────────────────────────────────────────────
export async function getPsychologists(): Promise<Psychologist[]> {
  if (BASE_URL) return apiFetch<Psychologist[]>('/psychologists');
  return Promise.resolve(PSYCHOLOGISTS);           // mock
}

export async function getPsychologistById(id: string): Promise<Psychologist | undefined> {
  if (BASE_URL) return apiFetch<Psychologist>(`/psychologists/${id}`);
  return Promise.resolve(PSYCHOLOGISTS.find((p) => p.id === id));
}

// ─── Services ────────────────────────────────────────────────────────────────
export async function getServices(): Promise<Service[]> {
  if (BASE_URL) return apiFetch<Service[]>('/services');
  return Promise.resolve(SERVICES);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  if (BASE_URL) return apiFetch<Service>(`/services/${slug}`);
  return Promise.resolve(SERVICES.find((s) => s.slug === slug));
}

// ─── Tests ────────────────────────────────────────────────────────────────────
export async function getTests(): Promise<PsychTest[]> {
  if (BASE_URL) return apiFetch<PsychTest[]>('/tests');
  return Promise.resolve(PSYCH_TESTS);
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (BASE_URL) return apiFetch<BlogPost[]>('/blog');
  return Promise.resolve(BLOG_POSTS);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (BASE_URL) return apiFetch<BlogPost>(`/blog/${slug}`);
  return Promise.resolve(BLOG_POSTS.find((p) => p.slug === slug));
}

// ─── Booking ─────────────────────────────────────────────────────────────────
export async function getAvailableSlots(
  psychologistId: string,
  date: string
): Promise<AvailableSlot[]> {
  if (BASE_URL) return apiFetch<AvailableSlot[]>(
    `/booking/slots?psychologistId=${psychologistId}&date=${date}`
  );
  // mock
  return Promise.resolve(
    ['09:00','10:00','11:00','14:00','15:00','16:00','17:00'].map((time) => ({
      time,
      available: Math.random() > 0.3,
    }))
  );
}

export async function submitBooking(data: BookingFormData): Promise<{ success: boolean; bookingId?: string }> {
  if (BASE_URL) return apiFetch('/booking', { method: 'POST', body: JSON.stringify(data) });
  console.log('[mock] Booking submitted:', data);
  return Promise.resolve({ success: true, bookingId: 'mock-123' });
}
