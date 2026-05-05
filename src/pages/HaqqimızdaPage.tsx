import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { PSYCHOLOGISTS } from '../constants';

const values = [
  { title: 'Məxfilik', desc: 'Hər bir müştərimizin şəxsi məlumatları və sessiyaları tam təhlükəsiz və konfidensialdır.' },
  { title: 'Empatiya', desc: 'Hər kəsin unikal ehtiyaclarını anlayır və dəstək göstəririk.' },
  { title: 'Nəticə Yönümlülük', desc: 'Hər müştərimizin real və davamlı dəyişikliklər əldə etməsinə çalışırıq.' },
  { title: 'Peşəkarlıq', desc: 'Yalnız lisenziyalı və təcrübəli psixoloqlarla çalışırıq.' },
];

export default function HaqqimızdaPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bizim <span className="text-[#3A9B3A]">Hekayəmiz</span>
              </h1>
              <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
                <p>Psixologiya Mərkəzi 2009-cu ildə bir neçə həvəsli psixoloq tərəfindən yaradıldı. Məqsəd sadə idi: Azərbaycanda keyfiyyətli və əlçatan ruhi sağlamlıq xidmətləri təqdim etmək.</p>
                <p>İlk illərdə kiçik bir ofisin 3 mütəxəssisi ilə başladığımız səyahət bu gün 12 psixoloqdan ibarət komandaya çevrilib. Hər il 500-dən çox insana kömək edirik.</p>
                <p>2020-ci ildə pandemiya dövründə online terapiya xidmətlərinə başladıq və bu gün Azərbaycanın hər yerindən müştərilərə xidmət göstəririk.</p>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                {['15+ il professional təcrübə','Beynəlxalq sertifikatlar və təlimlər','Elmi əsaslı müalicə metodları'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#3A9B3A] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-64 bg-[#d8f0d8]">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-64 bg-[#c8e8c8] mt-8">
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-44 bg-[#b8e0b8]">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-44 bg-[#c8e8c8]">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F5] rounded-3xl p-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3A9B3A] flex items-center justify-center text-white text-xl">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900">Missiyamız</h2>
              <p className="text-gray-600 leading-relaxed">Hər bir insanın ruhi sağlamlığa çatmaq hüququnu müdafiə edir və professional, elmi əsaslı, əlçatan psixoloji xidmətlər təqdim etməklə cəmiyyətdə ruhi sağlamlıq mədəniyyətini inkişaf etdiririk.</p>
            </div>
            <div className="bg-[#F5F5F5] rounded-3xl p-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3A9B3A] flex items-center justify-center text-white text-xl">🔭</div>
              <h2 className="text-2xl font-bold text-gray-900">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">Azərbaycanda ruhi sağlamlıq sahəsində aparıcı mərkəz olmaq və hər kəsin özünü dərk edib, emosional sağlamlığını qoruyub saxlaya biləcəyi cəmiyyət qurmaq.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Dəyərlərimiz</h2>
          <p className="text-gray-500 mb-10 text-sm">Hər gün işimizdə rəhbər tutduğumuz əsas prinsiplər</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Komandamız</h2>
          <p className="text-gray-500 mb-10 text-sm">Təcrübəli və empatik psixoloqlarımız sizin yanınızdadır</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PSYCHOLOGISTS.map((p) => (
              <div key={p.id} className="bg-[#F5F5F5] rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden bg-[#d8f0d8]">
                  <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-[#3A9B3A] font-medium mt-0.5">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
