import React, { useState } from 'react';
import { Megaphone, Target, UserCheck, Video, Globe, Cpu, ArrowRight, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function RadialServices({ onOpenLeadModal }) {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      num: "01",
      title: "Digital Marketing",
      shortDesc: "End-to-end multi-channel strategy to boost brand authority.",
      fullDesc: "Comprehensive digital marketing campaigns designed to capture market share, grow brand awareness, and consistently bring high-intent leads to your business across Google, Meta, and LinkedIn.",
      icon: Megaphone,
      popular: false,
      features: ["Social Media Management", "Funnel Optimization", "Omnichannel Campaigns", "Brand Awareness Growth"],
    },
    {
      num: "02",
      title: "Performance Marketing",
      shortDesc: "High-ROI Meta & Google Ads designed for direct sales.",
      fullDesc: "Data-driven paid ads strategy targeting laser-focused buyer demographics. We optimize your ad budget for maximum ROAS (Return On Ad Spend) and scalable lead pipelines.",
      icon: Target,
      popular: true,
      features: ["Meta & Instagram Ads", "Google PPC & Search Ads", "Retargeting & Conversion Funnels", "Real-Time Performance Analytics"],
    },
    {
      num: "03",
      title: "Personal Branding",
      shortDesc: "Position founders & executives as industry authority figures.",
      fullDesc: "Craft an authentic, commanding online presence for founders, leaders, and creators to attract investor trust, high-value clients, and top talent.",
      icon: UserCheck,
      popular: false,
      features: ["LinkedIn & Twitter Thought Leadership", "Executive Content Writing", "Media & PR Strategy", "Personal Visual Identity"],
    },
    {
      num: "04",
      title: "Content Production",
      shortDesc: "Viral short-form reels, high-converting copy & video ads.",
      fullDesc: "High-impact video editing, reel creation, product photography, and persuasive copy designed to stop the scroll and turn viewers into loyal paying customers.",
      icon: Video,
      popular: false,
      features: ["Short-Form Reel Production", "Ad Creative Scripting & Editing", "Copywriting & Storytelling", "High-Resolution Asset Packs"],
    },
    {
      num: "05",
      title: "Website & SEO",
      shortDesc: "Ultra-fast high-converting web apps & Google #1 rankings.",
      fullDesc: "Custom web development optimized for lightning performance, seamless UX, mobile conversion, and top organic search engine rankings.",
      icon: Globe,
      popular: false,
      features: ["Custom React/Next.js Web Apps", "Technical & Local SEO", "Mobile Lead Conversion UX", "Speed & Core Web Vitals Optimization"],
    },
    {
      num: "06",
      title: "AI Solutions",
      shortDesc: "Custom AI chat assistants & lead automation workflows.",
      fullDesc: "Deploy cutting-edge AI chatbots, automated lead qualification systems, and workflow automations to respond to customer inquiries 24/7 without manual effort.",
      icon: Cpu,
      popular: false,
      features: ["Instant AI WhatsApp Chatbots", "Automated Lead Qualification", "Custom AI Prompt Workflows", "CRM & Webhook Integrations"],
    },
  ];

  const currentService = services[selectedServiceIndex];
  const IconComponent = currentService.icon;

  const serviceWhatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent(`Hi Zapple Digital! I want to inquire about your ${currentService.title} service.`)}`;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      
      {/* GPU-Accelerated 60fps Lightweight Orbit Animation */}
      <style>{`
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-container {
          animation: spinOrbit 38s linear infinite;
        }
        .orbit-counter-node {
          animation: counterSpin 38s linear infinite;
        }
        .orbit-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200 shadow-sm inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>COMPREHENSIVE EXPERTISE</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Our Core <span className="text-gradient-brand">Digital Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Tap or hover any service node to explore how we drive real growth for your business.
          </p>
        </div>

        {/* Layout: Interactive Orbit Hub + Service Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Circular Node Map */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-6">
            
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center cursor-pointer select-none"
            >
              
              {/* SVG Glowing Orbit Track */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420">
                <circle cx="210" cy="210" r="145" fill="none" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="210" cy="210" r="185" fill="none" stroke="rgba(220, 38, 38, 0.15)" strokeWidth="1" />
              </svg>

              {/* Central Glowing Zapple Emblem */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-red-600 via-red-600 to-red-500 flex flex-col items-center justify-center p-3 shadow-2xl shadow-red-600/35 z-20 border border-white hover:scale-105 transition-transform duration-300">
                <span className="font-display font-black text-white text-3xl leading-none">Z</span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/90 mt-1">ZAPPLE</span>
              </div>

              {/* GPU-Accelerated Rotating Orbit Wheel */}
              <div className={`absolute inset-0 orbit-container ${isPaused ? 'orbit-paused' : ''}`}>
                {services.map((svc, idx) => {
                  const angle = (idx * 60 - 90) * (Math.PI / 180);
                  const radius = 145; // distance from center
                  const x = 210 + Math.cos(angle) * radius - 40;
                  const y = 210 + Math.sin(angle) * radius - 40;

                  const isSelected = selectedServiceIndex === idx;

                  return (
                    <div
                      key={idx}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                      }}
                      className="absolute w-20 h-20"
                    >
                      {/* Counter-Spin Node to Keep Content Upright */}
                      <button
                        onClick={() => {
                          setSelectedServiceIndex(idx);
                          setIsPaused(true);
                        }}
                        className={`w-full h-full rounded-2xl flex flex-col items-center justify-center p-2 transition-all duration-300 orbit-counter-node ${isPaused ? 'orbit-paused' : ''} ${
                          isSelected
                            ? 'bg-red-600 text-white shadow-xl shadow-red-600/40 scale-110 border-2 border-white'
                            : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:border-red-400 shadow-md shadow-slate-200/60'
                        }`}
                      >
                        {svc.popular && (
                          <span className="absolute -top-2 text-[8px] font-black uppercase tracking-wider bg-emerald-500 text-white px-1.5 py-0.5 rounded-full shadow-sm">
                            POPULAR
                          </span>
                        )}
                        <svc.icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-white' : 'text-red-600'}`} />
                        <span className="text-[10px] font-bold text-center leading-tight line-clamp-2">
                          {svc.title}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Service Detail Panel */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-6 relative overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-bold shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                      SERVICE {currentService.num}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">
                      {currentService.title}
                    </h3>
                  </div>
                </div>
                {currentService.popular && (
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                    Most Requested
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {currentService.fullDesc}
              </p>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">What's Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={serviceWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {currentService.title} via WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenLeadModal(currentService.title)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-3.5 rounded-xl shadow-md shadow-red-600/20 transition-all"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
