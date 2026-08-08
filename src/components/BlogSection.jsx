import React, { useState } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';

export default function BlogSection({ onSelectArticle }) {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: "Top Digital Marketing Strategies for Local Business Growth in 2026",
      subtitle: "How targeted Meta ads and Google Map Pack SEO can double your walk-ins and phone leads.",
      category: "MARKETING STRATEGY",
      date: "March 17, 2026",
      readTime: "5 min read",
      author: "Zapple Digital Team",
      badge: "TRENDING",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "GenAI Spark: AI & Prompt Engineering Workshop Conducted by Zapple Digital at SASTRA University",
      subtitle: "Leveraging generative AI to produce 10x viral content, scripts, and personalized ad copy.",
      category: "AI MARKETING",
      date: "March 13, 2026",
      readTime: "4 min read",
      author: "AI Growth Specialist",
      badge: "NEW AI",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Meta Ads vs Google PPC: Where Should You Spend Your First ₹50K Ad Budget?",
      subtitle: "A detailed breakdown of intent-based vs interest-based ad platforms.",
      category: "PERFORMANCE ADS",
      date: "February 19, 2026",
      readTime: "6 min read",
      author: "Head of Ads",
      badge: "GUIDE",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200 shadow-sm">
            LATEST INSIGHTS & STORIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Our <span className="text-gradient-brand">Blog & Knowledge Base</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Expert strategies, industry updates, and actionable marketing playbooks.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search blog articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm rounded-2xl pl-11 pr-4 py-3.5 border border-slate-200 shadow-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article 
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              {/* Cover Image Header */}
              <div className="h-52 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-red-600/90 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {article.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {article.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-red-600 font-bold group-hover:translate-x-1 transition-transform">
                    <span>Read Article Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
