/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProfileData, Language } from '../types';
import { X, Check, RotateCcw, Sparkles } from 'lucide-react';
import { initialProfile } from '../data/mockData';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
  language: Language;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  language,
}) => {
  if (!isOpen) return null;

  const isBn = language === 'bn';
  const [formData, setFormData] = useState<ProfileData>({ ...profile });

  const handleChange = (field: keyof ProfileData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({ ...initialProfile });
    onUpdateProfile({ ...initialProfile });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div>
            <h3 className="font-display text-lg font-bold text-white">
              {isBn ? "নিজের তথ্য দিয়ে কাস্টমাইজ করুন" : "Personalize Your Portfolio"}
            </h3>
            <p className="text-xs text-slate-400">
              {isBn ? "আপনার নাম, হোয়াটসঅ্যাপ ও তথ্য দিয়ে সাইটটি সাজান" : "Edit your name, WhatsApp & metrics live"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "আপনার নাম (English)" : "Full Name (English)"}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "আপনার নাম (বাংলা)" : "Full Name (Bengali)"}
            </label>
            <input
              type="text"
              value={formData.nameBn}
              onChange={(e) => handleChange('nameBn', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ)" : "WhatsApp Number (with country code)"}
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => handleChange('whatsappNumber', e.target.value)}
              placeholder="+88017..."
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              {isBn ? "সাইটের সব হোয়াটসঅ্যাপ বাটন এই নম্বরে রিডাইরেক্ট হবে।" : "All WhatsApp buttons will connect to this number."}
            </span>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "ইনস্টাগ্রাম ইউজারনেম" : "Instagram Username"}
            </label>
            <input
              type="text"
              value={formData.instagramHandle}
              onChange={(e) => handleChange('instagramHandle', e.target.value)}
              placeholder="username"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {isBn ? "পরিচালিত বাজেট" : "Ad Spend"}
              </label>
              <input
                type="text"
                value={formData.adSpendManaged}
                onChange={(e) => handleChange('adSpendManaged', e.target.value)}
                placeholder="$1.8M+"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {isBn ? "গড় আরওএএস" : "Avg ROAS"}
              </label>
              <input
                type="text"
                value={formData.averageRoas}
                onChange={(e) => handleChange('averageRoas', e.target.value)}
                placeholder="4.8x"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "ইমেইল ঠিকানা" : "Contact Email"}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {isBn ? "লোকেশন / শহর" : "Location"}
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{isBn ? "রিসেট করুন" : "Reset Default"}</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow"
            >
              <Check className="h-3.5 w-3.5" />
              <span>{isBn ? "সংরক্ষণ করুন" : "Save Changes"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
