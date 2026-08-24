import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer({ onOpenLeadModal, onOpenStrategyPage }) {
  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent("Hi Zapple Digital! I'd like to get in touch regarding your agency services.")}`;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-12 text-slate-300 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-slate-900 p-8 sm:p-12 rounded-3xl border border-red-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
              Ready to Accelerate Your <span className="text-red-200">Brand's Revenue?</span>
            </h3>
            <p className="text-slate-100 text-sm max-w-xl font-medium">
              Get a custom performance marketing roadmap tailored for your business. No fluff, just measurable ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenStrategyPage ? onOpenStrategyPage() : onOpenLeadModal()}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-red-700 font-extrabold text-xs px-6 py-4 rounded-xl shadow-lg whitespace-nowrap transition-colors"
            >
              Get Free Strategy & Audit Page
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-4 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center font-display font-extrabold text-white text-2xl shadow-lg shadow-red-600/30">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  Zapple Digital
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">
                  Digital Marketing Agency
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Zapple Digital is a premier growth and performance marketing agency. We combine creative storytelling, Meta/Google ad optimization, and technical web engineering to scale brands to 8-figure revenue.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/zapple_digital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Personal Branding</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Content Production</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Website & SEO</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Agency</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#portfolio" className="hover:text-red-400 transition-colors">Case Studies</a></li>
              <li><a href="#instagram" className="hover:text-red-400 transition-colors">Community</a></li>
              <li><a href="#blog" className="hover:text-red-400 transition-colors">Blog Insights</a></li>
              <li><button onClick={() => onOpenStrategyPage ? onOpenStrategyPage() : onOpenLeadModal()} className="hover:text-red-400 transition-colors text-left font-bold text-red-400">Free Strategy Page</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2.5 text-xs font-medium">
              <a href="tel:+919962632103" className="flex items-center gap-2 text-slate-200 hover:text-red-400 font-semibold">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>+91 99626 32103</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp</span>
              </a>
              <a href="mailto:info@zappledigital.com" className="flex items-center gap-2 text-slate-300 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>info@zappledigital.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>India • Global Remote Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Zapple Digital Marketing Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
