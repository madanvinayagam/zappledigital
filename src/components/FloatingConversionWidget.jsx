import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingConversionWidget() {
  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent("Hi Zapple Digital! I'm reaching out from your website for a quick marketing consultation.")}`;

  return (
    <>
      {/* Floating Bottom-Right WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Tooltip badge */}
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 shadow-xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need leads? Chat live!</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-110 transition-transform group border-2 border-white"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Floating Bottom-Left Direct Dialer Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:+919962632103"
          aria-label="Call Zapple Digital"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-md hover:bg-red-600 text-slate-800 hover:text-white font-bold text-xs px-4 py-3 rounded-full border border-slate-200 hover:border-red-600 shadow-xl transition-all group"
        >
          <Phone className="w-4 h-4 text-red-600 group-hover:text-white" />
          <span className="hidden sm:inline">+91 99626 32103</span>
        </a>
      </div>
    </>
  );
}
