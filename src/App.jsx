import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import InstagramMockup from './components/InstagramMockup.jsx';
import RadialServices from './components/RadialServices.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import BlogSection from './components/BlogSection.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import LeadModal from './components/LeadModal.jsx';
import FloatingConversionWidget from './components/FloatingConversionWidget.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const handleOpenLeadModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setLeadModalOpen(true);
  };

  const handleSelectArticle = (article) => {
    setActiveArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 relative selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Animated Canvas */}
      <AnimatedBackground />

      {/* Header Bar */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Content */}
      <main className="relative z-10">
        {activeArticle ? (
          <ArticlePage
            article={activeArticle}
            onBack={handleBackToHome}
            onOpenLeadModal={handleOpenLeadModal}
          />
        ) : (
          <div className="space-y-4">
            <Hero onOpenLeadModal={handleOpenLeadModal} />
            <InstagramMockup />
            <RadialServices onOpenLeadModal={handleOpenLeadModal} />
            <ProjectShowcase onOpenLeadModal={handleOpenLeadModal} />
            <BlogSection onSelectArticle={handleSelectArticle} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenLeadModal={handleOpenLeadModal} />

      {/* Floating Conversion Badges (WhatsApp & Call) */}
      <FloatingConversionWidget />

      {/* Lead Generation Dialog */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
