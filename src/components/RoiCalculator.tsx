/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { DollarSign, Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  language: Language;
  onApplyPlan: (budget: string, roas: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  language,
  onApplyPlan,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [adSpend, setAdSpend] = useState<number>(1000); // in selected currency
  const [targetRoas, setTargetRoas] = useState<number>(4.5);
  const [aov, setAov] = useState<number>(45); // Average Order Value / Product price

  const isBn = language === 'bn';

  // Calculations
  const projectedRevenue = Math.round(adSpend * targetRoas);
  const estimatedOrders = Math.max(1, Math.round(projectedRevenue / (aov || 1)));
  const netAdProfit = projectedRevenue - adSpend;
  const costPerAcquisition = Math.round((adSpend / estimatedOrders) * 100) / 100;

  const currencySymbol = currency === 'USD' ? '$' : '৳';

  const handleCurrencySwitch = (curr: 'USD' | 'BDT') => {
    setCurrency(curr);
    if (curr === 'BDT') {
      setAdSpend(120000); // default in BDT
      setAov(2500);
    } else {
      setAdSpend(1000);
      setAov(45);
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2">
              {isBn ? "প্রফিট ও আরওএএস ক্যালকুলেটর" : "Interactive ROI Calculator"}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {isBn
                ? "বিজ্ঞাপনের বাজেট থেকে আপনার সম্ভাব্য লাভ ও রেভিনিউ হিসাব করুন"
                : "Simulate Your Growth: Projected Revenue & Net Campaign Profit"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {isBn
                ? "আপনার মাসিক বাজেট ও প্রত্যাশিত আরওএএস নির্ধারণ করে দেখুন কীভাবে পেইড ক্যাম্পেইন আপনার ব্যবসাকে লাভজনক করবে।"
                : "Move the sliders to project your monthly sales volume, ROAS, and net return on ad spend."}
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start">
            <button
              onClick={() => handleCurrencySwitch('USD')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                currency === 'USD' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => handleCurrencySwitch('BDT')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                currency === 'BDT' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              BDT (৳)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Input 1: Monthly Ad Spend */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isBn ? "মাসিক অ্যাড বাজেট (Monthly Ad Spend)" : "Monthly Ad Spend"}
                </label>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  {currencySymbol}{adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={currency === 'USD' ? 200 : 20000}
                max={currency === 'USD' ? 10000 : 1200000}
                step={currency === 'USD' ? 100 : 10000}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>{currencySymbol}{currency === 'USD' ? '200' : '20K'}</span>
                <span>{currencySymbol}{currency === 'USD' ? '5,000' : '600K'}</span>
                <span>{currencySymbol}{currency === 'USD' ? '10,000' : '1.2M'}</span>
              </div>
            </div>

            {/* Input 2: Target ROAS */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isBn ? "প্রত্যাশিত আরওএএস (Target ROAS)" : "Target Return On Ad Spend (ROAS)"}
                </label>
                <span className="font-mono text-base font-bold text-emerald-400 tabular-nums">
                  {targetRoas.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min={2.0}
                max={7.5}
                step={0.1}
                value={targetRoas}
                onChange={(e) => setTargetRoas(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>2.0x (Break-Even)</span>
                <span>4.5x (Target Healthy)</span>
                <span>7.5x (High Margin Scale)</span>
              </div>
            </div>

            {/* Input 3: Average Order Value */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isBn ? "গড় অর্ডার / সার্ভিস ভ্যালু (AOV)" : "Average Order Value / Ticket Size"}
                </label>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  {currencySymbol}{aov.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={currency === 'USD' ? 10 : 500}
                max={currency === 'USD' ? 300 : 25000}
                step={currency === 'USD' ? 5 : 250}
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>{currencySymbol}{currency === 'USD' ? '10' : '500'}</span>
                <span>{currencySymbol}{currency === 'USD' ? '150' : '12K'}</span>
                <span>{currencySymbol}{currency === 'USD' ? '300' : '25K'}</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {isBn ? "মাসিক প্রজেকশন ফলাফল" : "Monthly Growth Projections"}
              </div>

              {/* Big Revenue Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40">
                <div className="text-xs text-emerald-400 font-medium">
                  {isBn ? "সম্ভাব্য মোট বিক্রয় (Gross Revenue)" : "Projected Gross Revenue"}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums mt-1">
                  {currencySymbol}{projectedRevenue.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isBn ? "বিজ্ঞাপনের বাজেট থেকে উৎপাদিত রেভিনিউ" : "Generated directly from media spend"}
                </div>
              </div>

              {/* Net Profit & Orders stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">
                    {isBn ? "বিজ্ঞাপনের পর মোট লাভ" : "Net Ad Profit"}
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mt-0.5">
                    {currencySymbol}{netAdProfit.toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">
                    {isBn ? "মোট অর্ডার / কাস্টমার" : "Estimated Purchases"}
                  </div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    {estimatedOrders.toLocaleString()} {isBn ? "টি" : "orders"}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {isBn ? "প্রতি অর্ডারে সর্বোচ্চ বিজ্ঞাপন খরচ (CPA)" : "Est. Cost Per Acquisition (CPA)"}
                </span>
                <span className="font-mono font-bold text-slate-200">
                  {currencySymbol}{costPerAcquisition.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-6">
              <button
                onClick={() => {
                  onApplyPlan(`${currencySymbol}${adSpend.toLocaleString()}`, `${targetRoas.toFixed(1)}x`);
                  const bookingEl = document.getElementById('booking');
                  if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 p-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all"
              >
                <span>{isBn ? "এই বাজেট নিয়ে আলোচনা শুরু করুন" : "Apply This Budget to a Free Strategy Call"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
