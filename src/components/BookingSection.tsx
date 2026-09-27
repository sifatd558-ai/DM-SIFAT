/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProfileData, Language, PricingPackage } from '../types';
import { MessageSquare, Calendar, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface BookingSectionProps {
  profile: ProfileData;
  language: Language;
  selectedPackage: PricingPackage | null;
  budgetPrefill?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  profile,
  language,
  selectedPackage,
  budgetPrefill,
}) => {
  const isBn = language === 'bn';

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [adBudget, setAdBudget] = useState(budgetPrefill || '$1,000 - $3,000/mo');
  const [selectedService, setSelectedService] = useState('Meta Ads + CAPI');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (budgetPrefill) {
      setAdBudget(budgetPrefill);
    }
  }, [budgetPrefill]);

  useEffect(() => {
    if (selectedPackage) {
      setSelectedService(isBn ? selectedPackage.nameBn : selectedPackage.name);
    }
  }, [selectedPackage, isBn]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const cleanPhone = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const messageLines = [
      isBn ? `*নতুন ক্লায়েন্ট অনুসন্ধান - ডিজিটাল মার্কেটিং*` : `*New Client Inquiry - Growth Marketing*`,
      `• Name: ${fullName || 'Client'}`,
      `• Brand: ${businessName || 'Business'}`,
      `• Website/Page: ${websiteUrl || 'Not provided'}`,
      `• Service: ${selectedService}`,
      `• Monthly Ad Budget: ${adBudget}`,
      `• Phone/WA: ${phone || 'Not provided'}`,
      notes ? `• Notes: ${notes}` : ''
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageLines)}`, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              {isBn ? "সরাসরি যোগাযোগ ও পরামর্শ" : "Direct Discovery Consultation"}
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {isBn
                ? "চলুন আলোচনা করি কীভাবে আপনার ক্যাম্পেইনের লাভজনক বৃদ্ধি ঘটানো যায়"
                : "Schedule Your 15-Minute Zero-Fluff Growth Discovery Call"}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isBn
                ? "আমাদের ফ্রি অডিট কলে আমরা আপনার বর্তমান অ্যাড অ্যাকাউন্ট, পিক্সেল ট্র্যাকিং এবং সম্ভাব্য ফানেল বাধাগুলো নিখুঁতভাবে পর্যালোচনা করব।"
                : "In our discovery call, we audit your historical ROAS, inspect conversion leaks, and deliver a concrete blueprint for your business."}
            </p>

            {/* Direct 1-tap WhatsApp highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Clock className="h-4 w-4" />
                <span>{isBn ? "তাৎক্ষণিক প্রতিক্রিয়া (গড় সময় < ১৫ মিনিট)" : "Fastest Channel (Average reply < 15 min)"}</span>
              </div>
              <p className="text-xs text-slate-300">
                {isBn
                  ? "দ্রুততম উত্তরের জন্য সরাসরি হোয়াটসঅ্যাপে মেসেজ পাঠান। আমরা সরাসরি কথা বলে বিস্তারিত আলোচনা করতে পারি।"
                  : "Prefer instant messaging? Connect directly on WhatsApp with pre-filled details."}
              </p>
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 p-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{isBn ? "হোয়াটসঅ্যাপে চ্যাট ওপেন করুন" : "Open Direct WhatsApp Chat"}</span>
              </button>
            </div>

            {/* Direct Contact Details */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">WhatsApp / Direct:</span>
                <span className="font-mono font-semibold text-white">{profile.whatsappNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="font-mono text-white">{profile.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{isBn ? profile.locationBn : profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {isBn ? "আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!" : "Inquiry Received Successfully!"}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    {isBn
                      ? `ধন্যবাদ ${fullName}! আমি খুব শীঘ্রই আপনার দেওয়া নম্বরে (${phone}) অথবা হোয়াটসঅ্যাপে যোগাযোগ করব।`
                      : `Thank you ${fullName}! We will review your details and reach out within 4 business hours.`}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{isBn ? "হোয়াটসঅ্যাপেও মেসেজ পাঠান" : "Forward Instantly to WhatsApp"}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      {isBn ? "আরেকটি ফর্ম সাবমিট করুন" : "Submit Another Inquiry"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 pb-2 border-b border-slate-800">
                    {isBn ? "ফ্রি ক্যাম্পেইন অডিট ও কনসালটেশন ফর্ম" : "Free Growth Consultation Request"}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "আপনার পুরো নাম *" : "Your Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isBn ? "যেমন: তানভীর হাসান" : "e.g. Tanvir Hasan"}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "ব্যবসা / ব্র্যান্ডের নাম *" : "Business / Brand Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder={isBn ? "যেমন: ঢাকা ট্রেন্ডস" : "e.g. Dhaka Trends"}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "হোয়াটসঅ্যাপ / ফোন নম্বর *" : "WhatsApp / Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+880 1..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "ওয়েবসাইট বা ফেসবুক পেজ লিংক" : "Website or Facebook Page Link"}
                      </label>
                      <input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "আগ্রহী সেবা / প্যাকেজ" : "Target Service / Package"}
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option value="Meta Ads + CAPI">Meta Ads (Facebook & IG) + CAPI</option>
                        <option value="Google Ads & Search">Google Ads (Search & P-Max)</option>
                        <option value="High-Converting Funnels">Landing Page & CRO Funnel</option>
                        <option value="Server-Side GTM Tracking">Server-Side Tracking Audit</option>
                        <option value="Monthly Growth Retainer">Full Monthly Growth Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? "মাসিক আনুমানিক অ্যাড বাজেট" : "Monthly Ad Spend Budget"}
                      </label>
                      <select
                        value={adBudget}
                        onChange={(e) => setAdBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option value="Under $500 / ৳50K">Under $500 / ৳50,000</option>
                        <option value="$500 - $1,500 / ৳150K">$500 – $1,500 / ৳150,000</option>
                        <option value="$1,500 - $5,000 / ৳500K">$1,500 – $5,000 / ৳500,000</option>
                        <option value="$5,000+ / ৳500K+">$5,000+ / ৳500,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {isBn ? "আপনার বর্তমান প্রধান বাধা বা লক্ষ্য (সংক্ষেপে)" : "Main Goal or Current Bottleneck"}
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isBn ? "যেমন: আমরা ফেসবুক বুস্ট করছি কিন্তু ROAS ২ এর নিচে এবং প্রচুর কার্ট ড্রপ হচ্ছে..." : "e.g. Current ROAS is under 2.0x and we are losing sales at checkout..."}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="h-4 w-4" />
                      <span>{isBn ? "কনসালটেশন অনুরোধ জমা দিন" : "Submit Consultation Request"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                      title={isBn ? "ফর্ম না লিখে সরাসরি হোয়াটসঅ্যাপে পাঠান" : "Send directly via WhatsApp"}
                    >
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                      <span>{isBn ? "হোয়াটসঅ্যাপে পাঠান" : "WhatsApp"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
