import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#3A9B3A] flex items-center justify-center">
            <span className="text-white font-bold text-base">Ψ</span>
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#3A9B3A] uppercase tracking-wider leading-none">İkinci nəfəs</p>
            <p className="text-[9px] text-gray-400 font-medium leading-none mt-0.5">Psixologiya mərkəzi</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-[#3A9B3A] rounded-lg hover:bg-[#f0faf0] transition-all duration-150">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="/elaqe"
            className="flex items-center gap-1.5 px-5 py-2.5 bg-[#3A9B3A] text-white text-[13px] font-semibold rounded-xl hover:bg-[#2D7A2D] transition-all duration-200 shadow-sm">
            Seansa yazıl <ChevronRight size={15} />
          </a>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="bg-white px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#3A9B3A] hover:bg-[#f0faf0] rounded-lg transition-all"
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/elaqe"
            className="mt-2 px-4 py-2.5 bg-[#3A9B3A] text-white text-sm font-semibold rounded-xl text-center"
            onClick={() => setMobileOpen(false)}>
            Seansa yazıl
          </a>
        </div>
      </div>
    </header>
  );
}
