import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-r]').forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 130);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div data-r style={{ opacity: 0, transform: 'translateY(28px)' }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-64 bg-[#e0f0e0]">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-64 bg-[#d0e8d0] mt-10">
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-44 bg-[#c8e0c8]">
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-44 bg-[#d8ecd8]">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div data-r style={{ opacity: 0, transform: 'translateY(28px)' }}>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Haqqımızda</h2>
            </div>

            <div data-r style={{ opacity: 0, transform: 'translateY(28px)' }} className="flex flex-col gap-4 text-gray-500 text-sm leading-7">
              <p>İkinci Nəfəs psixologiya mərkəzi 2015-ci ildə bir arzunun reallaşması ilə yaranıb. Məqsədimiz hər bir insana keyfiyyətli və əlçatan psixoloji yardım təqdim etmək idi.</p>
              <p>Bu gün biz 15-dən çox sertifikatlı psixoloq, 2500-dən artıq xoşbəxt müştəri və 8000-dən çox uğurlu seansla Azərbaycanın aparıcı psixologiya mərkəzlərindən biriyik.</p>
              <p>Komandamız davamlı təhsil alır, beynəlxalq təcrübələri öyrənir və ən müasir terapevtik metodları tətbiq edir.</p>
            </div>

            <div data-r style={{ opacity: 0, transform: 'translateY(28px)' }} className="flex flex-col gap-3">
              {['15+ il professional təcrübə', 'Beynəlxalq sertifikatlar və təlimlər', 'Elmi əsaslı müalicə metodları'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#3A9B3A] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
