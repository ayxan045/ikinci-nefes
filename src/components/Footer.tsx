import { Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS, SERVICES_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#C8E6C8' }}>
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3A9B3A] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base">P</span>
              </div>
              <span className="font-bold text-gray-900 text-base">Psixologiya Mərkəzi</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Peşəkar psixoloji xidmətlər və dəstək.
              Sizin emosional sağlamlığınız bizim
              prioritetimizdir.
            </p>
          </div>

          {/* Keçidlər */}
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-5">Keçidlər</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Xidmətlər */}
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-5">Xidmətlər</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə */}
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-5">Əlaqə</h4>
            <ul className="flex flex-col gap-3 mb-5">
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g,'')}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">
                  <Phone size={15} className="text-gray-700 flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">
                  <Mail size={15} className="text-gray-700 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-gray-700">
                  <MapPin size={15} className="text-gray-700 flex-shrink-0" />
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#3A9B3A] flex items-center justify-center hover:bg-[#2D7A2D] transition-colors">
                  <span className="text-white text-xs font-bold">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30" />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-700">
            © 2026 Psixologiya Mərkəzi. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-8">
            <a href="/vakansiyalar" className="text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">Vakansiyalar</a>
            <a href="/gizlilik" className="text-sm text-gray-700 hover:text-[#3A9B3A] transition-colors">Gizlilik siyasəti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
