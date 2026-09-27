/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProfileData, ServiceItem, CaseStudy, PricingPackage, Testimonial, FaqItem } from '../types';

export const initialProfile: ProfileData = {
  name: "Rakibul Islam",
  nameBn: "রাকিবুল ইসলাম",
  title: "Data-Driven Digital Marketing & Growth Consultant",
  titleBn: "ডাটা-ড্রিভেন ডিজিটাল মার্কেটিং ও গ্রোথ কনসালট্যান্ট",
  tagline: "Helping E-commerce & Service Brands Scale with Meta Ads, Google PPC & High-Converting Funnels",
  taglineBn: "মেটা ও গুগল বিজ্ঞাপনের মাধ্যমে ব্র্যান্ডের সেলস ও আরওএএস (ROAS) বৃদ্ধি করি",
  bio: "Specializing in full-funnel paid media, server-side tracking (Meta CAPI + GA4), conversion rate optimization (CRO), and profitable client acquisition pipelines. Based in Dhaka, serving businesses globally.",
  bioBn: "পেইড মিডিয়া অ্যাডস, সার্ভার-সাইড ট্র্যাকিং (Meta CAPI + GA4), কনভার্সন ফানেল অপ্টিমাইজেশন এবং লাভজনক বিজনেস স্কেলিং নিয়ে কাজ করছি। বাংলাদেশ ও আন্তর্জাতিক ক্লায়েন্টদের সাথে সফল অভিজ্ঞতা।",
  location: "Dhaka, Bangladesh · Serving Worldwide",
  locationBn: "ঢাকা, বাংলাদেশ · বিশ্বব্যাপী সেবা",
  experienceYears: 6,
  adSpendManaged: "$1.8M+",
  averageRoas: "4.8x",
  successfulCampaigns: 140,
  whatsappNumber: "+8801750000000",
  email: "contact.rakibuldm@gmail.com",
  instagramHandle: "rakibul.growth",
  facebookUrl: "https://facebook.com",
  linkedinUrl: "https://linkedin.com",
  upworkUrl: "https://upwork.com",
  fiverrUrl: "https://fiverr.com",
  meetingLink: "https://calendly.com",
};

