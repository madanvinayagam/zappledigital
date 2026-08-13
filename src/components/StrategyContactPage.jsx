import React, { useState, useEffect } from 'react';
import { db, useFirebase, collection, addDoc, serverTimestamp } from '../firebase';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Globe, 
  User, 
  Calendar,
  Layers,
  Award,
  Star
} from 'lucide-react';

export default function StrategyContactPage({ onBackToHome, initialService = '' }) {
  // Step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    industry: 'E-commerce',
    services: initialService ? [initialService] : ['Performance Marketing'],
    adBudget: '₹50k - ₹2L / mo',
    primaryGoal: 'Scale Revenue & ROAS',
    timeline: 'Immediate (7 Days)',
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'WhatsApp',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappUrl = `https://wa.me/919962632103?text=${encodeURIComponent(
    `Hi Zapple Digital! I'm requesting a Free Strategy & Audit from your website.\n\n*Name*: ${formData.fullName || 'Client'}\n*Business*: ${formData.businessName || 'N/A'}\n*Phone*: ${formData.phone || 'N/A'}\n*Services Needed*: ${formData.services.join(', ')}\n*Ad Budget*: ${formData.adBudget}\n*Goal*: ${formData.primaryGoal}`
  )}`;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        if (prev.services.length === 1) return prev; // keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const leadDoc = {
      name: formData.fullName || 'Website Lead',
      email: formData.email || '',
      phone: formData.phone || '',
      company: formData.businessName || '',
      category: formData.services.join(', ') || 'Performance Marketing',
      budget: formData.adBudget || '',
      status: 'Pending Review',
      notes: `Goal: ${formData.primaryGoal}. Notes: ${formData.notes || 'None'}`,
      createdAt: new Date().toISOString()
    };

    // 1. Firebase Write
    if (useFirebase && db) {
      try {
        await addDoc(collection(db, 'enquiries'), {
          ...leadDoc,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        console.warn("Firestore lead write error:", err);
      }
    }

    // 2. LocalStorage Sync
    try {
      const stored = JSON.parse(localStorage.getItem('zapple_enquiries') || '[]');
      const newList = [{ id: 'web-' + Date.now(), ...leadDoc }, ...stored];
      localStorage.setItem('zapple_enquiries', JSON.stringify(newList));
    } catch (err) {
      console.warn("LocalStorage save error:", err);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const availableServices = [
    { id: 'Performance Marketing', label: 'Meta & Instagram Ads', desc: 'High ROAS Paid Campaigns' },
    { id: 'Google Ads & Search', label: 'Google Search & Shopping', desc: 'High-Intent Lead Gen' },
    { id: 'Content Production', label: 'Organic Viral Reels', desc: 'Video & Content Creation' },
    { id: 'Website & SEO', label: 'High-Converting Website/SEO', desc: 'Funnel Optimization' },
    { id: 'Personal Branding', label: 'Personal Branding', desc: 'Authority & Audience Growth' },
    { id: 'AI Solutions', label: 'AI Lead & WhatsApp Automation', desc: 'Instant Bot Conversions' },
  ];

  const faqs = [
    {
      q: 'Is this strategy consultation & audit really 100% free?',
      a: 'Yes, absolutely. Our initial growth audit and strategy roadmap session are 100% free with zero obligation. We analyze your brand, pinpoint conversion leaks, and present a actionable plan. If you like the plan, we can partner to execute it.'
    },
    {
      q: 'What happens after I submit this request?',
      a: 'Within 2 to 4 business hours, one of our senior growth strategists will review your business information, run an initial audit of your market, and reach out via WhatsApp or Phone to share your customized strategy deck.'
    },
    {
      q: 'Do I need to be actively running ad campaigns right now?',
      a: 'Not at all! Whether you are building from scratch or looking to scale an existing six/seven-figure ad spend, we tailor the strategy specifically to your stage of growth.'
    },
    {
      q: 'How fast can we launch campaigns if we decide to work together?',
      a: 'Once we align on your growth plan, our onboarding process takes 48 to 72 hours. Our team handles creative design, copy, pixel setup, and ad launching smoothly.'
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-300">
      
      {/* Navigation Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all group"
        >
          <ArrowLeft className="w-4 h-4 text-red-600 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919962632103"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>+91 99626 32103</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Quick Connect</span>
          </a>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span>100% Free Growth Strategy & Audit</span>
        </div>
        
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight uppercase">
          Claim Your Free <span className="text-gradient-brand">Digital Growth Strategy</span>
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
          No fluff. No high-pressure sales pitch. Get a 30-day performance marketing roadmap tailored specifically for your brand’s revenue targets.
        </p>

        {/* Quick Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>150+ Campaigns Audited</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-600" />
            <span>Average 4.2x ROAS</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>2 to 4 Hour Turnaround</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Value Stack Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form / Confirmation (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          
          {submitted ? (
            /* Success Confirmation Screen */
            <div className="py-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                  Strategy Request Submitted!
                </h3>
                <p className="text-sm text-slate-600 font-medium max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName || 'Valued Partner'}</span>. Our senior growth strategist is already preparing your audit.
                </p>
              </div>

              {/* Receipt / Details Box */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-3 text-xs text-slate-700">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Summary of Request</span>
                  <span className="text-red-600 font-bold uppercase">Priority SLA</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-slate-400">Business:</span> <span className="font-semibold text-slate-800">{formData.businessName || 'Direct Consultation'}</span></div>
                  <div><span className="text-slate-400">Budget:</span> <span className="font-semibold text-slate-800">{formData.adBudget}</span></div>
                  <div><span className="text-slate-400">Primary Focus:</span> <span className="font-semibold text-slate-800">{formData.services.join(', ')}</span></div>
                  <div><span className="text-slate-400">Contact via:</span> <span className="font-semibold text-slate-800">{formData.preferredContact}</span></div>
                </div>
              </div>

              {/* Immediate Next Actions */}
              <div className="pt-2 space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Want instant answers right now?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:from-emerald-500 hover:to-emerald-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send directly to WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200 transition-colors"
                  >
                    <span>Edit Info</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Multi-Step Strategy Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Header & Step Indicator */}
              <div className="space-y-4 border-b border-slate-100 pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                    Step {currentStep} of 3
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentStep === 1 && "Business Overview"}
                    {currentStep === 2 && "Growth Focus & Services"}
                    {currentStep === 3 && "Contact & Delivery"}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-red-500 h-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Business Profile */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-red-600" />
                    <span>Tell us about your brand</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Studio / Zapple Fashion"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website URL or Instagram Handle (Optional)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. www.yourbrand.com or @yourbrand"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Industry / Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                    >
                      <option value="E-commerce">E-commerce & D2C Brands</option>
                      <option value="Local Business & Clinics">Local Business / Clinic / Franchise</option>
                      <option value="Real Estate & Construction">Real Estate & Construction</option>
                      <option value="B2B & Professional Services">B2B & Corporate Services</option>
                      <option value="Education & Coaching">Education & Online Courses</option>
                      <option value="Hospitality & Restaurants">Hospitality & Food</option>
                      <option value="Personal Brand & Creator">Personal Brand / Creator</option>
                      <option value="Other">Other Category</option>
                    </select>
                  </div>

                  {/* Action Bar for Step 1 */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.businessName.trim()) {
                          alert('Please enter your business or brand name.');
                          return;
                        }
                        setCurrentStep(2);
                      }}
                      className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:from-red-500 hover:to-red-600 transition-all"
                    >
                      <span>Next: Select Growth Services</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Services & Budget */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    <span>Select core growth areas</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {availableServices.map((srv) => {
                        const isSelected = formData.services.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => handleServiceToggle(srv.id)}
                            className={`cursor-pointer p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                              isSelected
                                ? 'bg-red-50/80 border-red-500 text-slate-900 shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 border ${
                              isSelected ? 'bg-red-600 border-red-600 text-white' : 'border-slate-300 bg-white'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold">{srv.label}</div>
                              <div className="text-[11px] text-slate-500 font-medium">{srv.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Monthly Ad Budget Bracket
                      </label>
                      <select
                        value={formData.adBudget}
                        onChange={(e) => handleInputChange('adBudget', e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                      >
                        <option value="Starting / < ₹50,000">Starting (&lt; ₹50,000 / mo)</option>
                        <option value="₹50k - ₹2L / mo">₹50,000 - ₹2,00,000 / mo</option>
                        <option value="₹2L - ₹5L / mo">₹2,00,000 - ₹5,00,000 / mo</option>
                        <option value="₹5L+ / mo">₹5,00,000+ / mo (High Scale)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Target Goal
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                      >
                        <option value="Scale Revenue & ROAS">Scale Direct Revenue & ROAS</option>
                        <option value="High-Quality Lead Generation">Generate High-Quality Leads</option>
                        <option value="Build Brand Authority & Viral Reach">Build Brand & Viral Reach</option>
                        <option value="Lower Customer Acquisition Cost">Lower Customer Acquisition Cost</option>
                      </select>
                    </div>
                  </div>

                  {/* Navigation Buttons for Step 2 */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:from-red-500 hover:to-red-600 transition-all"
                    >
                      <span>Next: Contact Information</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Delivery */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-red-600" />
                    <span>Where should we send your strategy deck?</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dhinesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99626 32103"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. dhinesh@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Way to Receive Audit & Strategy
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => handleInputChange('preferredContact', method)}
                          className={`py-2.5 rounded-xl border text-xs font-bold transition-colors ${
                            formData.preferredContact === method
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Any Specific Challenge or Question? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need to improve Meta Ads ROAS from 1.8x to 4x..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:outline-none focus:border-red-500 transition-colors font-medium"
                    />
                  </div>

                  {/* Navigation Buttons for Step 3 */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all transform hover:-translate-y-0.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Claim Free Strategy Deck</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

        {/* Right Column: What You Get & Direct Reach Hub (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: What Included in Free Strategy */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-red-500" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-red-400">
                WHAT YOU GET IN YOUR AUDIT
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Your 360° Growth Deliverables
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100 text-sm">Ad Account & Funnel Audit</div>
                  <div className="text-slate-400 mt-0.5 font-medium">Pinpoint top 3 money leaks in your current Meta/Google ad spend or website flow.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100 text-sm">Competitor Intelligence</div>
                  <div className="text-slate-400 mt-0.5 font-medium">Analysis of high-performing creative hooks and offers from your top market rivals.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100 text-sm">Target ROAS & Revenue Forecast</div>
                  <div className="text-slate-400 mt-0.5 font-medium">Realistic projection of lead volume, CAC, and ROAS achievable in 30 to 90 days.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100 text-sm">1-on-1 Senior Call</div>
                  <div className="text-slate-400 mt-0.5 font-medium">30-minute interactive breakdown with Zapple Digital’s lead performance strategist.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>4.9/5 Rating from 150+ Clients</span>
            </div>
          </div>

          {/* Card 2: Direct Contact Channels */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4 shadow-sm">
            <h4 className="font-display font-bold text-base text-slate-900 uppercase tracking-wider">
              Prefer Direct Contact?
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              If you’d like to speak with us immediately without filling the form, feel free to call or WhatsApp us directly.
            </p>

            <div className="space-y-3 pt-1">
              <a
                href="tel:+919962632103"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-red-50/60 border border-slate-200 hover:border-red-200 transition-all text-slate-800 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Direct Phone Line</div>
                  <div className="text-xs text-slate-600 font-semibold">+91 99626 32103</div>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200 transition-all text-emerald-900 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-950">Instant WhatsApp Chat</div>
                  <div className="text-xs text-emerald-700 font-semibold">Available 24/7 • Fast SLA</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Official Email</div>
                  <div className="text-xs text-slate-600 font-medium">info@zappledigital.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Frequently Asked Questions Section */}
      <div className="pt-8 border-t border-slate-200/80 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Everything you need to know about our free growth audit and strategy process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-sm text-slate-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
