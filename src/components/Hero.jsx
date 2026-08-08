import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

export default function Hero({ onOpenLeadModal }) {
  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent("Hi Zapple Digital! I saw your website and want to get a free strategy plan for my brand.")}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600 uppercase tracking-widest animate-float shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Top Performance Marketing & Growth Agency</span>
          </div>
        </div>

        {/* Hero Main Headline (Matches Image 1 Zapple Flyer Typography) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 uppercase leading-[0.95]">
            DIGITAL SOLUTIONS.<br />
            <span className="text-gradient-brand">REAL GROWTH.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Strategy. Creativity. Technology. All working together for your brand to dominate Meta Ads, Search Engine Rankings, and ROI-driven Customer Conversions.
          </p>

          {/* Call to Action Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenLeadModal()}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-1"
            >
              <span>Get Guaranteed Growth Plan</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-base px-7 py-4 rounded-2xl border border-emerald-300 transition-all shadow-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Instant WhatsApp Inquiry</span>
            </a>

            <a
              href="tel:+919962632103"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm px-5 py-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call +91 99626 32103</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Transparent ROI Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-red-600" />
              <span>Dedicated Performance Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-red-600" />
              <span>24/7 WhatsApp Response</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { metric: "500+", label: "Ad Campaigns Scaled", trend: "+340% Avg ROI" },
            { metric: "10M+", label: "Organic Impressions", trend: "Viral Reaches" },
            { metric: "98.4%", label: "Client Retention Rate", trend: "Long-term Growth" },
            { metric: "24/7", label: "Instant Lead Support", trend: "Direct WhatsApp" },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200 text-center relative overflow-hidden group bg-white"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {item.metric}
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">
                {item.label}
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-red-700 mt-2 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                <TrendingUp className="w-3 h-3 text-red-600" />
                <span>{item.trend}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
