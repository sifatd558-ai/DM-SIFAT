/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ProfileData, PricingPackage, ServiceItem } from './types';
import { initialProfile } from './data/mockData';
import { Navbar } from './components/Navbar';
import { LinkInBioStrip } from './components/LinkInBioStrip';
import { Hero } from './components/Hero';
import { Workflow } from './components/Workflow';
import { ServicesGrid } from './components/ServicesGrid';
import { CaseStudies } from './components/CaseStudies';
import { RoiCalculator } from './components/RoiCalculator';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { MessageSquare, BookOpen, SlidersHorizontal } from 'lucide-react';

export default function App() {
  // Default to Bengali ('bn') because user asked in Bengali, with easy English toggle
  const [language, setLanguage] = useState<Language>('bn');
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('rakibul_growth_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback to initial
    }
    return initialProfile;
  });

  // Link in bio detection from URL query params (e.g. ?utm_source=ig&utm_content=link_in_bio)
  const [linkInBioActive, setLinkInBioActive] = useState<boolean>(true);
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [calculatorBudgetPrefill, setCalculatorBudgetPrefill] = useState<string>('');

  useEffect(() => {
    // Check URL parameters for UTM or link_in_bio
    const params = new URLSearchParams(window.location.search);
    if (params.get('utm_content') === 'link_in_bio' || params.get('utm_source') === 'ig') {
      setLinkInBioActive(true);
    }
  }, []);

  const handleUpdateProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('rakibul_growth_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const scrollToAnchor = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const cleanPhone = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      language === 'bn'
        ? `হ্যালো ${profile.nameBn}, আমি আপনার পোর্টফোলিও দেখে নক দিচ্ছি। আমার বিজনেসের পেইড অ্যাডস ও মার্কেটিং ক্যাম্পেইন নিয়ে ফ্রি কনসালটেশন করতে চাই।`
        : `Hello ${profile.name}, I found your digital marketing portfolio. I would like a free growth consultation for my business.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  const isBn = language === 'bn';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        language={language}
        onLanguageChange={setLanguage}
        onOpenGuide={() => setGuideOpen(true)}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        linkInBioActive={linkInBioActive}
        onToggleLinkInBio={() => setLinkInBioActive(!linkInBioActive)}
      />

      {/* High-Converting Social Link-in-Bio Quick Access Portal */}
      {linkInBioActive && (
        <LinkInBioStrip
          profile={profile}
          language={language}
          onDismiss={() => setLinkInBioActive(false)}
          onSelectAction={scrollToAnchor}
        />
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={profile}
          language={language}
          onOpenBooking={() => scrollToAnchor('#booking')}
          onOpenGuide={() => setGuideOpen(true)}
        />

        {/* 5-Stage Scientific Growth Framework (Research -> Diagnose -> Solve -> Build -> Scale) */}
        <Workflow language={language} />

        {/* Core Services Bento Grid */}
        <ServicesGrid
          language={language}
          onSelectService={(service: ServiceItem) => {
            scrollToAnchor('#booking');
          }}
        />

        {/* Real Quantified Client Case Studies */}
        <CaseStudies language={language} />

        {/* Interactive ROI & Budget Calculator */}
        <RoiCalculator
          language={language}
          onApplyPlan={(budget, roas) => {
            setCalculatorBudgetPrefill(`${budget} (Target ROAS: ${roas})`);
          }}
        />

        {/* Predictable Service Retainers & Pricing */}
        <Packages
          language={language}
          onSelectPackage={(pkg) => {
            setSelectedPackage(pkg);
          }}
        />

        {/* Client Testimonials */}
        <Testimonials language={language} />

        {/* Lead Capture Form & 1-Click WhatsApp Consultation */}
        <BookingSection
          profile={profile}
          language={language}
          selectedPackage={selectedPackage}
          budgetPrefill={calculatorBudgetPrefill}
        />

        {/* Client FAQ Section */}
        <FaqSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        language={language}
        onOpenGuide={() => setGuideOpen(true)}
      />

      {/* Floating Action Button for WhatsApp Consultation */}
      <button
        onClick={handleFloatingWhatsApp}
        className="fixed bottom-5 right-5 z-40 p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group ring-4 ring-emerald-500/20"
        title={isBn ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Chat on WhatsApp"}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline text-xs font-extrabold pr-1">
          {isBn ? "হোয়াটসঅ্যাপে চ্যাট" : "WhatsApp Chat"}
        </span>
      </button>

      {/* Floating Guide Kicker Button on Bottom Left */}
      <button
        onClick={() => setGuideOpen(true)}
        className="fixed bottom-5 left-5 z-40 px-3.5 py-2.5 bg-amber-950/90 hover:bg-amber-900 text-amber-300 text-xs font-bold rounded-full border border-amber-600/60 shadow-xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
      >
        <BookOpen className="h-4 w-4" />
        <span>{isBn ? "ওয়েবসাইট বানানোর গাইড" : "Site Blueprint Guide"}</span>
      </button>

      {/* Guide Modal */}
      <GuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
        language={language}
      />

      {/* Profile Live Customizer Drawer */}
      <CustomizeDrawer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        language={language}
      />
    </div>
  );
}
