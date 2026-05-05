import { useEffect, useRef } from 'react';
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
          <span className="text-[11px] font-bold text-[#3A9B3A] bg-[#E8F5E8] px-3 py-1.5 rounded-full uppercase tracking-wide">
            PULSUZ
          </span>
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

export default function Tests() {
  const { data: tests, loading } = useApi(getTests);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tests) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-t]').forEach((el, i) => {
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
  }, [tests]);

  return (
    <section id="tests" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Psixoloji Testlər</h2>
            <p className="text-gray-500 mt-2 text-sm">Özünüzü daha yaxşı tanıyın və inkişaf yollarını müəyyənləşdirin</p>
          </div>
          <a href="/testler" className="text-[#3A9B3A] text-sm font-semibold hover:underline whitespace-nowrap">Hamısına bax →</a>
        </div>
        {loading ? (
          <div className="grid sm:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => <div key={i} className="bg-white rounded-3xl p-7 border border-gray-100 h-64 animate-pulse"><div className="w-14 h-14 bg-gray-200 rounded-2xl mb-4" /></div>)}
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-5">
            {(tests ?? []).map((test) => (
              <div key={test.id} data-t style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <TestCard test={test} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
