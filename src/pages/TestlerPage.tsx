import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getTests } from '../api';
import type { PsychTest } from '../types';

function TestCard({ test }: { test: PsychTest }) {
  return (
    <div className="bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-[#3A9B3A] flex items-center justify-center">
            <FileText size={24} className="text-white" />
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#3A9B3A] border-2 border-white flex items-center justify-center">
            <CheckCircle size={12} fill="white" className="text-white" strokeWidth={0} />
          </div>
        </div>
        {test.isFree && (
          <span className="text-[11px] font-bold text-[#3A9B3A] bg-[#E8F5E8] px-3 py-1.5 rounded-full uppercase tracking-wide">PULSUZ</span>
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-base">{test.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{test.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-[#E8F5E8] rounded-full px-3 py-1.5">
          <Clock size={12} className="text-[#3A9B3A]" />
          <span className="text-xs font-medium text-gray-700">{test.duration}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#E8F5E8] rounded-full px-3 py-1.5">
          <FileText size={12} className="text-[#3A9B3A]" />
          <span className="text-xs font-medium text-gray-700">{test.questionCount} sual</span>
        </div>
      </div>
      <a href={`/testler/${test.slug}`}
        className="w-full py-3.5 bg-[#3A9B3A] text-white text-sm font-semibold rounded-2xl hover:bg-[#2D7A2D] transition-all duration-200 flex items-center justify-center gap-2">
        Testə başla <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function TestlerPage() {
  const { data: tests, loading } = useApi(getTests);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Psixoloji Testlər</h1>
          <p className="text-gray-500 mb-12">Özünüzü daha yaxşı tanıyın və inkişaf yollarını müəyyənləşdirin</p>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-3xl p-7 border border-gray-100 h-64 animate-pulse"><div className="w-14 h-14 bg-gray-200 rounded-2xl mb-4" /></div>)}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(tests ?? []).map((test) => <TestCard key={test.id} test={test} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
