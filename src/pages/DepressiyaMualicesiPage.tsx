import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Clock, MapPin, Monitor, ChevronRight } from 'lucide-react';

const symptoms = [
  'Əvvəllər zövq aldığınız şeylərdən maraq itkisi',
  'Davamlı kədər, ümidsizlik və ya boşluq hissi yaşayanlar',
  'Yuxu problemləri (çox yatmaq və ya yata bilməmək)',
  'Enerji çatışmazlığı və yorğunluq',
  'İntihar düşüncələri və ya özünə zərər vermə istəyi',
  'Konsentrasiya problemləri',
];

const steps = [
  { num: '01', title: 'Təhlükəsiz və dəstəkləyici mühit' },
  { num: '02', title: 'Depressiyanın təzahürlərinin dərindən araşdırılması' },
  { num: '03', title: 'Şəxsiləşdirilmiş müalicə strategiyaları' },
  { num: '04', title: 'Tədricən simptomların azalması (6–12 həftə)' },
  { num: '05', title: 'Uzunmüddətli sağlamlıq və relaps qarşısının alınması planı' },
  { num: '06', title: 'Lazım gələrsə psixiatr ilə əməkdaşlıq (dərman müalicəsi)' },
];

export default function DepressiyaMualicesiPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] relative overflow-hidden">
        <div className="h-[400px] relative">
          <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?w=1400&q=80"
            alt="Depressiya" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-8 pb-12 w-full">
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
                <a href="/" className="hover:text-white">Ana səhifə</a>
                <span>/</span>
                <a href="/xidmetler" className="hover:text-white">Xidmətlər</a>
                <span>/</span>
                <span className="text-white">Depressiya Müalicəsi</span>
              </nav>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Depressiya Müalicəsi
              </h1>
              <p className="text-white/80 mt-3 max-w-xl text-base">
                Depressiya sadəcə kəmiyyət deyil, ciddi ruhi sağlamlıq problemidir. Bizim mütəxəssislərimiz sizə depressiyanın üzərindən gəlməyə kömək edirlər.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Xidmət Haqqında</h2>
            <p className="text-gray-600 leading-relaxed">
              Depressiya fərdi psixoterapiya, dəstək və strukturlaşdırılmış müalicə planı ilə uğurla müalicə oluna bilər. Bizim yanaşmamız Kognitiv-Davranış Terapiyası, İnterpersonal Terapiya və Mindfulness əsaslı üsulları birləşdirir. Siz öyrənəcəksiniz mənfi düşüncə tərzlərini dəyişməyi, emosional tənzimləmə bacarıqlarını inkişaf etdirməyi və gündəlik həyatda aktivliyi artırmağı.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Bu Xidmət Kimlər Üçündür?</h2>
          <p className="text-gray-500 mb-8 text-sm">Aşağıdakı vəziyyətlərdən hər hansı biri sizə aiddirsə, bu xidmət sizə kömək edə bilər</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <div key={s} className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4 border border-gray-100">
                <div className="w-8 h-8 rounded-xl bg-[#E8F5E8] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} className="text-[#3A9B3A]" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Terapiya Prosesində Nə Gözləmək Olar?</h2>
          <p className="text-gray-500 mb-8 text-sm">Addım-addım sizi gözləyən terapiya yolculuğu</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.num} className="bg-[#F5F5F5] rounded-3xl p-7 border border-gray-100 hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-[#3A9B3A]/30 mb-3">{step.num}</p>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session format */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Sessiya Formatı</h2>
          <p className="text-gray-500 mb-8 text-sm">Özünüzə uyğun sessiya formatını seçin</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E8] flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#3A9B3A]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Ofis Sessiyası</h3>
                <p className="text-gray-500 text-sm mb-3">Rahat və arxayın mühitdə şəxsi sessiya</p>
                <div className="flex items-center gap-2 text-[#3A9B3A] text-sm">
                  <Clock size={14} />
                  <span className="font-medium">50 dəqiqə</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E8] flex items-center justify-center flex-shrink-0">
                <Monitor size={20} className="text-[#3A9B3A]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Online Sessiya</h3>
                <p className="text-gray-500 text-sm mb-3">Təhlükəsiz video platformada konfidensial görüş</p>
                <div className="flex items-center gap-2 text-[#3A9B3A] text-sm">
                  <Clock size={14} />
                  <span className="font-medium">50 dəqiqə</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#F5F5F5] rounded-3xl p-10 lg:p-14 text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold text-gray-900">
              İlk Addımı <span className="text-[#3A9B3A]">Atın</span>
            </h2>
            <p className="text-gray-500 max-w-md">Psixoloqlarımızla görüşün və özünüzə uyğun terapiya planı qurub dəyişikliyə başlayın</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#booking"
                className="flex items-center gap-2 px-8 py-4 bg-[#3A9B3A] text-white font-semibold rounded-2xl hover:bg-[#2D7A2D] transition-all shadow-md">
                Seansa yazıl <ChevronRight size={16} />
              </a>
              <a href="tel:+994123456789"
                className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-2xl border border-gray-200 hover:shadow-sm transition-all">
                +994 12 345 67 89
              </a>
            </div>
            <p className="text-sm text-[#3A9B3A]">info@psixologiya.az</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
