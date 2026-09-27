/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PricingPackage, Language } from '../types';
import { packagesData } from '../data/mockData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PackagesProps {
  language: Language;
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const Packages: React.FC<PackagesProps> = ({
  language,
  onSelectPackage,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const isBn = language === 'bn';

  return (
    <section id="packages" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
              {isBn ? "স্বচ্ছ মূল্য ও প্যাকেজ" : "Predictable Retainers"}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {isBn
                ? "কোনো গোপন খরচ নেই: আপনার ব্যবসায়িক লক্ষ্য অনুযায়ী প্যাকেজ"
                : "Transparent Growth Retainers Built for Maximum Return on Capital"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {isBn
                ? "আপনি নতুন পিক্সেল অডিট করাতে চান কিংবা দীর্ঘমেয়াদী স্কেলিং করতে চান—প্রতিটি স্তরেই রয়েছে স্বচ্ছ কাজের বিবরণ।"
                : "Whether you need a complete tracking audit sprint or ongoing omnichannel media scaling, pick the tier that matches your horizon."}
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                currency === 'USD' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('BDT')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                currency === 'BDT' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              BDT (৳)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const isPopular = pkg.isPopular;
            const price = currency === 'USD' ? `$${pkg.priceUsd}` : `৳${pkg.priceBdt.toLocaleString()}`;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border flex flex-col justify-between transition-all p-6 sm:p-8 relative ${
                  isPopular
                    ? 'bg-slate-900/90 border-emerald-500 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                    : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-slate-950 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow">
                    {isBn ? "সবচেয়ে জনপ্রিয় চয়েস" : "Most Popular Choice"}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    {isBn ? pkg.billingPeriodBn : pkg.billingPeriod}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {isBn ? pkg.nameBn : pkg.name}
                  </h3>

                  <p className="text-xs text-slate-300 min-h-[36px] mb-6">
                    {isBn ? pkg.idealForBn : pkg.idealFor}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
                      {price}
                    </span>
                    <span className="text-xs text-slate-400">
                      / {isBn ? pkg.billingPeriodBn : pkg.billingPeriod}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {isBn ? "প্যাকেজে অন্তর্ভুক্ত:" : "What's Included:"}
                    </div>
                    {(isBn ? pkg.featuresBn : pkg.features).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => {
                      onSelectPackage(pkg);
                      const bookingEl = document.getElementById('booking');
                      if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{isBn ? "এই প্যাকেজটি বেছে নিন" : "Select This Retainer"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
