import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>('[data-a]').forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = item.dataset.transform || 'translateY(20px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
        item.style.opacity = '1';
        item.style.transform = item.dataset.transformEnd || 'translateY(0)';
      }, 80 + i * 100);
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: 'linear-gradient(135deg, #C8E6C8 0%, #D4EDD4 40%, #E0F0E0 100%)' }}
    >
      {/* Faint circle decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-2 border-white/50" />
      <div className="absolute top-28 left-20 w-8 h-8 rounded-full border-2 border-white/40" />

      <div className="max-w-7xl mx-auto px-8 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="flex flex-col gap-6 z-10">
            <h1 data-a className="text-6xl lg:text-7xl font-extrabold leading-[1.1] text-gray-900">
              <span className="block">İkinci</span>
              <span className="block">Nəfəsinizi</span>
              <span className="block text-[#3A9B3A] relative inline-block">
                Tapın
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#3A9B3A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p data-a className="text-base text-gray-700 leading-relaxed max-w-sm">
              Elmi əsaslı testlərimizlə psixoloji vəziyyətinizi
              qiymətləndirin və nəticənizə uyğun dəstək alın.
            </p>

            <div data-a className="flex items-center gap-4 pt-2">
              <a href="#booking"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#3A9B3A] text-white font-semibold text-sm rounded-2xl hover:bg-[#2D7A2D] transition-all duration-200 shadow-md hover:shadow-lg">
                Seansa yazıl
                <ChevronRight size={16} />
              </a>
              <a href="#tests"
                className="px-7 py-3.5 bg-white text-gray-800 font-semibold text-sm rounded-2xl border border-gray-200 hover:shadow-sm transition-all duration-200">
                Testə başla
              </a>
            </div>
          </div>

          {/* Right: Figma-exact photo collage with rotated cards */}
          <div data-a className="relative hidden lg:flex items-center justify-center h-[500px]">

            {/* Large center-left photo — slightly rotated counter-clockwise */}
            <div
              className="absolute shadow-2xl overflow-hidden bg-white"
              style={{
                width: '52%',
                aspectRatio: '3/4',
                borderRadius: '28px',
                border: '5px solid white',
                left: '2%',
                top: '50%',
                transform: 'translateY(-50%) rotate(-4deg)',
                zIndex: 2,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Psixoloq"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right photo — slightly rotated clockwise */}
            <div
              className="absolute shadow-xl overflow-hidden bg-white"
              style={{
                width: '42%',
                aspectRatio: '4/3',
                borderRadius: '22px',
                border: '4px solid white',
                right: '0%',
                top: '4%',
                transform: 'rotate(3deg)',
                zIndex: 3,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80"
                alt="Psixoloq 2"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Bottom-right photo — slightly rotated clockwise */}
            <div
              className="absolute shadow-xl overflow-hidden bg-white"
              style={{
                width: '44%',
                aspectRatio: '4/3',
                borderRadius: '22px',
                border: '4px solid white',
                right: '0%',
                bottom: '4%',
                transform: 'rotate(2deg)',
                zIndex: 3,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
                alt="Psixoloq 3"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
