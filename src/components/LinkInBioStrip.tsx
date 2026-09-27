/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProfileData, Language } from '../types';
import { MessageSquare, Calendar, TrendingUp, DollarSign, ExternalLink, X, Instagram, Linkedin, Facebook } from 'lucide-react';

interface LinkInBioStripProps {
  profile: ProfileData;
  language: Language;
  onDismiss: () => void;
  onSelectAction: (anchor: string) => void;
}

export const LinkInBioStrip: React.FC<LinkInBioStripProps> = ({
  profile,
  language,
  onDismiss,
  onSelectAction,
}) => {
  const isBn = language === 'bn';

  const handleWhatsApp = () => {
    const cleanPhone = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      isBn
        ? `হ্যালো ${profile.nameBn}, আমি আপনার বায়ো লিঙ্ক দেখে এসেছি। আমি আমার বিজনেসের ডিজিটাল মার্কেটিং নিয়ে আলোচনা করতে চাই।`
        : `Hi ${profile.name}, I visited your profile link. I would like to discuss digital marketing and ads for my business.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-b border-emerald-500/30 px-4 py-4 sm:py-5 shadow-2xl relative">
      <div className="max-w-3xl mx-auto">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-semibold tracking-wide text-emerald-400 uppercase">
              {isBn ? "ইনস্টাগ্রাম ও সোশ্যাল লিঙ্ক-ইন-বায়ো পোর্টাল" : "Social Link-in-Bio Quick Access"}
            </span>
          </div>
          <button
            onClick={onDismiss}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            title={isBn ? "ফুল সাইটে যান" : "Switch to Full Website"}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Profile Card Summary */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 text-center sm:text-left">
          <div className="relative">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-display font-extrabold text-2xl sm:text-3xl shadow-lg ring-4 ring-emerald-500/20">
              {profile.name.charAt(0)}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full text-[10px] font-bold ring-2 ring-slate-900" title="Verified Digital Marketer">
              ✓
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                {isBn ? profile.nameBn : profile.name}
              </h2>
              <span className="text-xs text-slate-400">@{profile.instagramHandle}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-0.5">
              {isBn ? profile.titleBn : profile.title}
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              {isBn ? profile.taglineBn : profile.tagline}
            </p>

            {/* Quick Proof metrics */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2.5 text-xs text-slate-300">
              <span className="font-semibold text-white">{profile.adSpendManaged}</span> {isBn ? "বাজেট পরিচালিত" : "Spend Managed"}
              <span>·</span>
              <span className="font-semibold text-emerald-400">{profile.averageRoas}</span> {isBn ? "গড় আরওএএস" : "Avg ROAS"}
              <span>·</span>
              <span>{isBn ? profile.locationBn : profile.location}</span>
            </div>
          </div>
        </div>

        {/* High-Converting Action Stack (Link-in-Bio Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {/* WhatsApp Direct Action - Top converting CTA */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-between p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all sm:col-span-2 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-slate-950/20 rounded-md">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-extrabold leading-tight">
                  {isBn ? "হোয়াটসঅ্যাপে সরাসরি মেসেজ দিন" : "Chat on WhatsApp (Instant Reply)"}
                </div>
                <div className="text-xs font-medium text-slate-900/80">
                  {isBn ? "ফ্রি কনসালটেশন ও ক্যাম্পেইন অডিট" : "Free 15-min discovery & instant response"}
                </div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Book Strategy Call */}
          <button
            onClick={() => onSelectAction('#booking')}
            className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 text-white rounded-lg border border-slate-700/80 hover:border-emerald-500/40 text-left transition-all"
          >
            <Calendar className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold">{isBn ? "শিডিউল বুকিং ফর্ম" : "Book Growth Strategy Call"}</div>
              <div className="text-[11px] text-slate-400">{isBn ? "পছন্দের তারিখ ও সময় নির্ধারণ করুন" : "Pick convenient date & time"}</div>
            </div>
          </button>

          {/* View Quantified Proof */}
          <button
            onClick={() => onSelectAction('#case-studies')}
            className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 text-white rounded-lg border border-slate-700/80 hover:border-emerald-500/40 text-left transition-all"
          >
            <TrendingUp className="h-5 w-5 text-teal-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold">{isBn ? "কেস স্টাডি ও বাস্তব ফলাফল" : "Verified Client Case Studies"}</div>
              <div className="text-[11px] text-slate-400">{isBn ? "৫.৪x আরওএএস ও ক্লায়েন্ট ফলাফল" : "5.4x ROAS & $114K+ case study"}</div>
            </div>
          </button>

          {/* ROI Calculator */}
          <button
            onClick={() => onSelectAction('#calculator')}
            className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 text-white rounded-lg border border-slate-700/80 hover:border-emerald-500/40 text-left transition-all"
          >
            <DollarSign className="h-5 w-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold">{isBn ? "বিজ্ঞাপনের আরওএএস ক্যালকুলেটর" : "Marketing Budget & ROI Tool"}</div>
              <div className="text-[11px] text-slate-400">{isBn ? "আপনার সম্ভাব্য মুনাফা হিসাব করুন" : "Calculate projected revenue"}</div>
            </div>
          </button>

          {/* Pricing Packages */}
          <button
            onClick={() => onSelectAction('#packages')}
            className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 text-white rounded-lg border border-slate-700/80 hover:border-emerald-500/40 text-left transition-all"
          >
            <span className="text-base shrink-0">💎</span>
            <div>
              <div className="text-xs font-semibold">{isBn ? "সেবা ও মাসিক প্যাকেজ রেট" : "Service Packages & Retainers"}</div>
              <div className="text-[11px] text-slate-400">{isBn ? "স্বচ্ছ মূল্য তালিকা ও সুবিধা সমূহ" : "Transparent transparent pricing"}</div>
            </div>
          </button>
        </div>

        {/* Social link pills */}
        <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-800 text-slate-400 text-xs">
          <a
            href={profile.instagramHandle ? `https://instagram.com/${profile.instagramHandle}` : profile.facebookUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>Instagram</span>
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profile.facebookUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Facebook className="h-3.5 w-3.5" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};
