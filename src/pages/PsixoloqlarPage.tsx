import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, ArrowRight, Award, Search } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getPsychologists } from '../api';
import type { Psychologist } from '../types';

const SPECIALIZATIONS = ['Hamısı', 'Depressiya', 'Narahatlıq', 'Travma', 'Ailə terapiyası', 'Uşaq psixologiyası'];

function PsychCard({ p }: { p: Psychologist }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-[220px] overflow-hidden bg-[#f0e8d0]">
        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover object-top" />
        {p.certified && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100">
            <Award size={12} className="text-[#3A9B3A]" />
            <span className="text-[11px] font-semibold text-gray-700">Sertifikatlı</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
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
        {p.specializations && (
          <div className="flex flex-wrap gap-1.5">
            {p.specializations.map((s) => (
              <span key={s} className="text-[10px] font-medium bg-[#E8F5E8] text-[#3A9B3A] px-2.5 py-1 rounded-full">{s}</span>
            ))}
          </div>
        )}
        <a href={`/psixoloqlar/${p.id}`}
          className="mt-auto w-full py-2.5 rounded-2xl text-sm font-semibold text-[#3A9B3A] transition-all flex items-center justify-center gap-1.5 border border-transparent hover:border-[#3A9B3A]/20"
          style={{ background: 'rgba(58,155,58,0.06)' }}>
          Profilə bax <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function PsixoloqlarPage() {
  const { data: psychologists, loading } = useApi(getPsychologists);
  const [search, setSearch] = useState('');
  const [activeSpec, setActiveSpec] = useState('Hamısı');

  const filtered = (psychologists ?? []).filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.title.toLowerCase().includes(search.toLowerCase());
    const matchSpec = activeSpec === 'Hamısı' || (p.specializations ?? []).includes(activeSpec);
    return matchSearch && matchSpec;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Psixoloqlarımız</h1>
          <p className="text-gray-500 mb-10">Təcrübəli və sertifikatlı mütəxəssislərlə tanış olun</p>

          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Psixoloq axtar..." value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#3A9B3A]/40 focus:ring-2 focus:ring-[#3A9B3A]/10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {SPECIALIZATIONS.map((s) => (
                <button key={s} onClick={() => setActiveSpec(s)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSpec === s ? 'bg-[#3A9B3A] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#3A9B3A]/40'
                  }`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="h-[220px] bg-gray-200" />
                  <div className="p-5"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2" /></div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium">Nəticə tapılmadı</p>
              <p className="text-sm mt-1">Axtarış şərtlərini dəyişdirin</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((p) => <PsychCard key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