export const servicesData: ServiceItem[] = [
  {
    id: "meta-ads",
    number: "01",
    title: "Meta Ads (Facebook & Instagram)",
    titleBn: "মেটা অ্যাডস (ফেসবুক ও ইনস্টাগ্রাম)",
    summary: "Full-funnel campaign architecture, creative testing frameworks, dynamic product ads, and advantage+ budget scaling.",
    summaryBn: "ফুল-ফানেল ক্যাম্পেইন আর্কিটেকচার, ক্রিয়েটিভ টেস্টিং ফ্রেমওয়ার্ক এবং অ্যাডভান্টেজ+ বাজেট স্কেলিং।",
    keyOutcomes: [
      "Consistent 3.5x–6.5x ROAS for e-commerce",
      "Creative fatigue mitigation with weekly hooks testing",
      "Custom CBO audience segmentation"
    ],
    keyOutcomesBn: [
      "ই-কমার্সে ধারাবাহিক ৩.৫x–৬.৫x ROAS অর্জন",
      "সাপ্তাহিক ক্রিয়েটিভ হুক টেস্টিং",
      "টার্গেটেড অডিয়েন্স সেগমেন্টেশন ও স্কেলিং"
    ],
    tools: ["Meta Business Suite", "Ads Manager", "Canva Pro", "AdPulse"],
    highlight: "Primary Growth Lever"
  },
  {
    id: "google-ads",
    number: "02",
    title: "Google Search & Performance Max",
    titleBn: "গুগল সার্চ ও পারফরম্যান্স ম্যাক্স",
    summary: "High-intent buyer keyword targeting, smart bidding strategies, and Google Shopping feed optimization.",
    summaryBn: "হাই-ইনটেন্ট সার্চ কিওয়ার্ড টার্গেটিং, স্মার্ট বিডিং স্ট্র্যাটেজি এবং গুগল শপিং ফিড অপ্টিমাইজেশন।",
    keyOutcomes: [
      "Lowest cost-per-acquisition (CPA) on high-ticket services",
      "Negative keyword lists saving 25%+ wasted ad budget",
      "Automated Performance Max channel reach"
    ],
    keyOutcomesBn: [
      "উচ্চ মূল্যের সেবায় সর্বনিম্ন CPA অর্জন",
      "২৫%+ অপচয় রোধে নেগেটিভ কিওয়ার্ড ব্যবস্থাপনা",
      "স্মার্ট অটোমেটেড পি-ম্যাক্স ক্যাম্পেইন"
    ],
    tools: ["Google Ads", "Keyword Planner", "Google Merchant Center"],
    highlight: "High Intent Pipeline"
  },
  {
    id: "tracking-analytics",
    number: "03",
    title: "Server-Side Tracking & Meta CAPI",
    titleBn: "সার্ভার-সাইড ট্র্যাকিং ও মেটা CAPI",
    summary: "Bypass iOS14+ ad blockers and browser restrictions with direct server-to-server event data transmission via GTM & Cloudflare/Stape.",
    summaryBn: "iOS14+ ও ব্রাউজার ট্র্যাকিং ব্লক এড়িয়ে সার্ভার-সাইড মেটা CAPI এবং GA4 নির্ভুল সেটআপ।",
    keyOutcomes: [
      "9.2/10 Meta Event Quality Score",
      "Accurate purchase attribution and deduplication",
      "First-party cookie extension for retargeting"
    ],
    keyOutcomesBn: [
      "৯.২/১০ মেটা ইভেন্ট কোয়ালিটি স্কোর অর্জন",
      "সঠিক পারচেজ ডেটা ও ডি-ডুপ্লিকেশন নিশ্চিতকরণ",
      "রিটার্গেটিংয়ের জন্য ফার্স্ট-পার্টি কুকি লংজিভিটি"
    ],
    tools: ["Google Tag Manager (Server)", "GA4", "Meta CAPI", "Stape.io"],
    highlight: "Data Precision"
  },
  {
    id: "cro-landing-pages",
    number: "04",
    title: "High-Converting Landing Pages & CRO",
    titleBn: "হাই-কনভার্টিং ল্যান্ডিং পেজ ও CRO",
    summary: "Copywriting, UX wireframing, speed optimization, and frictionless checkout funnels built to double conversion rates.",
    summaryBn: "কনভার্সন অপ্টিমাইজড কপিরাইটিং, দ্রুত লোডিং স্পিড এবং সহজে অর্ডার করার স্মুথ চেকআউট ফানেল।",
    keyOutcomes: [
      "Conversion rates elevated from 1.2% to 3.8%+",
      "Sub-2s page load speed on mobile networks",
      "A/B split-tested headline & CTA layouts"
    ],
    keyOutcomesBn: [
      "কনভার্সন রেট ১.২% থেকে ৩.৮%+ এ উন্নীত",
      "মোবাইল নেটওয়ার্কে ২ সেকেন্ডের নিচে লোড স্পিড",
      "A/B স্প্লিট-টেস্টেড অফার ও কল-টু-অ্যাকশন"
    ],
    tools: ["Figma", "WordPress / Shopify", "Hotjar", "PageSpeed"],
    highlight: "Conversion Engine"
  },
  {
    id: "seo-content",
    number: "05",
    title: "Organic SEO & Search Dominance",
    titleBn: "অর্গানিক এসইও ও সার্চ ডমিন্যান্স",
    summary: "Technical SEO audits, semantic topical clusters, on-page optimization, and high-quality backlink blueprints for compounding traffic.",
    summaryBn: "টেকনিক্যাল অডিট, কনটেন্ট ক্লাস্টার ও অন-পেজ অপ্টিমাইজেশনের মাধ্যমে দীর্ঘমেয়াদী ফ্রি ট্র্যাফিক।",
    keyOutcomes: [
      "Top 3 rankings for transactional commercial terms",
      "Zero-ad-cost inbound organic client leads",
      "Structured schema markup for rich snippets"
    ],
    keyOutcomesBn: [
      "গুরুত্বপূর্ণ বাণিজ্যিক কিওয়ার্ডে গুগল টপ ৩ র‍্যাংকিং",
      "বিনামূল্যে দীর্ঘমেয়াদী অর্গানিক লিড ও ট্র্যাফিক",
      "গুগল রিচ স্নিপেট স্কিমা স্ট্রাকচার্ড ডেটা"
    ],
    tools: ["Ahrefs", "Google Search Console", "Screaming Frog"],
    highlight: "Long-term Moat"
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI & Marketing Automation",
    titleBn: "এআই ও মার্কেটিং অটোমেশন",
    summary: "Automated WhatsApp and Messenger chatbots, instant CRM lead follow-up, and abandoned cart recapture sequences.",
    summaryBn: "স্বয়ংক্রিয় হোয়াটসঅ্যাপ ও মেসেঞ্জার বট, তাৎক্ষণিক লিড নোটিফিকেশন এবং পরিত্যক্ত কার্ট রিকভারি।",
    keyOutcomes: [
      "Under 60-second response time to inbound inquiries",
      "22%+ cart abandonment recapture rate",
      "Automated lead delivery into Google Sheets & CRM"
    ],
    keyOutcomesBn: [
      "৬০ সেকেন্ডের মধ্যে স্বয়ংক্রিয় কাস্টমার রেসপন্স",
      "২২%+ ড্রপড কার্ট সফলভাবে রিকভার",
      "গুগল শিট ও সিআরএমে অটোমেটেড লিড সিঙ্ক"
    ],
    tools: ["ManyChat", "Make.com / Zapier", "WhatsApp Business Cloud API"],
    highlight: "Efficiency Multiplier"
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "mens-apparel-scale",
    clientNiche: "E-Commerce Apparel",
    clientNicheBn: "ই-কমার্স ফ্যাশন ও অ্যাপারেল",
    clientLocation: "Dhaka, Bangladesh",
    headline: "Scaling an Apparel Brand from $4K to $38K/Month with Advantage+ Shopping",
    headlineBn: "অ্যাডভান্টেজ+ শপিং ক্যাম্পেইনে ব্র্যান্ড সেলস ৪ হাজার থেকে ৩৮ হাজার ডলারে উন্নীত",
    primaryMetric: "5.4x",
    primaryMetricLabel: "Average Blended ROAS",
    primaryMetricLabelBn: "গড় ব্লেন্ডেড আরওএএস",
    secondaryMetrics: [
      { label: "Revenue Generated", labelBn: "মোট রেভিনিউ", value: "$114,800" },
      { label: "Cost Per Purchase", labelBn: "প্রতি অর্ডারে খরচ", value: "$4.12" },
      { label: "Orders Delivered", labelBn: "সফল ডেলিভারি", value: "3,480+" }
    ],
    challenge: "The client was relying on boosted Facebook posts with unpredictable ROAS under 1.8x, heavy ad spend waste on dead audiences, and high cart abandonment.",
    challengeBn: "ক্লায়েন্ট শুধুমাত্র ফেসবুক পোস্ট বুস্ট করতেন যার ফলে ROAS ছিল মাত্র ১.৮x, বাজেট অপচয় হচ্ছিল এবং প্রচুর কার্ট ড্রপ হচ্ছিল।",
    strategy: "Implemented full-funnel Advantage+ catalog ads paired with dynamic video UGC hooks and a 1-page expedited mobile checkout.",
    strategyBn: "অ্যাডভান্টেজ+ ক্যাটালগ অ্যাডস, ইউজার জেনারেটেড ভিডিও হুকস এবং ১-পেজ ফাস্ট মোবাইল চেকআউট ফানেল বাস্তবায়ন করা হয়।",
    executionSteps: [
      "Installed server-side Meta CAPI via GTM to recover 32% lost attribution",
      "Built 8 rapid creative variants testing curiosity vs pain-point hooks",
      "Separated cold prospect scaling budget from retention retargeting"
    ],
    executionStepsBn: [
      "GTM দিয়ে সার্ভার-সাইড Meta CAPI সেটআপ করে ৩২% হারানো ডেটা উদ্ধার",
      "৮টি ভিন্ন ক্রিয়েটিভ হুক দিয়ে A/B স্প্লিট টেস্টিং",
      "নতুন অডিয়েন্স ও পুরনো কাস্টমারদের জন্য আলাদা ফানেল স্ট্র্যাটেজি"
    ],
    timeframe: "90 Days Execution",
    roasMultiplier: 5.4
  },
  {
    id: "b2b-consulting-leads",
    clientNiche: "B2B Software & Professional Services",
    clientNicheBn: "বিটুবি সফটওয়্যার ও আইটি কনসালটেন্সি",
    clientLocation: "Dubai & USA",
    headline: "Lowering Cost-Per-Qualified Lead by 58% via Laser-Targeted Google Search",
    headlineBn: "গুগল সার্চ ও লিঙ্কডইন ফানেলে প্রতি কোয়ালিফাইড লিডের খরচ ৫৮% হ্রাস",
    primaryMetric: "-58%",
    primaryMetricLabel: "Cost Per Qualified Demo",
    primaryMetricLabelBn: "কোয়ালিফাইড ডেমোর খরচ হ্রাস",
    secondaryMetrics: [
      { label: "Booked Calls", labelBn: "বুকড কনসালটেশন", value: "245 Leads" },
      { label: "Pipeline Value", labelBn: "পাইপলাইন ভ্যালু", value: "$340,000" },
      { label: "Lead-to-Show Rate", labelBn: "কল অ্যাটেন্ডেন্স রেট", value: "88%" }
    ],
    challenge: "Client burned $6,000 on broad Google keywords bringing irrelevant job seekers and student traffic instead of decision makers.",
    challengeBn: "ক্লায়েন্ট ব্রড কিওয়ার্ডে অপ্রয়োজনীয় ক্লিক পেয়ে বাজেট নষ্ট করছিলেন যা থেকে কোনো আসল বায়ার আসছিল না।",
    strategy: "Rebuilt Google Ads structure with exact-match intent queries, deep negative keyword lists, and a qualifying multi-step booking form.",
    strategyBn: "এক্স্যাক্ট-ম্যাচ হাই-ইনটেন্ট সার্চ টার্ম, কঠোর নেগেটিভ কিওয়ার্ড এবং প্রি-কোয়ালিফাইং বুকিং ফর্ম তৈরি করা হয়।",
    executionSteps: [
      "Mined commercial intent searches like 'hire dedicated react engineer'",
      "Connected Typeform with automated WhatsApp booking reminders",
      "Set up Google Ads Offline Conversion Tracking (OCT)"
    ],
    executionStepsBn: [
      "উচ্চ বাণিজ্যিক মূল্যের সার্চ কিওয়ার্ড নিখুঁতভাবে নির্ধারণ",
      "হোয়াটসঅ্যাপ স্বয়ংক্রিয় মিটিং রিমাইন্ডার সিকোয়েন্স সংযোগ",
      "গুগল অফলাইন কনভার্সন ট্র্যাকিংয়ের মাধ্যমে স্মার্ট বিডিং ট্রেন করা"
    ],
    timeframe: "60 Days Execution",
    roasMultiplier: 4.2
  },
  {
    id: "local-clinic-growth",
    clientNiche: "Healthcare & Specialized Clinic",
    clientNicheBn: "স্পেশালাইজড ডেন্টাল ও মেডিকেল ক্লিনিক",
    clientLocation: "Gulshan, Dhaka",
    headline: "Generating 1,280+ Patient Inquiries in 4 Months via Localized Meta + WhatsApp Funnel",
    headlineBn: "৪ মাসে ১,২৮০+ রোগী অ্যাপয়েন্টমেন্ট অনুসন্ধান লোকাল অ্যাডস ও হোয়াটসঅ্যাপ ফানেলে",
    primaryMetric: "1,280+",
    primaryMetricLabel: "Direct WhatsApp Inquiries",
    primaryMetricLabelBn: "সরাসরি হোয়াটসঅ্যাপ মেসেজ",
    secondaryMetrics: [
      { label: "Average Cost / Inquiry", labelBn: "প্রতি মেসেজে খরচ", value: "$0.48" },
      { label: "Appointment Booked", labelBn: "নিশ্চিত অ্যাপয়েন্টমেন্ট", value: "482 Patients" },
      { label: "Total ROI", labelBn: "মোট বিনিয়োগ ফেরত", value: "7.1x" }
    ],
    challenge: "The dental aesthetic clinic was struggling with walk-ins after moving to a new high-end facility.",
    challengeBn: "নতুন লোকেশনে শিফট করার পর রোগী সরাসরি ক্লিনিকে কম আসছিল এবং লোকাল ব্রোশিওর কার্যকর হচ্ছিল না।",
    strategy: "Launched hyper-local geo-targeted Meta ads (within 7km radius) with doctor credentials video social proof and instant click-to-WhatsApp.",
    strategyBn: "৭ কিলোমিটার ব্যাসার্ধের মধ্যে হাইপার-লোকাল ভিডিও অ্যাডস এবং ডিরেক্ট ক্লিক-টু-হোয়াটসঅ্যাপ ক্যাম্পেইন।",
    executionSteps: [
      "Produced 3 patient journey transformation video reels",
      "Integrated instant automated greeting & slot reservation on WhatsApp",
      "Retargeted video viewers with limited-time checkup packages"
    ],
    executionStepsBn: [
      "রোগীদের বাস্তব অভিজ্ঞতা ও ডক্টরস পরামর্শ নিয়ে শর্ট ভিডিও রিলস",
      "হোয়াটসঅ্যাপ বিজনেস অটো-রেসপন্স ও স্লট বুকিং সিস্টেম",
      "ভিডিও ভিউয়ারদের জন্য বিশেষ কনসালটেশন অফার রিটার্গেটিং"
    ],
    timeframe: "120 Days Execution",
    roasMultiplier: 7.1
  }
];

