/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CaseStudy, Language } from '../types';
import { caseStudiesData } from '../data/mockData';
import { TrendingUp, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface CaseStudiesProps {
  language: Language;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ language }) => {
  const [activeTabId, setActiveTabId] = useState<string>(caseStudiesData[0].id);
  const isBn = language === 'bn';

  const currentStudy = caseStudiesData.find(c => c.id === activeTabId) || caseStudiesData[0];

  return (
    <section id="case-studies" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
            {isBn ? "প্রমাণ ও বাস্তব ফলাফল" : "Documented Case Studies"}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isBn
              ? "বাস্তব ফলাফল: আমাদের ক্লায়েন্টদের সেলস ও আরওএএস গ্রোথ"
              : "Verifiable Returns: Measurable Impact Across Real Client Campaigns"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isBn
              ? "কোনো মনগড়া স্ক্রিনশট নয়; প্রতিটি কেস স্টাডিতে রয়েছে নির্দিষ্ট সময়ের ফ্রেম, চ্যালেঞ্জ এবং বাস্তব ফলাফল।"
              : "Attributable client performance data with concrete before/change/outcome documentation."}
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800/80 mb-8 max-w-2xl">
          {caseStudiesData.map((study) => {
            const isActive = study.id === activeTabId;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTabId(study.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {isBn ? study.clientNicheBn : study.clientNiche}
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Clean Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-medium text-emerald-400">
                  {isBn ? currentStudy.clientNicheBn : currentStudy.clientNiche}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentStudy.clientLocation}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-300">{currentStudy.timeframe}</span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {isBn ? currentStudy.headlineBn : currentStudy.headline}
              </h3>

              {/* The Challenge & The Strategy */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1.5">
                    {isBn ? "চ্যালেঞ্জ (The Challenge)" : "The Challenge"}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isBn ? currentStudy.challengeBn : currentStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                    {isBn ? "আমাদের স্ট্র্যাটেজি (The Strategy)" : "The Strategy"}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isBn ? currentStudy.strategyBn : currentStudy.strategy}
                  </p>
                </div>
              </div>

              {/* Execution Steps */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {isBn ? "বাস্তবায়নের প্রধান ধাপসমূহ" : "Core Execution Milestones"}
                </div>
                <div className="space-y-2">
                  {(isBn ? currentStudy.executionStepsBn : currentStudy.executionSteps).map((step, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Board Column */}
            <div className="lg:col-span-5 space-y-4">
              {/* Primary Star Metric Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/40 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {isBn ? currentStudy.primaryMetricLabelBn : currentStudy.primaryMetricLabel}
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white tabular-nums my-2 flex items-baseline gap-2">
                  <span>{currentStudy.primaryMetric}</span>
                  <span className="text-xs font-sans font-medium text-emerald-400">
                    {isBn ? "ভেরিফায়েড রেজাল্ট" : "Verified Return"}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {isBn
                    ? "ক্যাম্পেইন শুরু করার পর থেকে টানা ৯০ দিনের সামগ্রিক গড় ফলাফল।"
                    : "Blended attribution recorded over active campaign execution window."}
                </p>
              </div>

              {/* Secondary Supporting Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentStudy.secondaryMetrics.map((sec, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">
                      {isBn ? sec.labelBn : sec.label}
                    </div>
                    <div className="text-lg font-bold font-mono text-white tabular-nums mt-1">
                      {sec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance Curve Vector Illustration */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                  <span>ROAS_TRAJECTORY</span>
                  <span className="text-emerald-400 font-mono font-bold">Scaling Curve</span>
                </div>

                <div className="h-24 w-full flex items-end gap-1.5 pt-3">
                  {[28, 36, 42, 55, 62, 70, 78, 86, 92, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-t transition-all ${
                          i >= 7 ? 'bg-emerald-400' : 'bg-slate-700'
                        }`}
                      />
                      <span className="text-[9px] text-slate-400 font-mono">W{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA link to replicate results */}
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                <span>{isBn ? "আমার বিজনেসে এই কৌশল প্রয়োগ করুন" : "Apply This Framework to Your Business"}</span>
                <ArrowUpRight className="h-4 w-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
