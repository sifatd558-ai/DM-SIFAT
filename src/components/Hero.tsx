/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProfileData, Language } from '../types';
import { MessageSquare, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Activity, Zap } from 'lucide-react';

interface HeroProps {
  profile: ProfileData;
  language: Language;
  onOpenBooking: () => void;
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  language,
  onOpenBooking,
  onOpenGuide,
}) => {
  const isBn = language === 'bn';

  const handleWhatsApp = () => {
    const cleanPhone = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      isBn
        ? `হ্যালো ${profile.nameBn}, আমি আপনার পোর্টফোলিও দেখে নক দিচ্ছি। আমার বিজনেসের পেইড অ্যাডস ও মার্কেটিং ক্যাম্পেইন নিয়ে পরামর্শ করতে চাই।`
        : `Hello ${profile.name}, I reviewed your growth marketing portfolio and would like to consult on my business ad campaigns.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Kicker / Location marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-slate-800 text-xs text-slate-300 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="font-medium">{isBn ? profile.locationBn : profile.location}</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold">{profile.experienceYears}+ {isBn ? "বছরের অভিজ্ঞতা" : "Years Experience"}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              {isBn ? (
                <>
                  লাভজনক বিজনেস স্কেলিং ও <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                    পারফরম্যান্স মার্কেটিং
                  </span> কনসালটেন্ট
                </>
              ) : (
                <>
                  Performance Marketing & <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                    Data-Driven Growth
                  </span> Consultant
                </>
              )}
            </h1>

            {/* Subtitle / Concrete Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isBn ? profile.bioBn : profile.bio}
            </p>

            {/* Direct Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{isBn ? "হোয়াটসঅ্যাপে ফ্রি পরামর্শ নিন" : "Chat on WhatsApp (Instant)"}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all"
              >
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>{isBn ? "গ্রোথ মিটিং শিডিউল করুন" : "Schedule Discovery Call"}</span>
              </button>

              <button
                onClick={onOpenGuide}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-amber-300 bg-amber-950/30 hover:bg-amber-950/60 border border-amber-800/40 rounded-lg transition-colors"
                title={isBn ? "এই ওয়েবসাইট কীভাবে তৈরি করবেন তার গাইড" : "Step-by-step guide to build this website"}
              >
                <span>{isBn ? "💡 ওয়েবসাইট বানানোর গাইড" : "💡 How to Build This Site"}</span>
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>{isBn ? "সার্ভার-সাইড পিক্সেল সিঙ্ক" : "100% Server-Side Meta CAPI"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>{isBn ? "সাপ্তাহিক লাইভ পারফরম্যান্স রিপোর্ট" : "Weekly Live Reporting Dashboard"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>{isBn ? "জিরো ওয়াস্টেজ কিওয়ার্ড ফিল্টারিং" : "Negative Keyword Waste Filtration"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Performance Live Terminal Card (Vector/CSS Grounded) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    growth-hub.ad-manager
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                  <Activity className="h-3 w-3 animate-spin" />
                  <span>Meta CAPI 9.4/10</span>
                </div>
              </div>

              {/* Verified Ad Metrics Row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/90">
                  <div className="text-[11px] text-slate-400">
                    {isBn ? "মোট পরিচালিত অ্যাড বাজেট" : "Total Ad Spend Managed"}
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums mt-1">
                    {profile.adSpendManaged}
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <span>↑ 140+ campaigns</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/90">
                  <div className="text-[11px] text-slate-400">
                    {isBn ? "গড় ব্লেন্ডেড আরওএএস" : "Blended Average ROAS"}
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums mt-1">
                    {profile.averageRoas}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {isBn ? "ই-কমার্স ও বিটুবি ক্লায়েন্ট" : "E-com & B2B Portfolios"}
                  </div>
                </div>
              </div>

              {/* Live Campaign Pipeline Mockup */}
              <div className="space-y-2.5 mb-4">
                <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>{isBn ? "চলতি ক্যাম্পেইন পারফরম্যান্স" : "Live Campaign Stream"}</span>
                  <span className="text-[11px] font-mono text-emerald-400">Active</span>
                </div>

                {/* Campaign Item 1 */}
                <div className="p-2.5 bg-slate-950/50 rounded-lg border border-slate-800/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Advantage+ Catalog Scaling</div>
                    <div className="text-[11px] text-slate-400">Meta CBO · High Intent Audience</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-emerald-400">5.8x ROAS</div>
                    <div className="text-[10px] text-slate-400 font-mono">$4.12 CPA</div>
                  </div>
                </div>

                {/* Campaign Item 2 */}
                <div className="p-2.5 bg-slate-950/50 rounded-lg border border-slate-800/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Google High-Intent Search</div>
                    <div className="text-[11px] text-slate-400">Exact Match · Zero Junk Clicks</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-teal-300">4.2x ROAS</div>
                    <div className="text-[10px] text-slate-400 font-mono">88% Lead Quality</div>
                  </div>
                </div>

                {/* Campaign Item 3 */}
                <div className="p-2.5 bg-slate-950/50 rounded-lg border border-slate-800/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Direct Click-to-WhatsApp Funnel</div>
                    <div className="text-[11px] text-slate-400">Hyper-Local 7km Radius</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-amber-300">7.1x ROI</div>
                    <div className="text-[10px] text-slate-400 font-mono">1,280+ Chats</div>
                  </div>
                </div>
              </div>

              {/* Attribution Status Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>{isBn ? "ভেরিফায়েড ক্লায়েন্ট ফলাফল" : "Verified Client Attribution"}</span>
                </div>
                <a
                  href="#case-studies"
                  className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-medium"
                >
                  <span>{isBn ? "প্রমাণ দেখুন" : "View Proof"}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
