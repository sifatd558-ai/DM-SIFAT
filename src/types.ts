/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'bn' | 'en';

export interface ProfileData {
  name: string;
  nameBn: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  bio: string;
  bioBn: string;
  location: string;
  locationBn: string;
  experienceYears: number;
  adSpendManaged: string;
  averageRoas: string;
  successfulCampaigns: number;
  whatsappNumber: string; // e.g. 8801700000000
  email: string;
  instagramHandle: string;
  facebookUrl: string;
  linkedinUrl: string;
  upworkUrl: string;
  fiverrUrl: string;
  meetingLink: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleBn: string;
  summary: string;
  summaryBn: string;
  keyOutcomes: string[];
  keyOutcomesBn: string[];
  tools: string[];
  highlight: string;
}

export interface CaseStudy {
  id: string;
  clientNiche: string;
  clientNicheBn: string;
  clientLocation: string;
  headline: string;
  headlineBn: string;
  primaryMetric: string;
  primaryMetricLabel: string;
  primaryMetricLabelBn: string;
  secondaryMetrics: {
    label: string;
    labelBn: string;
    value: string;
  }[];
  challenge: string;
  challengeBn: string;
  strategy: string;
  strategyBn: string;
  executionSteps: string[];
  executionStepsBn: string[];
  timeframe: string;
  roasMultiplier: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  nameBn: string;
  priceUsd: number;
  priceBdt: number;
  billingPeriod: string;
  billingPeriodBn: string;
  idealFor: string;
  idealForBn: string;
  isPopular?: boolean;
  features: string[];
  featuresBn: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarText: string;
  content: string;
  contentBn: string;
  verifiedMetric: string;
  platform: string;
}

export interface FaqItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}
