import type {
  NavLink, SocialLink, ContactInfo,
  Psychologist, Service, PsychTest, BlogPost,
} from '../types';

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Ana səhifə',  href: '/' },
  { label: 'Haqqımızda', href: '/haqqimizda' },
  { label: 'Xidmətlər',  href: '/xidmetler' },
  { label: 'Psixoloqlar',href: '/psixoloqlar' },
  { label: 'Testlər',    href: '/testler' },
  { label: 'Bloq',       href: '/bloq' },
  { label: 'Əlaqə',      href: '/elaqe' },
];

export const SERVICES_LINKS: NavLink[] = [
  { label: 'Fərdi terapiya',          href: '/xidmetler/ferdi-terapiya' },
  { label: 'Cütlük məsləhətləşməsi',  href: '/xidmetler/cutluk' },
  { label: 'Ailə terapiyası',         href: '/xidmetler/aile-terapiyasi' },
  { label: 'Uşaq psixologiyası',      href: '/xidmetler/usaq-psixologiyasi' },
];

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT_INFO: ContactInfo = {
  phone:   '+994 50 123 45 67',
  email:   'info@psixologiya.az',
  address: 'Bakı, Azərbaycan',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook',  href: 'https://facebook.com',  icon: 'f'  },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'ig' },
  { name: 'LinkedIn',  href: 'https://linkedin.com',  icon: 'in' },
];

// ─── Psychologists (mock — swap with API call) ────────────────────────────────
export const PSYCHOLOGISTS: Psychologist[] = [
  {
    id: '1',
    name: 'Dr. Leyla Əliyeva',
    title: 'Klinik Psixoloq',
    experience: '12 il təcrübə',
    rating: 4.9,
    reviewCount: 134,
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80',
    certified: true,
    specializations: ['Depressiya', 'Narahatlıq', 'Travma'],
    bio: 'Klinik psixologiya üzrə 12 illik təcrübəyə malik mütəxəssis.',
  },
  {
    id: '2',
    name: 'Rəşad Məmmədov',
    title: 'Ailə Terapevti',
    experience: '8 il təcrübə',
    rating: 5.0,
    reviewCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80',
    certified: true,
    specializations: ['Ailə terapiyası', 'Cütlük məsləhəti'],
    bio: 'Ailə və cüt münasibətlərinin yaxşılaşdırılması üzrə mütəxəssis.',
  },
  {
    id: '3',
    name: 'Nigar Həsənova',
    title: 'Uşaq Psixoloqu',
    experience: '10 il təcrübə',
    rating: 4.9,
    reviewCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80',
    certified: true,
    specializations: ['Uşaq psixologiyası', 'Yeniyetmə'],
    bio: 'Uşaq və yeniyetmə psixologiyası üzrə ixtisaslaşmış psixoloq.',
  },
  {
    id: '4',
    name: 'Elçin Quliyev',
    title: 'Travma Mütəxəssisi',
    experience: '15 il təcrübə',
    rating: 4.9,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&q=80',
    certified: true,
    specializations: ['Travma', 'PTSD', 'Stress'],
    bio: 'Travma və PTSD müalicəsində 15 illik geniş təcrübə.',
  },
];

// ─── Services (mock — swap with API call) ─────────────────────────────────────
export const SERVICES: Service[] = [
  { id: '1', slug: 'aile-meslehetlesmesi', title: 'Ailə Məsləhətləşməsi',
    description: 'Ailə münasibətlərini gücləndirmək və ünsiyyət problemlərini həll etmək',
    iconName: 'home', detailUrl: '/xidmetler/aile-meslehetlesmesi' },
  { id: '2', slug: 'ferdi-terapiya', title: 'Fərdi Terapiya',
    description: 'Şəxsi çətinliklərinizi həll etmək üçün fərdi yanaşma və peşəkar dəstək',
    iconName: 'brain', detailUrl: '/xidmetler/ferdi-terapiya' },
  { id: '3', slug: 'qrup-terapiyasi', title: 'Qrup Terapiyası',
    description: 'Oxşar problemləri olan insanlarla birlikdə inkişaf etmək imkanı',
    iconName: 'users', detailUrl: '/xidmetler/qrup-terapiyasi' },
  { id: '4', slug: 'online-konsultasiya', title: 'Online Konsultasiya',
    description: 'Rahat formatda, evdən çıxmadan peşəkar psixoloji yardım',
    iconName: 'monitor', detailUrl: '/xidmetler/online-konsultasiya' },
  { id: '5', slug: 'travma-terapiyasi', title: 'Travma Terapiyası',
    description: 'Keçmiş travmaların təsirini azaltmaq və emosional sağlamlığı bərpa etmək',
    iconName: 'heart', detailUrl: '/xidmetler/travma-terapiyasi' },
  { id: '6', slug: 'sexsi-inkisaf', title: 'Şəxsi İnkişaf',
    description: 'Potensialınızı açmaq, özünüzü daha yaxşı tanımaq və həyat keyfiyyətinizi artırmaq',
    iconName: 'lightbulb', detailUrl: '/xidmetler/sexsi-inkisaf' },
];

// ─── Tests (mock — swap with API call) ────────────────────────────────────────
export const PSYCH_TESTS: PsychTest[] = [
  { id: '1', slug: 'stress-testi', title: 'Stress Səviyyəsi Testi',
    description: 'Stress səviyyənizi qiymətləndirin və idarəetmə yollarını öyrənin',
    duration: '5 dəqiqə', questionCount: 15, isFree: true, category: 'Stress' },
  { id: '2', slug: 'depressiya-testi', title: 'Depressiya Testi',
    description: 'Emosional vəziyyətinizi yoxlayın və dəstək ehtiyacınızı müəyyənləşdirin',
    duration: '5 dəqiqə', questionCount: 15, isFree: true, category: 'Depressiya' },
  { id: '3', slug: 'narahatiq-testi', title: 'Narahatlıq Testi',
    description: 'Narahatlıq səviyyənizi ölçün və sakitləşmə üsullarını kəşf edin',
    duration: '5 dəqiqə', questionCount: 15, isFree: true, category: 'Narahatlıq' },
];

// ─── Blog Posts (mock — swap with API call) ───────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  { id: '1', slug: 'stresle-mucadile', title: 'Streslə Necə Mübarizə Aparmaq Olar?',
    excerpt: 'Gündəlik həyatda stresslə başa çıxmaq üçün effektiv metodlar və praktiki məsləhətlər',
    category: 'Psixoloji Sağlamlıq', date: '15 Aprel 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80' },
  { id: '2', slug: 'ozune-inam', title: 'Özünə İnam və Özünü Qəbul',
    excerpt: 'Özünəinamı artırmaq və özünü olduğu kimi qəbul etməyin əhəmiyyəti',
    category: 'Psixoloji Sağlamlıq', date: '15 Aprel 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80' },
  { id: '3', slug: 'usaqlarla-unsiyyet', title: 'Uşaqlarla Effektiv Ünsiyyət',
    excerpt: 'Valideynlər üçün uşaqlarla sağlam əlaqə qurmaq və onları başa düşmək yolları',
    category: 'Psixoloji Sağlamlıq', date: '15 Aprel 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80' },
];
