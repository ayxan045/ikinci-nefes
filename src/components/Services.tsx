import { useEffect, useRef } from 'react';
import { ArrowUpRight, Brain, Home, Users, Monitor, Heart, Lightbulb } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getServices } from '../api';
import type { Service } from '../types';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  home: Home, brain: Brain, users: Users,
  monitor: Monitor, heart: Heart, lightbulb: Lightbulb,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.iconName] ?? Brain;
  return (
    <div className="group bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col gap-5 relative overflow-hidden">
      <div className="absolute top-3 right-4 w-20 h-20 rounded-full bg-[#E8F5E8] opacity-60 blur-sm pointer-events-none" />
      <div className="w-14 h-14 rounded-2xl bg-[#3A9B3A] flex items-center justify-center flex-shrink-0 relative">
        <Icon size={24} className="text-white" />
      </div>
      <div className="flex flex-col gap-2 flex-1 relative">
        <h3 className="font-bold text-gray-900 text-base">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      </div>
      <div className="flex items-center justify-between relative">
        <a href={service.detailUrl} className="text-[#3A9B3A] text-sm font-semibold">Ətraflı öyrən</a>
        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#3A9B3A] group-hover:bg-[#f0faf0] transition-all">
          <ArrowUpRight size={15} className="text-gray-500 group-hover:text-[#3A9B3A]" />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { data: services, loading } = useApi(getServices);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!services) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-c]').forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 70);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [services]);

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Xidmətlərimiz</h2>
            <p className="text-gray-500 mt-2 text-sm">Sizin ehtiyaclarınıza uyğun psixoloji xidmətlər</p>
          </div>
          <a href="/xidmetler" className="text-[#3A9B3A] text-sm font-semibold hover:underline whitespace-nowrap">Hamısına bax →</a>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-gray-100 h-52 animate-pulse">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-4" />
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(services ?? []).map((service) => (
              <div key={service.id} data-c style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
