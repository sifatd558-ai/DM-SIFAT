/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Testimonial, Language } from '../types';
import { testimonialsData } from '../data/mockData';
import { ShieldCheck, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const isBn = language === 'bn';

  return (
    <section className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
            {isBn ? "ক্লায়েন্টদের প্রতিক্রিয়া" : "Client Endorsements"}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isBn
              ? "সরাসরি যারা আমাদের সাথে কাজ করেছেন তাদের বাস্তব অভিজ্ঞতা"
              : "Direct Accounts from Founders & Growth Leaders We Partner With"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isBn
              ? "ই-কমার্স ফাউন্ডার ও বিজনেস লিডাররা কীভাবে তাদের ক্যাম্পেইন উন্নত করেছেন তার সত্য প্রতিক্রিয়া।"
              : "Verifiable partnerships documented through real campaign turnarounds."}
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between"
            >
              <div>
                {/* Verified platform badge */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-emerald-400 font-bold">{item.verifiedMetric}</span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    <span>{item.platform}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{isBn ? item.contentBn : item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60">
                <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-display font-bold text-xs text-emerald-400">
                  {item.avatarText}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {item.clientName}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.clientRole} · <span className="text-slate-300">{item.companyName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
