import React, { useState } from 'react';
import { ExternalLink, TrendingUp, CheckCircle, X } from 'lucide-react';

export default function ProjectShowcase({ onOpenLeadModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = [
    {
      id: 'luxury-aura',
      category: 'ecommerce',
      title: 'The Luxury Aura',
      subtitle: 'Curated Everyday Jewellery & Nails',
      url: 'https://theluxuryaura.com',
      tag: 'E-COMMERCE & META ADS',
      metrics: '4.8x ROAS | ₹45L Revenue Scaled',
      desc: 'Executed end-to-end performance ads, high-converting product pages, and automated abandoned cart WhatsApp triggers for a luxury lifestyle brand.',
      highlights: ['Meta Ads Funnel Optimization', 'Ultra-Fast Mobile Storefront', 'Automated WhatsApp Retargeting'],
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      btnText: 'Visit Live Site ↗',
    },
    {
      id: 'apex-fitness',
      category: 'leadgen',
      title: 'Apex Fitness & Health',
      subtitle: 'Premium Gym & Fitness Chain',
      url: 'https://apexfitness.in',
      tag: 'LEAD GENERATION',
      metrics: '1,450+ Qualified Members Lead/Mo',
      desc: 'Created targeted hyperlocal Meta video ad campaigns and instant WhatsApp booking bots, driving 150% gym membership enrollments.',
      highlights: ['Hyperlocal Geofencing Ads', 'Instant WhatsApp Lead Qualification', 'High-Converting Landing Pages'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      btnText: 'View Case Study ↗',
    },
    {
      id: 'urban-nest',
      category: 'branding',
      title: 'Urban Nest Luxury Homes',
      subtitle: 'Premium Residential Real Estate',
      url: 'https://urbannest.co.in',
      tag: 'BRANDING & SEO',
      metrics: '₹3.2 Cr Booking Pipeline',
      desc: 'Positioned Urban Nest as the premier luxury real estate brand through cinematic reel campaigns, executive branding, and Google #1 local SEO ranking.',
      highlights: ['Cinematic Video Production', 'Founder Personal Branding', 'Google Maps Local Pack Ranking'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      btnText: 'View Showcase ↗',
    },
  ];

  const selectedProject = projects.find(p => p.id === activeCategory) || projects[0];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200 shadow-sm">
            PROVEN SUCCESS STORIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Our Featured <span className="text-gradient-brand">Projects & Case Studies</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Showcasing real revenue growth, high lead volumes, and modern brand design.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'leadgen', label: 'Lead Generation' },
              { id: 'branding', label: 'Branding & SEO' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mac OS Browser Window Mockup (Reference Image 3 Style in Light Mode) */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/60">
          
          {/* Mac OS Window Top Bar */}
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            {/* URL bar */}
            <div className="flex-1 max-w-md mx-4 bg-white border border-slate-200 rounded-lg px-3 py-1 flex items-center justify-center gap-2 text-xs text-slate-600 font-mono shadow-inner">
              <span className="text-red-600">🌐</span>
              <span className="truncate">https://projects.zappledigital.com/{selectedProject.id}</span>
            </div>

            <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              CASE STUDY
            </div>
          </div>

          {/* Browser Window Body */}
          <div className="p-6 sm:p-10 bg-slate-50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Stock Image Hero Mockup preview (Reference Image 3 Match) */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/10] rounded-2xl text-white relative overflow-hidden group shadow-lg border border-slate-300">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 p-6 flex flex-col justify-between">
                  
                  {/* Overlay Top Tag */}
                  <div className="flex justify-between items-center z-10">
                    <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {selectedProject.tag}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{selectedProject.metrics}</span>
                    </div>
                  </div>

                  {/* Center Content Mockup */}
                  <div className="space-y-2 py-2 z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-300 bg-red-950/80 px-2.5 py-0.5 rounded border border-red-500/30">
                      Delivered within 2–5 working days
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Bottom CTA Button mockup */}
                  <div className="z-10">
                    <button 
                      onClick={() => setActiveProjectModal(selectedProject)}
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg transition-transform group-hover:scale-105"
                    >
                      <span>{selectedProject.btnText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Project Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  Featured Client
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {selectedProject.desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Key Deliverables:</h4>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenLeadModal(selectedProject.title)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 px-4 rounded-xl text-center shadow-md shadow-red-600/20 transition-colors"
                >
                  Build Similar Project
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Project Detail Popup Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-md relative">
              <img src={activeProjectModal.image} alt={activeProjectModal.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                {activeProjectModal.tag}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-3xl text-slate-900">{activeProjectModal.title}</h3>
              <p className="text-slate-600 text-sm font-medium">{activeProjectModal.subtitle}</p>
            </div>

            <div className="bg-red-50 p-4 rounded-2xl border border-red-200 flex items-center justify-between">
              <span className="text-xs text-slate-700 font-semibold">Verified Performance Metric:</span>
              <span className="font-bold text-red-700 text-sm">{activeProjectModal.metrics}</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">{activeProjectModal.desc}</p>

            <div className="pt-4 flex justify-end gap-3">
              <a
                href={`https://wa.me/919962632103?text=${encodeURIComponent(`Hi Zapple Digital! I saw your ${activeProjectModal.title} case study and want a similar growth strategy.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shadow-md shadow-emerald-600/20"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
