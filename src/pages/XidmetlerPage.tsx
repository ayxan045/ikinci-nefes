import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUpRight, Brain, Home, Users, Monitor, Heart, Lightbulb } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getServices } from '../api';
import type { Service } from '../types';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  home: Home, brain: Brain, users: Users, monitor: Monitor, heart: Heart, lightbulb: Lightbulb,
};

function ServiceDetailCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.iconName] ?? Brain;
  return (
    <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 relative overflow-hidden">
      <div className="absolute top-3 right-4 w-24 h-24 rounded-full bg-[#E8F5E8] opacity-50 blur-sm pointer-events-none" />
      <div className="w-14 h-14 rounded-2xl bg-[#3A9B3A] flex items-center justify-center">
        <Icon size={24} className="text-white" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-lg">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <a href={service.detailUrl} className="text-[#3A9B3A] text-sm font-semibold">Ətraflı öyrən</a>
        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#3A9B3A] group-hover:bg-[#f0faf0] transition-all">
          <ArrowUpRight size={15} className="text-gray-500 group-hover:text-[#3A9B3A]" />
        </div>
      </div>
    </div>
  );
}

export default function XidmetlerPage() {
  const { data: services, loading } = useApi(getServices);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-16"
            style={{ background: 'linear-gradient(135deg, #C8E6C8 0%, #D4EDD4 60%, #E0F0E0 100%)' }}>
            <div className="relative z-10 max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Sizə uyğun<br />
                <span className="text-[#3A9B3A]">Psixoloji Dəstək</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Hər kəsin ehtiyaclarına uyğun kompleks və fərdi psixoloji xidmətlər. Narahatlıqdan tutmuş şəxsi inkişafa qədər geniş spektrdə professional dəstək.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Fərdi yanaşma', 'Online və ofis sessiyaları', '6 Xidmət sahəsi'].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#3A9B3A]" />{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute right-8 top-8 w-64 h-64 rounded-full bg-white/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Xidmətlərimiz</h2>
          <p className="text-gray-500 mb-10 text-sm">Sizin ehtiyaclarınıza uyğun psixoloji xidmətlər</p>
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 h-56 animate-pulse"><div className="w-14 h-14 bg-gray-200 rounded-2xl mb-4" /></div>)}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(services ?? []).map((service) => <ServiceDetailCard key={service.id} service={service} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
