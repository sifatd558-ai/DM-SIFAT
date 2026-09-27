/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProfileData, Language } from '../types';
import { Instagram, Linkedin, Facebook, MessageSquare, ArrowUp, BookOpen } from 'lucide-react';

interface FooterProps {
  profile: ProfileData;
  language: Language;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, language, onOpenGuide }) => {
  const isBn = language === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand Wordmark */}
          <div>
            <a
              href="/"
              className="font-display text-lg font-bold text-white hover:text-emerald-400 transition-colors"
            >
              {isBn ? profile.nameBn : profile.name}
            </a>
            <p className="mt-1 text-slate-500 max-w-sm">
              {isBn
                ? "ডাটা-ড্রিভেন পারফরম্যান্স মার্কেটিং ও গ্রোথ কনসালট্যান্সি।"
                : "Data-driven performance media buying and conversion optimization."}
            </p>
          </div>

          {/* Nav mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a href="#services" className="hover:text-emerald-400 transition-colors">
              {isBn ? "সেবা সমূহ" : "Services"}
            </a>
            <a href="#framework" className="hover:text-emerald-400 transition-colors">
              {isBn ? "ফ্রেমওয়ার্ক" : "Framework"}
            </a>
            <a href="#case-studies" className="hover:text-emerald-400 transition-colors">
              {isBn ? "কেস স্টাডি" : "Case Studies"}
            </a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">
              {isBn ? "ক্যালকুলেটর" : "Calculator"}
            </a>
            <a href="#packages" className="hover:text-emerald-400 transition-colors">
              {isBn ? "প্যাকেজ" : "Packages"}
            </a>
            <button
              onClick={onOpenGuide}
              className="text-amber-400 hover:text-amber-300 transition-colors font-semibold flex items-center gap-1"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>{isBn ? "ওয়েবসাইট বানানোর গাইড" : "Site Guide"}</span>
            </button>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.instagramHandle ? `https://instagram.com/${profile.instagramHandle}` : profile.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Legal notice and attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div>
            Inspired by Netlify Portfolio Architecture & Digital Growth Consultants in Dhaka.
          </div>
        </div>
      </div>
    </footer>
  );
};
