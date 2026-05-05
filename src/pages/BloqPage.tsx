import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Search } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getBlogPosts } from '../api';
import type { BlogPost } from '../types';

const CATEGORIES = ['Hamısı', 'Psixoloji Sağlamlıq', 'Stress', 'Depressiya', 'Uşaq psixologiyası'];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
      <div className="relative h-52 overflow-hidden bg-gray-200">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5">
          <span className="text-[11px] font-semibold text-gray-700">{post.category}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-[#3A9B3A]">
          <Calendar size={13} />
          <span className="text-xs font-medium">{post.date}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#3A9B3A] transition-colors">{post.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
        <a href={`/bloq/${post.slug}`} className="flex items-center gap-1.5 text-[#3A9B3A] text-sm font-semibold mt-1 group-hover:gap-2.5 transition-all">
          Məqaləni oxu <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default function BloqPage() {
  const { data: posts, loading } = useApi(getBlogPosts);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Hamısı');

  const filtered = (posts ?? []).filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'Hamısı' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-[72px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Bloq və Məqalələr</h1>
          <p className="text-gray-500 mb-10">Psixoloji sağlamlıq haqqında faydalı məlumatlar</p>

          {/* Search + categories */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Məqalə axtar..." value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#3A9B3A]/40" />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === c ? 'bg-[#3A9B3A] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#3A9B3A]/40'
                  }`}>{c}</button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse"><div className="h-52 bg-gray-200" /><div className="p-6"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2" /></div></div>)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium">Nəticə tapılmadı</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
