/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { websiteCreationGuide } from '../data/guideData';
import { X, BookOpen, Copy, Check, ExternalLink, Code2, Globe, Sparkles, Terminal } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  if (!isOpen) return null;

  const isBn = language === 'bn';

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                {isBn
                  ? "bdrakibuldm.netlify.app এর মতো ওয়েবসাইট তৈরির পূর্ণাঙ্গ গাইড"
                  : "How to Build & Host a Site Like bdrakibuldm.netlify.app"}
              </h2>
              <p className="text-xs text-slate-400">
                {isBn
                  ? "নেটলিফাই ফ্রি হোস্টিং, লিঙ্ক-ইন-বায়ো সেটআপ ও কোড স্ট্রাকচার টিউটোরিয়াল"
                  : "Complete step-by-step blueprint: Netlify free hosting, link-in-bio, and code"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Tabs & Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Quick Summary Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-950 border border-emerald-500/30 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
              <Globe className="h-4 w-4" />
              <span>{isBn ? "সহজ ভাষায় মূল প্রক্রিয়া:" : "Quick Summary in 30 Seconds:"}</span>
            </div>
            <p className="leading-relaxed">
              {isBn
                ? "এই ওয়েবসাইটটি মূলত একটি পোর্টফোলিও + লিঙ্ক-ইন-বায়ো ল্যান্ডিং পেজ। এটি তৈরি করা হয়েছে React + Vite ও Tailwind CSS দিয়ে। আপনি এটি তৈরি করার পর ফ্রিতে Netlify-তে হোস্ট করে আপনার পছন্দের সাবডোমেন (যেমন: yourname.netlify.app) দিয়ে ইনস্টাগ্রাম ও ফেসবুকে যুক্ত করতে পারেন।"
                : "This website is a hybrid portfolio and link-in-bio landing page built with React + Vite and Tailwind CSS. You can customize the profile details, build the code, and host it 100% free on Netlify with your custom subdomain (e.g. yourname.netlify.app)."}
            </p>
          </div>

          {/* Step Selector Horizontal Bar */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs">
            {websiteCreationGuide.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="font-mono text-[11px]">{step.number}.</span>
                  <span>{isBn ? step.badgeBn : step.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          {(() => {
            const step = websiteCreationGuide[activeStepIndex];
            return (
              <div className="space-y-5 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-emerald-400">
                    STEP {step.number} · {isBn ? step.badgeBn : step.badge}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {activeStepIndex + 1} of {websiteCreationGuide.length}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {isBn ? step.titleBn : step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {isBn ? step.summaryBn : step.summary}
                </p>

                {/* Detailed Steps list */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isBn ? "কাজের বিস্তারিত ধাপ:" : "Detailed Instructions:"}
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {(isBn ? step.detailsBn : step.details).map((det, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="h-5 w-5 rounded-full bg-slate-800 text-emerald-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Snippet if present */}
                {step.codeSnippet && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                      <span>{isBn ? "কোড বা কমান্ড" : "Code Snippet"}</span>
                      <button
                        onClick={() => handleCopy(step.codeSnippet!, activeStepIndex)}
                        className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                      >
                        {copiedIndex === activeStepIndex ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>{isBn ? "কপি হয়েছে!" : "Copied!"}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>{isBn ? "কপি করুন" : "Copy Code"}</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto font-mono text-emerald-300 text-[11px] leading-relaxed">
                      {step.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Pro Tip */}
                {step.tip && (
                  <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{isBn ? "প্রো টিপ: " : "Pro Tip: "}</span>
                      <span>{isBn ? step.tipBn : step.tip}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-800 flex items-center justify-between bg-slate-950/60">
          <button
            onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
            disabled={activeStepIndex === 0}
            className="px-3.5 py-2 text-xs font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isBn ? "পূর্ববর্তী ধাপ" : "Previous Step"}
          </button>

          <div className="flex items-center gap-2">
            {activeStepIndex < websiteCreationGuide.length - 1 ? (
              <button
                onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                className="px-4 py-2 text-xs font-bold rounded-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                {isBn ? "পরবর্তী ধাপ" : "Next Step"}
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold rounded-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                {isBn ? "বুঝতে পেরেছি, সাইট দেখা যাক" : "Got it, Explore Site"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
