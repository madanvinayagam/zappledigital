import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import InstagramMockup from './components/InstagramMockup.jsx';
import RadialServices from './components/RadialServices.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import BlogSection from './components/BlogSection.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import StrategyContactPage from './components/StrategyContactPage.jsx';
import LeadModal from './components/LeadModal.jsx';
import FloatingConversionWidget from './components/FloatingConversionWidget.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'article' | 'strategy'

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#contact' || hash === '#free-strategy' || hash === '#strategy') {
        setActiveView('strategy');
        setActiveArticle(null);
      } else if (hash === '' || hash === '#' || hash === '#services' || hash === '#portfolio' || hash === '#instagram' || hash === '#blog') {
        if (activeView === 'strategy') {
          setActiveView('home');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeView]);

  const handleOpenLeadModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setLeadModalOpen(true);
  };

  const handleOpenStrategyPage = (serviceName = '') => {
    setSelectedService(serviceName);
    setActiveView('strategy');
    setActiveArticle(null);
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article) => {
    setActiveArticle(article);
    setActiveView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveArticle(null);
    setActiveView('home');
    if (window.location.hash === '#contact' || window.location.hash === '#free-strategy' || window.location.hash === '#strategy') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 relative selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Animated Canvas */}
      <AnimatedBackground />

      {/* Header Bar */}
      <Header 
        onOpenLeadModal={handleOpenLeadModal} 
        onOpenStrategyPage={handleOpenStrategyPage}
        onBackToHome={handleBackToHome}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {activeView === 'strategy' ? (
          <StrategyContactPage
            onBackToHome={handleBackToHome}
            initialService={selectedService}
          />
        ) : activeArticle ? (
          <ArticlePage
            article={activeArticle}
            onBack={handleBackToHome}
            onOpenLeadModal={handleOpenLeadModal}
          />
        ) : (
          <div className="space-y-4">
            <Hero 
              onOpenLeadModal={handleOpenLeadModal} 
              onOpenStrategyPage={handleOpenStrategyPage}
            />
            <InstagramMockup />
            <RadialServices onOpenLeadModal={handleOpenStrategyPage} />
            <ProjectShowcase onOpenLeadModal={handleOpenStrategyPage} />
            <BlogSection onSelectArticle={handleSelectArticle} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenLeadModal={handleOpenLeadModal} 
        onOpenStrategyPage={handleOpenStrategyPage}
      />

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
