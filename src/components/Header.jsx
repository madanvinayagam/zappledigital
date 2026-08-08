import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ onOpenLeadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent("Hi Zapple Digital! I'm interested in growing my business with your digital marketing services.")}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm shadow-slate-200/50' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center font-display font-extrabold text-white text-2xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                Zapple
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-red-600 mt-0.5">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-red-600 transition-colors">Projects</a>
            <a href="#instagram" className="hover:text-red-600 transition-colors">Community</a>
            <a href="#blog" className="hover:text-red-600 transition-colors">Insights</a>
          </nav>

          {/* Quick Contact & Lead Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+919962632103"
              className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all hover:border-red-400"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>+91 99626 32103</span>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => onOpenLeadModal()}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Free Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600">Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600">Projects</a>
            <a href="#instagram" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600">Community</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600">Insights</a>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a 
              href="tel:+919962632103"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call +91 99626 32103</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20"
            >
              Get Free Strategy Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