export const packagesData: PricingPackage[] = [
  {
    id: "starter-audit",
    name: "Growth Audit & Setup",
    nameBn: "গ্রোথ অডিট ও অ্যাডভান্সড সেটআপ",
    priceUsd: 250,
    priceBdt: 30000,
    billingPeriod: "One-Time Sprint",
    billingPeriodBn: "এককালীন স্প্রিন্ট",
    idealFor: "Businesses wanting bulletproof tracking, account audit & clean campaign foundation",
    idealForBn: "যাদের অ্যাড অ্যাকাউন্ট অডিট, ট্র্যাকিং ফিক্স ও শক্তিশালী ক্যাম্পেইন ফাউন্ডেশন প্রয়োজন",
    features: [
      "Full Ad Account & Pixel Health Audit",
      "Server-side Meta CAPI or GA4 setup via GTM",
      "Custom Audience & Retargeting Setup",
      "3 Tested Campaign Structures Prepared",
      "1-Hour Live Strategy Handover Call"
    ],
    featuresBn: [
      "সম্পূর্ণ অ্যাড অ্যাকাউন্ট ও পিক্সেল হেলথ অডিট",
      "জিটিএম এর মাধ্যমে সার্ভার-সাইড Meta CAPI / GA4 সেটআপ",
      "কাস্টম ও লুকঅ্যালাইক অডিয়েন্স সেটআপ",
      "৩টি পরীক্ষিত ক্যাম্পেইন কাঠামো প্রস্তুত",
      "১ ঘণ্টার লাইভ স্ট্র্যাটেজি ব্রিফিং সেশন"
    ]
  },
  {
    id: "growth-monthly",
    name: "Full Growth Retainer",
    nameBn: "ফুল গ্রোথ মান্থলি রিটেইনার",
    priceUsd: 550,
    priceBdt: 65000,
    billingPeriod: "Per Month",
    billingPeriodBn: "প্রতি মাসে",
    isPopular: true,
    idealFor: "E-commerce & direct-to-consumer brands ready to scale to $15K–$50K/mo profitably",
    idealForBn: "ই-কমার্স ও বিজনেস যাদের নিয়মিত লাভজনক সেলস স্কেলিং ও অপ্টিমাইজেশন দরকার",
    features: [
      "Meta Ads + Google Ads End-to-End Management",
      "Daily Bid & Budget Optimization",
      "Weekly Creative Hook & Angle Briefs",
      "Bi-Weekly Strategy Calls & Custom Dashboard",
      "Continuous Conversion Rate (CRO) Guidance",
      "Dedicated WhatsApp Support (Under 2hr response)"
    ],
    featuresBn: [
      "মেটা ও গুগল অ্যাডস সম্পূর্ণ পরিচালনা ও মনিটরিং",
      "প্রতিদিনের বিড ও বাজেট অপ্টিমাইজেশন",
      "সাপ্তাহিক নতুন ক্রিয়েটিভ ও ভিডিও হুক প্ল্যান",
      "পাক্ষিক লাইভ রিভিউ কল ও রিয়েলটাইম ড্যাশবোর্ড",
      "ওয়েবসাইট কনভার্সন রেট (CRO) পরামর্শ",
      "ডেডিকেটেড হোয়াটসঅ্যাপ প্রায়োরিটি সাপোর্ট"
    ]
  },
  {
    id: "enterprise-omnichannel",
    name: "Omnichannel Scale Partner",
    nameBn: "অমনিচ্যানেল স্কেলিং পার্টনার",
    priceUsd: 1100,
    priceBdt: 130000,
    billingPeriod: "Per Month",
    billingPeriodBn: "প্রতি মাসে",
    idealFor: "Established brands spending $5K+/mo seeking full marketing department leadership",
    idealForBn: "প্রতিষ্ঠিত কোম্পানি যারা বড় বাজেটে অ্যাড স্কেল ও সম্পূর্ণ মার্কেটিং অটোমেশন চায়",
    features: [
      "Meta, Google Search, YouTube & TikTok Ads",
      "Full Landing Page & Checkout Funnel Redesign",
      "Custom Server Tracking on Private Cloudflare/Stape",
      "WhatsApp & Email Automation Sequence Integration",
      "Weekly High-Level Executive Growth Meetings",
      "Guaranteed Ad Spend Efficiency Targets"
    ],
    featuresBn: [
      "মেটা, গুগল সার্চ, ইউটিউব ও টিকটক সমন্বিত ক্যাম্পেইন",
      "সম্পূর্ণ ল্যান্ডিং পেজ ও সেলস ফানেল রি-ডিজাইন",
      "প্রাইভেট ক্লাউড সার্ভার ট্র্যাকিং আর্কিটেকচার",
      "হোয়াটসঅ্যাপ ও ইমেইল মার্কেটিং অটোমেশন ফ্লো",
      "সাপ্তাহিক এক্সিকিউটিভ গ্রোথ মিটিং",
      "চুক্তিবদ্ধ আরওএএস ও গ্রোথ টার্গেট ট্র্যাকিং"
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Tahmidur Rahman",
    clientRole: "Founder & CEO",
    companyName: "LuxeWear Bangladesh",
    avatarText: "TR",
    content: "Rakibul completely transformed our digital ad performance. Prior to working with him, we were burning money boosting posts with a 1.6x ROAS. He re-architected our Meta CAPI tracking and launched structured Advantage+ campaigns that pushed our blended ROAS past 5.2x.",
    contentBn: "রাকিবুল ভাই আমাদের ই-কমার্স ব্যবসার চিত্র পুরো পাল্টে দিয়েছেন। আগে বুস্টিং করে ১.৬x ROAS পেতাম। তিনি সার্ভার-সাইড ট্র্যাকিং এবং অ্যাডভান্টেজ+ ক্যাম্পেইন সাজিয়ে আমাদের ব্লেন্ডেড ROAS ৫.২x এ নিয়ে এসেছেন।",
    verifiedMetric: "5.2x Verified ROAS",
    platform: "Upwork Verified"
  },
  {
    id: "test-2",
    clientName: "David Sterling",
    clientRole: "Marketing Director",
    companyName: "Nexus Cloud Consulting (USA)",
    avatarText: "DS",
    content: "He is one of the rare digital marketers who deeply understands technical data and attribution, not just superficial creative tags. Our B2B demo acquisition cost dropped by 58% in our first two months of working together.",
    contentBn: "রাকিবুল শুধু বিজ্ঞাপন দেন না, তিনি টেকনিক্যাল ডাটা ও অ্যানালিটিক্স খুব ভালো বোঝেন। আমাদের বিটুবি সফটওয়্যারের প্রতি লিড খরচ ৫৮% কমে গেছে মাত্র দুই মাসে। অসাধারণ কাজ!",
    verifiedMetric: "$340K Sales Pipeline",
    platform: "Direct Contract"
  },
  {
    id: "test-3",
    clientName: "Dr. Farhana Yasmin",
    clientRole: "Managing Director",
    companyName: "Aesthetic Dental Care",
    avatarText: "FY",
    content: "Our clinic in Gulshan saw an influx of over 400 patient bookings in the first 90 days. His localized click-to-WhatsApp strategy made it effortless for patients to connect with our front desk immediately.",
    contentBn: "গুলশানের ক্লিনিকে প্রথম ৯০ দিনেই ৪০০+ রোগী সরাসরি হোয়াটসঅ্যাপ বিজ্ঞাপনের মাধ্যমে অ্যাপয়েন্টমেন্ট নিয়েছেন। তার হাইপার-লোকাল টার্গেটিং কৌশল অসাধারণ ফলপ্রসূ হয়েছে।",
    verifiedMetric: "1,280+ WhatsApp Leads",
    platform: "Client Review"
  }
];

export const faqData: FaqItem[] = [
  {
    question: "How much minimum ad budget do I need to start?",
    questionBn: "শুরু করতে সর্বনিম্ন কত অ্যাড বাজেট প্রয়োজন?",
    answer: "For e-commerce in Bangladesh, a minimum testing ad spend of $15–$30/day (approx. ৳2,000–৳3,500/day) is recommended to allow the Meta/Google algorithm sufficient conversion data. For international US/EU campaigns, $40–$80/day is standard.",
    answerBn: "বাংলাদেশের ই-কমার্সের জন্য দৈনিক ১৫–৩০ ডলার (আনুমানিক ২,০০০–৩,৫০০ টাকা) দিয়ে অ্যালগরিদম শেখা শুরু করা ভালো। আন্তর্জাতিক (ইউএস/ইউকে) ক্লায়েন্টদের জন্য দৈনিক ৪০–৮০ ডলার ন্যূনতম আদর্শ।"
  },
  {
    question: "Why do I need Server-Side Tracking (Meta CAPI)? Isn't the browser pixel enough?",
    questionBn: "সার্ভার-সাইড ট্র্যাকিং (Meta CAPI) কেন দরকার? শুধু ব্রাউজার পিক্সেল কি যথেষ্ট নয়?",
    answer: "Browser pixels lose 25%–35% of all events due to iOS 14+, Safari ITP, and desktop ad-blockers. Server-side CAPI sends purchase data directly from your server to Meta, recovering lost attribution, improving targeting, and lowering ad costs.",
    answerBn: "আইওএস ১৪+ এবং ব্রাউজার অ্যাড-ব্লকারের কারণে সাধারণ পিক্সেল ২৫% থেকে ৩৫% ডাটা মিস করে। সার্ভার-সাইড CAPI সরাসরি সার্ভার থেকে ডেটা পাঠায়, ফলে কোনো সেলস ডেটা নষ্ট হয় না এবং বিজ্ঞাপনের খরচ কমে আসে।"
  },
  {
    question: "Do you guarantee a specific ROAS or sales volume?",
    questionBn: "আপনি কি নির্দিষ্ট আরওএএস (ROAS) বা বিক্রির গ্যারান্টি দেন?",
    answer: "No ethical marketer can promise sales because conversion depends on your product quality, pricing, and fulfillment. However, I guarantee meticulous data setup, daily optimization, creative testing, and transparent reporting with milestones.",
    answerBn: "কোনো পেশাদার মার্কেটার ভুয়া বিক্রির গ্যারান্টি দিতে পারে না, কারণ সেলস প্রোডাক্ট কোয়ালিটি, প্রাইসিং ও কাস্টমার সার্ভিসের ওপর নির্ভর করে। তবে আমি নির্ভুল ট্র্যাকিং, নিয়মিত অপ্টিমাইজেশন ও সর্বোচ্চ আরওএএস অর্জনের কাজের গ্যারান্টি দিই।"
  },
  {
    question: "How do we communicate and report progress?",
    questionBn: "যোগাযোগ এবং কাজের রিপোর্ট কীভাবে দেওয়া হয়?",
    answer: "We communicate daily via dedicated WhatsApp or Slack channels. You receive a live Looker Studio reporting dashboard updated in real-time, plus scheduled bi-weekly video strategy calls.",
    answerBn: "আমরা ডেডিকেটেড হোয়াটসঅ্যাপ গ্রুপে যুক্ত থাকি। ক্লায়েন্টদের জন্য লাইভ লুকার স্টুডিও ড্যাশবোর্ড থাকে যেখানে রিয়েলটাইমে সব দেখা যায়, সাথে প্রতি দুই সপ্তাহে জুম/গুগল মিট ভিডিও কল হয়।"
  }
];

export const workflowSteps = [
  {
    step: "01",
    phase: "Research",
    phaseBn: "গবেষণা ও অ্যানালাইসিস",
    title: "Market & Competitor Audit",
    titleBn: "মার্কেট ও প্রতিযোগী বিশ্লেষণ",
    description: "Deep audit of past ad accounts, top-performing competitor creatives in Meta Ad Library, customer sentiment, and unit economics.",
    descriptionBn: "অতীতের অ্যাড হিস্ট্রি অডিট, মেটা অ্যাড লাইব্রেরি থেকে সফল প্রতিযোগীদের ক্রিয়েটিভ বিশ্লেষণ এবং কাস্টমার সাইকোলজি স্টাডি।"
  },
  {
    step: "02",
    phase: "Diagnose",
    phaseBn: "সমস্যা ও বাধা চিহ্নিতকরণ",
    title: "Pixel & Funnel Leak Detection",
    titleBn: "পিক্সেল ও ফানেল লিক শনাক্তকরণ",
    description: "Inspecting attribution data, page loading drop-offs, checkout frictions, and high-frequency audience saturation.",
    descriptionBn: "ট্র্যাকিং ইরর, চেকআউট বাধা, পেইজ স্পিড ড্রপ এবং অডিয়েন্স স্যাচুরেশন সমস্যা নিখুঁতভাবে চিহ্নিত করা।"
  },
  {
    step: "03",
    phase: "Solve",
    phaseBn: "কৌশল ও ক্রিয়েটিভ রূপরেখা",
    title: "Strategic Growth Roadmap",
    titleBn: "গ্রোথ রোডম্যাপ ও অফার ক্রাফটিং",
    description: "Developing undeniable irresistible offers, hook-story-offer video briefs, and budget allocation models across search and social.",
    descriptionBn: "আকর্ষণীয় অফার প্ল্যানিং, হুক-স্টোরি-অফার ভিডিও স্ক্রিপ্ট এবং গুগল ও ফেসবুকের বাজেট বণ্টন কৌশল।"
  },
  {
    step: "04",
    phase: "Build",
    phaseBn: "বাস্তবায়ন ও লঞ্চ",
    title: "Technical Setup & Launch",
    titleBn: "টেকনিক্যাল সেটআপ ও লাইভ লঞ্চ",
    description: "Deploying GTM Server CAPI containers, high-converting mobile checkout pages, CBO audience structures, and live tests.",
    descriptionBn: "সার্ভার-সাইড পিক্সেল সিঙ্ক, দ্রুতগতির ল্যান্ডিং পেজ তৈরি, সিবিও অ্যাড সেটআপ এবং সতর্কতার সাথে লাইভ ক্যাম্পেইন চালু।"
  },
  {
    step: "05",
    phase: "Scale",
    phaseBn: "পরিমাপ ও স্কেলিং",
    title: "Aggressive Profitable Scale",
    titleBn: "বাজেট স্কেলিং ও প্রফিট ম্যাক্সিমাইজেশন",
    description: "Horizontal scaling into new broad audiences and vertical 20% budget compounding on proven winning creative angles.",
    descriptionBn: "সফল ক্রিয়েটিভগুলোতে ধীরে ধীরে ২০% বাজেট বৃদ্ধি এবং নতুন ব্রড অডিয়েন্সে হরাইজন্টাল স্কেলিং করে সর্বোচ্চ প্রফিট নিশ্চিত করা।"
  }
];
