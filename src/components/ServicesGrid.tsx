/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/mockData';
import { ArrowRight, Check, X, Layers, Cpu, Compass } from 'lucide-react';

interface ServicesGridProps {
  language: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  language,
  onSelectService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const isBn = language === 'bn';

  return (
    <section id="services" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
              {isBn ? "কোর ডিজিটাল গ্রোথ ক্যাপাবিলিটি" : "Core Growth Capabilities"}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {isBn
                ? "বিজ্ঞাপনের খরচকে লাভজনক বিক্রিতে রূপান্তর করার সেবা"
                : "Engineered to Turn Media Spend into Compounding Revenue"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {isBn
                ? "সোশ্যাল মিডিয়া অ্যাডস থেকে শুরু করে সার্ভার-সাইড ট্র্যাকিং ও দ্রুতগতির সেলস ফানেল—সবকিছু এক ছাতার নিচে।"
                : "From Meta and Google paid acquisition to server-side event infrastructure and mobile conversion architecture."}
            </p>
          </div>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item, idx) => {
            const isMarquee = idx === 0 || idx === 2; // Meta Ads and Server-side Tracking get prominent design
            return (
              <div
                key={item.id}
                className={`group rounded-2xl border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900 hover:border-emerald-500/50 p-6 sm:p-7 transition-all flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-1 ring-1 ring-emerald-500/20' : ''
                }`}
              >
                <div>
                  {/* Top metadata strip */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-mono text-emerald-400 font-bold">{item.number}</span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {isBn ? item.titleBn : item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {isBn ? item.summaryBn : item.summary}
                  </p>

                  {/* Quantified Outcomes */}
                  <div className="space-y-2 mb-6">
                    {(isBn ? item.keyOutcomesBn : item.keyOutcomes).map((outcome, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Tools & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-slate-400">Stack: </span>
                    <span>{item.tools.slice(0, 2).join(' · ')}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(item);
                      onSelectService(item);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{isBn ? "বিস্তারিত" : "Details"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-7 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span>{selectedService.number}</span>
              <span>·</span>
              <span>{selectedService.highlight}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
              {isBn ? selectedService.titleBn : selectedService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {isBn ? selectedService.summaryBn : selectedService.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {isBn ? "মূল অর্জন ও ফলাফল (Outcomes)" : "Key Client Deliverables & Outcomes"}
              </h4>
              <div className="space-y-2.5">
                {(isBn ? selectedService.keyOutcomesBn : selectedService.keyOutcomes).map((outcome, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {isBn ? "ব্যবহৃত সফটওয়্যার ও টুলস" : "Tools & Platform Integration"}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {selectedService.tools.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#booking"
                onClick={() => setSelectedService(null)}
                className="w-full text-center px-4 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                {isBn ? "এই সেবা সম্পর্কে আলোচনা করুন" : "Discuss This Service for Your Brand"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
