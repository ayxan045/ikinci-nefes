import { useEffect, useRef } from 'react';
import { Star, ArrowRight, Award } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getPsychologists } from '../api';
import type { Psychologist } from '../types';

function PsychCard({ p }: { p: Psychologist }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-[220px] overflow-hidden bg-[#f0e8d0]">
        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover object-top" />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100">
          <Award size={12} className="text-[#3A9B3A]" />
          <span className="text-[11px] font-semibold text-gray-700">Sertifikatlı</span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3A9B3A]" />
            <p className="text-sm text-[#3A9B3A] font-medium">{p.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star size={14} fill="#F59E0B" className="text-amber-400" />
            <span className="text-sm font-bold text-gray-800">{p.rating}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-500">{p.experience}</span>
        </div>
        <a href={`/psixoloqlar/${p.id}`}
          className="mt-1 w-full py-2.5 rounded-2xl text-sm font-semibold text-[#3A9B3A] transition-all flex items-center justify-center gap-1.5 border border-transparent hover:border-[#3A9B3A]/20"
          style={{ background: 'rgba(58,155,58,0.06)' }}>
          Profilə bax <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Psychologists() {
  const { data: psychologists, loading } = useApi(getPsychologists);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!psychologists) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-p]').forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
              el.style.opacity = '1'; el.style.transform = 'translateY(0)';
            }, i * 90);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [psychologists]);

  // Show only first 4 on homepage
  const featured = (psychologists ?? []).slice(0, 4);

  return (
    <section id="psychologists" ref={ref} className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Psixoloqlarımız</h2>
            <p className="text-gray-500 mt-2 text-sm">Təcrübəli və sertifikatlı mütəxəssislərlə tanış olun</p>
          </div>
          <a href="/psixoloqlar" className="text-[#3A9B3A] text-sm font-semibold hover:underline whitespace-nowrap">Hamısına bax →</a>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="h-[220px] bg-gray-200" />
                <div className="p-5 flex flex-col gap-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <div key={p.id} data-p style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <PsychCard p={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
