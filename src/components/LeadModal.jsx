import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Sparkles, CheckCircle2, Send } from 'lucide-react';
import { db, rtdb, useFirebase, collection, addDoc, serverTimestamp, ref, push, set } from '../firebase';

export default function LeadModal({ isOpen, onClose, initialService = '' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Performance Marketing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const leadDoc = {
      name: name || 'Valued Client',
      email: email || '',
      phone: phone || '',
      company: 'Direct Consultation',
      category: service,
      budget: '₹50k - ₹2L / mo',
      status: 'Pending Review',
      notes: message || 'Need growth strategy consultation',
      createdAt: new Date().toISOString()
    };

    // 1. Firebase Realtime Database Write
    if (useFirebase && rtdb) {
      try {
        const newRef = push(ref(rtdb, 'enquiries'));
        await set(newRef, leadDoc);
      } catch (err) {
        console.warn("RTDB write warning:", err);
      }
    }

    // 2. Firebase Firestore Write (if active)
    if (useFirebase && db) {
      try {
        await addDoc(collection(db, 'enquiries'), {
          ...leadDoc,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        console.warn("Firestore write warning:", err);
      }
    }

    // 3. LocalStorage Backup Sync
    try {
      const stored = JSON.parse(localStorage.getItem('zapple_enquiries') || '[]');
      const newList = [{ id: 'lead-' + Date.now(), ...leadDoc }, ...stored];
      localStorage.setItem('zapple_enquiries', JSON.stringify(newList));
    } catch (err) {
      console.warn("LocalStorage save error:", err);
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 space-y-4 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-black text-2xl text-slate-900">
                Enquiry Sent to CRM Panel!
              </h3>
              <p className="text-xs text-slate-600 font-medium max-w-xs mx-auto">
                Thank you, <span className="font-bold text-slate-800">{name}</span>. Our growth team has received your enquiry in our Admin CRM and will reach out shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <>
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
                Submit your details directly to our Admin CRM Panel for a free audit.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dhinesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-2.5 border border-slate-200 focus:outline-none focus:border-red-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99626 32103"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-2.5 border border-slate-200 focus:outline-none focus:border-red-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="dhinesh@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-2.5 border border-slate-200 focus:outline-none focus:border-red-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-2.5 border border-slate-200 focus:outline-none focus:border-red-500 font-medium"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Business Goal
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your business goals or monthly target..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-2.5 border border-slate-200 focus:outline-none focus:border-red-500 font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Strategy Request to CRM</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
