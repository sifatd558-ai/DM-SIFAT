/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ProfileData } from '../types';
import { BookOpen, SlidersHorizontal, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  profile: ProfileData;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenGuide: () => void;
  onOpenCustomizer: () => void;
  linkInBioActive: boolean;
  onToggleLinkInBio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  language,
  onLanguageChange,
  onOpenGuide,
  onOpenCustomizer,
  linkInBioActive,
  onToggleLinkInBio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBn = language === 'bn';

  const navLinks = [
    { href: "#services", label: isBn ? "সেবা সমূহ" : "Services" },
    { href: "#framework", label: isBn ? "কাজের পদ্ধতি" : "Framework" },
    { href: "#case-studies", label: isBn ? "কেস স্টাডি" : "Case Studies" },
    { href: "#calculator", label: isBn ? "আরওএএস ক্যালকুলেটর" : "ROI Calculator" },
    { href: "#packages", label: isBn ? "প্যাকেজ ও রেট" : "Packages" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Text Element Wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-white hover:text-emerald-400 transition-colors"
          >
            {isBn ? profile.nameBn : profile.name}
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {isBn ? "নতুন ক্লায়েন্ট ওপেন" : "Available for Growth"}
          </span>
        </div>

        {/* Zone 2: 4-6 Clean Text Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language toggle, Guide modal, Customizer & Contact CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Link in bio toggle */}
          <button
            onClick={onToggleLinkInBio}
            title={isBn ? "লিঙ্ক-ইন-বায়ো প্রিভিউ চালু/বন্ধ" : "Toggle Link-in-Bio Mode"}
            className={`hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded border transition-colors whitespace-nowrap ${
              linkInBioActive
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                : 'text-slate-400 border-slate-800 hover:text-white hover:bg-slate-900'
            }`}
          >
            📱 {isBn ? "বায়ো মোড" : "Bio Mode"}
          </button>

          {/* How to build this website button (Prominent guide trigger) */}
          <button
            onClick={onOpenGuide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-950/50 hover:bg-amber-900/50 border border-amber-700/60 rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {isBn ? "এই সাইট তৈরির গাইড" : "How to Build This"}
            </span>
            <span className="sm:hidden">{isBn ? "গাইড" : "Guide"}</span>
          </button>

          {/* Live Profile Customizer */}
          <button
            onClick={onOpenCustomizer}
            title={isBn ? "নিজের তথ্য দিয়ে কাস্টমাইজ করুন" : "Customize profile details"}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-md transition-colors flex items-center gap-1"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{isBn ? "কাস্টমাইজ" : "Edit Details"}</span>
          </button>

          {/* Language Toggle */}
          <div className="flex items-center border border-slate-800 bg-slate-900 rounded-md p-0.5 text-xs">
            <button
              onClick={() => onLanguageChange('bn')}
              className={`px-2 py-1 rounded transition-colors font-medium ${
                language === 'bn'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors font-medium ${
                language === 'en'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary CTA */}
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>{isBn ? "কথা বলুন" : "Book Call"}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-slate-900 rounded hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onToggleLinkInBio();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-slate-300 hover:text-emerald-400 flex items-center gap-1.5"
            >
              📱 {isBn ? "লিঙ্ক-ইন-বায়ো ভিউ" : "Toggle Link-in-Bio View"}
            </button>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded"
            >
              {isBn ? "ফ্রি পরামর্শ নিন" : "Free Consultation"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
