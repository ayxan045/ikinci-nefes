import { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getPsychologists, getAvailableSlots, submitBooking } from '../api';
import type { BookingFormData, AvailableSlot } from '../types';

export default function Booking() {
  const { data: psychologists } = useApi(getPsychologists);
  const [form, setForm] = useState<BookingFormData>({
    psychologistId: '', date: '', time: '', sessionType: 'online',
  });
  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleShowSlots = async () => {
    if (!form.psychologistId || !form.date) return;
    setLoadingSlots(true);
    const available = await getAvailableSlots(form.psychologistId, form.date);
    setSlots(available);
    setLoadingSlots(false);
  };

  const handleSubmit = async () => {
    if (!form.time) return;
    await submitBooking(form);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #A5D6A7 100%)' }}>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Left illustration */}
            <div className="bg-white rounded-2xl flex items-center justify-center p-8 min-h-[320px]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-8xl" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' }}>📍</div>
                <div className="w-32 h-6 bg-gradient-to-b from-gray-200 to-transparent rounded-full opacity-40 blur-sm -mt-2" />
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E8] flex items-center justify-center">
                  <Calendar size={18} className="text-[#3A9B3A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Online rezervasiya</h3>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center flex-1 gap-3 py-8">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E8] flex items-center justify-center text-3xl">✅</div>
                  <p className="font-bold text-gray-900">Rezervasiyanız qeydə alındı!</p>
                  <p className="text-sm text-gray-500 text-center">Tezliklə sizinlə əlaqə saxlanılacaq.</p>
                  <button onClick={() => { setSubmitted(false); setSlots([]); setForm({ psychologistId:'', date:'', time:'', sessionType:'online' }); }}
                    className="text-sm text-[#3A9B3A] font-semibold hover:underline mt-2">Yeni rezervasiya et</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Psixoloq */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Psixoloq seçin</label>
                    <div className="relative">
                      <select value={form.psychologistId}
                        onChange={(e) => setForm({ ...form, psychologistId: e.target.value, time: '' })}
                        className="w-full appearance-none px-4 py-3.5 bg-[#F0FAF0] border-0 rounded-2xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3A9B3A]/20 cursor-pointer">
                        <option value=""></option>
                        {(psychologists ?? []).map((p) => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Tarix */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Tarix seçin</label>
                    <div className="relative">
                      <input type="date" value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value, time: '' })}
                        className="w-full px-4 py-3.5 bg-[#F0FAF0] border-0 rounded-2xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3A9B3A]/20" />
                      <Calendar size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Saat seçin — slots göstərilmədən əvvəl */}
                  {slots.length === 0 && (
                    <button onClick={handleShowSlots} disabled={!form.psychologistId || !form.date || loadingSlots}
                      className="w-full py-4 bg-[#3A9B3A] text-white font-semibold text-sm rounded-2xl hover:bg-[#2D7A2D] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md">
                      {loadingSlots ? 'Yüklənir...' : 'Mövcud saatları göstər'}
                    </button>
                  )}

                  {/* Available slots */}
                  {slots.length > 0 && (
                    <>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Saat seçin</label>
                        <div className="grid grid-cols-4 gap-2">
                          {slots.map((slot) => (
                            <button key={slot.time} disabled={!slot.available}
                              onClick={() => setForm({ ...form, time: slot.time })}
                              className={`py-2 rounded-xl text-sm font-medium transition-all ${
                                form.time === slot.time
                                  ? 'bg-[#3A9B3A] text-white'
                                  : slot.available
                                  ? 'bg-[#F0FAF0] text-gray-700 hover:bg-[#E0F5E0]'
                                  : 'bg-gray-100 text-gray-300 cursor-not-allowed line-through'
                              }`}>
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button onClick={handleSubmit} disabled={!form.time}
                        className="w-full py-4 bg-[#3A9B3A] text-white font-semibold text-sm rounded-2xl hover:bg-[#2D7A2D] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md">
                        Seansı təsdiqlə
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
