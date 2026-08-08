import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Sparkles } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, initialService = '' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Performance Marketing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedText = `Hi Zapple Digital! I'm submitting a growth request from your website:\n\n*Name*: ${name || 'Valued Client'}\n*Phone*: ${phone || 'Not provided'}\n*Service Requested*: ${service}\n*Details*: ${message || 'Need guaranteed ROI strategy'}`;
    const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE CONSULTATION</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
            Get Your Business <span className="text-gradient-brand">Growth Strategy</span>
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Fill in your details below to directly connect with our senior strategist on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dhinesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 99626 32103"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Service Needed
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
            >
              <option value="Digital Marketing">01. Digital Marketing</option>
              <option value="Performance Marketing">02. Performance Marketing (Meta & Google Ads)</option>
              <option value="Personal Branding">03. Personal Branding</option>
              <option value="Content Production">04. Content Production & Reels</option>
              <option value="Website & SEO">05. Website & SEO Optimization</option>
              <option value="AI Solutions">06. AI Solutions & Lead Automation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Brief Business Goal (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your business goals or monthly target..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect Directly on WhatsApp</span>
          </button>
        </form>

        {/* Or Call Directly */}
        <div className="pt-2 text-center border-t border-slate-100">
          <p className="text-xs text-slate-500 mb-2 font-medium">Prefer calling directly?</p>
          <a
            href="tel:+919962632103"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +91 99626 32103</span>
          </a>
        </div>

      </div>
    </div>
  );
}
