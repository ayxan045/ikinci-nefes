import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { getBlogPosts } from '../api';
import type { BlogPost } from '../types';

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
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#3A9B3A] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
        <a href={`/bloq/${post.slug}`} className="flex items-center gap-1.5 text-[#3A9B3A] text-sm font-semibold mt-1 group-hover:gap-2.5 transition-all">
          Məqaləni oxu <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default function Blog() {
  const { data: posts, loading } = useApi(getBlogPosts);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!posts) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-b]').forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
              el.style.opacity = '1'; el.style.transform = 'translateY(0)';
            }, i * 90);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [posts]);

  return (
    <section id="blog" ref={ref} className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Bloq və Məqalələr</h2>
            <p className="text-gray-500 mt-2 text-sm">Psixoloji sağlamlıq haqqında faydalı məlumatlar</p>
          </div>
          <a href="/bloq" className="text-[#3A9B3A] text-sm font-semibold hover:underline whitespace-nowrap">Hamısına bax →</a>
        </div>
        {loading ? (
          <div className="grid sm:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse"><div className="h-52 bg-gray-200" /><div className="p-6"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2" /></div></div>)}
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-5">
            {(posts ?? []).slice(0, 3).map((post) => (
              <div key={post.id} data-b style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
