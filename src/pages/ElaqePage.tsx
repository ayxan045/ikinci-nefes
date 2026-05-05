import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  // TODO: replace with real API call: POST /contact
  console.log('[mock] Contact form:', data);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 800));
}

export default function ElaqePage() {
  const [form, setForm] = useState<ContactFormData>({
    fullName: '', email: '', phone: '', subject: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitContactForm(form);
    setLoading(false);
    setSent(true);
  };

  const inputClass = "w-full px-4 py-3.5 bg-[#F5F5F5] border border-transparent rounded-2xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#3A9B3A]/40 focus:ring-2 focus:ring-[#3A9B3A]/10 transition-all";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Əlaqə</h1>
          <p className="text-gray-500 mb-12">Bizimlə əlaqə saxlayın — sizə kömək etməkdən məmnunuq</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#3A9B3A] rounded-3xl p-8 text-white flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Bizimlə əlaqə</h2>
                <p className="text-green-100 text-sm leading-relaxed">
                  Suallarınız üçün aşağıdakı kanallardan biri ilə bizimlə əlaqə saxlaya bilərsiniz.
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { Icon: Phone, label: 'Telefon', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g,'')}` },
                    { Icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                    { Icon: MapPin, label: 'Ünvan', value: CONTACT_INFO.address, href: '#' },
                    { Icon: Clock, label: 'İş saatları', value: 'B.e. – Cümə: 09:00 – 19:00', href: null },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-green-200 font-medium mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white font-medium text-sm hover:text-green-200 transition-colors">{value}</a>
                        ) : (
                          <p className="text-white font-medium text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 h-56 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
                  <p className="text-sm font-medium">Xəritə</p>
                  <p className="text-xs mt-1">{CONTACT_INFO.address}</p>
                  {/* TODO: replace with Google Maps embed */}
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj göndərin</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E8] flex items-center justify-center text-3xl">✅</div>
                  <p className="font-bold text-gray-900 text-lg">Mesajınız göndərildi!</p>
                  <p className="text-sm text-gray-500 text-center">Ən qısa zamanda sizinlə əlaqə saxlayacağıq.</p>
                  <button onClick={() => { setSent(false); setForm({ fullName:'', email:'', phone:'', subject:'', message:'' }); }}
                    className="text-sm text-[#3A9B3A] font-semibold hover:underline mt-2">
                    Yeni mesaj göndər
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Ad Soyad</label>
                      <input type="text" required placeholder="Adınızı daxil edin"
                        value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</label>
                      <input type="email" required placeholder="email@example.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Telefon</label>
                    <input type="tel" placeholder="+994 50 000 00 00"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Mövzu</label>
                    <input type="text" placeholder="Mesajın mövzusu"
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Mesaj</label>
                    <textarea rows={5} required placeholder="Mesajınızı yazın..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-4 bg-[#3A9B3A] text-white font-semibold text-sm rounded-2xl hover:bg-[#2D7A2D] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2">
                    {loading ? 'Göndərilir...' : <><Send size={16} /> Göndər</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
