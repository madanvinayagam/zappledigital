import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function ArticlePage({ article, onBack, onOpenLeadModal }) {
  if (!article) return null;

  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent(`Hi Zapple Digital! I read your article "${article.title}" and want to discuss marketing solutions.`)}`;

  const coverImage = article.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc] text-slate-800 relative z-10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-red-600 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>

          <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest">
            {article.category}
          </span>
        </div>

        {/* Featured Cover Hero Banner (High-Res Stock Photo) */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
          <img 
            src={coverImage} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20 p-8 sm:p-12 text-white flex flex-col justify-between">
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                <span>{article.date}</span>
              </div>

              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                title="Share Article"
              >
                <Share2 className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="z-10 max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white bg-red-600/90 px-3 py-1 rounded-md backdrop-blur-sm">
                ZAPPLE EXCLUSIVE CASE STUDY
              </span>
              <h1 className="font-display font-black text-2xl sm:text-4xl text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-6 text-xs text-slate-500 font-semibold gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-800">
              <div className="w-7 h-7 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                Z
              </div>
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-red-600" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Consult Author on WhatsApp</span>
          </a>
        </div>

        {/* Lead Summary Subtitle */}
        <div className="bg-slate-100/80 p-6 rounded-2xl border-l-4 border-red-600 text-slate-700 text-base sm:text-lg italic font-medium leading-relaxed">
          "{article.subtitle}"
        </div>

        {/* Full Article Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6 font-medium">
          <p>
            At <strong>Zapple Digital Marketing Agency</strong>, our mission is to empower businesses and organizations with modern performance marketing, data analytics, and high-impact digital growth strategies.
          </p>

          <h2 className="font-display font-bold text-2xl text-slate-900 pt-4">
            Key Insights & Strategic Execution
          </h2>

          <div className="space-y-4">
            {[
              {
                heading: "Hyperlocal Geofenced Meta & Instagram Campaigns",
                text: "Targeting specific buyer radius ensures your ad spends deliver maximum conversions with zero wasted impressions."
              },
              {
                heading: "Generative AI Prompt Engineering Workflows",
                text: "Integrating AI scriptwriting and asset variation tools enables 10x content output without compromising quality."
              },
              {
                heading: "Instant WhatsApp Conversions & Lead Funnels",
                text: "Bypassing long friction web forms directly into pre-filled WhatsApp conversations boosts lead intake by over 300%."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{item.heading}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-slate-900 pt-6">
            Workshop & Campaign Moments (Gallery Highlights)
          </h2>

          {/* Workshop Stock Photo Gallery (Matching Ref Images 1, 2, 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: "GenAI Spark Keynote Presentation",
                location: "SASTRA University Campus",
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Live Student Prompting Session",
                location: "Interactive AI Lab",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Executive Q&A & Certificate Awards",
                location: "SASTRA Main Auditorium",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
              },
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={img.image} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded shadow">
                      GALLERY
                    </span>
                  </div>
                </div>
                <div className="p-3 text-[11px] font-bold text-slate-800 bg-white border-t border-slate-100 space-y-0.5">
                  <div>{img.title}</div>
                  <div className="text-[10px] text-slate-500 font-medium">📍 {img.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Conversion Bottom Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 sm:p-10 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO SCALE?</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
              Implement This Growth Strategy For Your Business
            </h3>
            <p className="text-red-100 text-xs sm:text-sm">
              Connect directly with Zapple Digital strategists on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-4 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenLeadModal(article.title)}
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs px-6 py-4 rounded-xl whitespace-nowrap shadow-md"
            >
              Request Free Consultation
            </button>
          </div>
        </div>

        {/* Back Button Footer */}
        <div className="pt-6 border-t border-slate-200 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-red-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Articles</span>
          </button>
        </div>

      </div>
    </div>
  );
}
