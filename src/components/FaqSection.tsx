/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { faqData } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isBn = language === 'bn';

  return (
    <section className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
            {isBn ? "সাধারণ প্রশ্নাবলী" : "Frequently Asked Questions"}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isBn
              ? "ডিজিটাল মার্কেটিং ও অ্যাড ক্যাম্পেইন নিয়ে আপনার প্রশ্নের উত্তর"
              : "Clear Answers to Common Growth & Paid Acquisition Questions"}
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors"
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-white">
                    {isBn ? item.questionBn : item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {isBn ? item.answerBn : item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
