/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { workflowSteps } from '../data/mockData';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface WorkflowProps {
  language: Language;
}

export const Workflow: React.FC<WorkflowProps> = ({ language }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isBn = language === 'bn';

  return (
    <section id="framework" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
            {isBn ? "কাজের বৈজ্ঞানিক পদ্ধতি" : "Scientific Growth Framework"}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isBn
              ? "রিসার্চ থেকে স্কেলিং: আমাদের ৫-ধাপের ফলাফলমুখী ফ্রেমওয়ার্ক"
              : "From Research to Scale: Our 5-Stage Scientific Growth Framework"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isBn
              ? "কোনো অন্ধ অনুমান নয়; প্রতিটা ডলার বাজেট খরচের পেছনে থাকে গভীর ডাটা অ্যানালাইসিস এবং প্রমাণিত ক্রিয়েটিভ কৌশল।"
              : "No guesswork or blind boosting. Every dollar of ad spend is backed by attribution tracking and audience diagnostics."}
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {step.step}
                  </span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {isBn ? step.phaseBn : step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        {(() => {
          const current = workflowSteps[activeStepIndex];
          return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-950/60 border border-emerald-800/50 rounded text-xs font-semibold text-emerald-300">
                    <span>Stage {current.step}</span>
                    <span>·</span>
                    <span>{isBn ? current.phaseBn : current.phase}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {isBn ? current.titleBn : current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {isBn ? current.descriptionBn : current.description}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
                      <div className="text-slate-400 font-medium mb-1">
                        {isBn ? "মূল ফলাফল (Deliverable)" : "Core Deliverable"}
                      </div>
                      <div className="font-semibold text-white">
                        {activeStepIndex === 0 && (isBn ? "কম্পিটিটর অ্যাড স্পাই রিপোর্ট ও SWOT" : "Competitor Creative Spy Report")}
                        {activeStepIndex === 1 && (isBn ? "পিক্সেল ও ফানেল ড্রপ-অফ ডায়াগনস্টিক" : "Full Pixel & Funnel Audit Report")}
                        {activeStepIndex === 2 && (isBn ? "ক্যাম্পেইন বাজেট ও ক্রিয়েটিভ হুক রোডম্যাপ" : "Creative Angles & Budget Blueprint")}
                        {activeStepIndex === 3 && (isBn ? "সার্ভার মেটা সিএপিআই ও লাইভ অ্যাডস লঞ্চ" : "GTM Server CAPI & Live Launch")}
                        {activeStepIndex === 4 && (isBn ? "সাপ্তাহিক ২০% বাজেট স্কেল ও নতুন অডিয়েন্স" : "20% Horizontal Budget Scale")}
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
                      <div className="text-slate-400 font-medium mb-1">
                        {isBn ? "সময়কাল (Timeline)" : "Typical Timeframe"}
                      </div>
                      <div className="font-semibold text-emerald-400 font-mono">
                        {activeStepIndex === 0 && "Days 1–3"}
                        {activeStepIndex === 1 && "Days 4–6"}
                        {activeStepIndex === 2 && "Days 7–9"}
                        {activeStepIndex === 3 && "Days 10–14"}
                        {activeStepIndex === 4 && "Ongoing Optimization"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Visual Representation */}
                <div className="lg:col-span-5">
                  <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-3 font-mono text-xs">
                    <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
                      <span>PROCESS_INSPECTOR</span>
                      <span className="text-emerald-400 font-bold">READY</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{isBn ? "ডেটা অডিট ও হিস্টোরিক্যাল কনভার্সন যাচাই" : "Historical conversion & pixel verification"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{isBn ? "উচ্চ কনভার্সন হুক টেস্টিং (ভিডিও ও স্ট্যাটিক)" : "Split-testing angle hooks & UGC creatives"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{isBn ? "সাপ্তাহিক বিড অ্যাডজাস্টমেন্ট ও আরওএএস নজরদারি" : "Weekly bid balancing & ROAS threshold lock"}</span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">{isBn ? "পরবর্তী ধাপ দেখতে ক্লিক করুন:" : "Browse next stage:"}</span>
                      <button
                        onClick={() => setActiveStepIndex((activeStepIndex + 1) % workflowSteps.length)}
                        className="text-emerald-400 hover:text-emerald-300 font-sans font-semibold inline-flex items-center gap-1"
                      >
                        <span>{isBn ? "পরবর্তী ধাপ" : "Next Stage"}</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
