import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-[72px] min-h-[70vh] flex items-center justify-center bg-[#F5F5F5]">
        <div className="text-center flex flex-col items-center gap-5 px-8">
          <div className="text-9xl font-bold text-[#3A9B3A]/20">404</div>
          <h1 className="text-3xl font-bold text-gray-900">Səhifə tapılmadı</h1>
          <p className="text-gray-500 max-w-sm">Axtardığınız səhifə mövcud deyil və ya köçürülmüşdür.</p>
          <a href="/"
            className="flex items-center gap-2 px-6 py-3 bg-[#3A9B3A] text-white font-semibold rounded-2xl hover:bg-[#2D7A2D] transition-all">
            <ArrowLeft size={16} /> Ana səhifəyə qayıt
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
