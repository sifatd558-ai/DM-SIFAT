/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GuideStep {
  number: string;
  title: string;
  titleBn: string;
  badge: string;
  badgeBn: string;
  summary: string;
  summaryBn: string;
  details: string[];
  detailsBn: string[];
  codeSnippet?: string;
  tip?: string;
  tipBn?: string;
}

export const websiteCreationGuide: GuideStep[] = [
  {
    number: "01",
    title: "Understanding the Website Structure",
    titleBn: "ওয়েবসাইটের কাঠামো ও উদ্দেশ্য বুঝুন",
    badge: "Strategy",
    badgeBn: "কৌশল ও ধারণা",
    summary: "Websites like bdrakibuldm.netlify.app are hybrid Link-in-Bio + High-Converting Agency Portfolio landing pages designed specifically for digital marketers and freelancers.",
    summaryBn: "bdrakibuldm.netlify.app এর মতো সাইটগুলো হলো হাইব্রিড 'লিঙ্ক-ইন-বায়ো' এবং 'হাই-কনভার্টিং পোর্টফোলিও ল্যান্ডিং পেজ', যা ইনস্টাগ্রাম বা ফেসবুক ট্র্যাফিককে সরাসরি ক্লায়েন্টে রূপান্তর করে।",
    details: [
      "Mobile-First Responsive Layout: When traffic clicks a link on Instagram or Facebook bio (with ?utm_source=ig), it opens fast without lag.",
      "High-Intent Conversion Points: 1-tap WhatsApp consultation, Calendly discovery call scheduling, and package selection.",
      "Data-Driven Proof: Showing actual ROAS (e.g. 5.4x), dollar revenue generated, and verified client case studies.",
      "Professional Authority: Highlighting skills like Meta CAPI, Google Ads, Funnels, and Analytics."
    ],
    detailsBn: [
      "মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন: ইনস্টাগ্রাম বা ফেসবুকের বায়ো লিঙ্ক থেকে ভিজিট করলে যেন পলকের মধ্যে লোড হয়।",
      "তাৎক্ষণিক যোগাযোগের সহজ পথ: ১-ক্লিকে হোয়াটসঅ্যাপে মেসেজ পাঠানো, ক্যালেন্ডার বুকিং এবং নির্দিষ্ট প্যাকেজ পছন্দ।",
      "বাস্তব প্রমাণের উপস্থাপন: কত ডলারের অ্যাড বাজেট ম্যানেজ করেছেন, কত গুণ ROAS পেয়েছেন তার স্পষ্ট কেস স্টাডি।",
      "টেকনিক্যাল দক্ষতা প্রকাশ: মেটা সিএপিআই (Meta CAPI), সার্ভার সাইড ট্র্যাকিং, গুগল অ্যাডস ও ফানেল অপ্টিমাইজেশন প্রদর্শন।"
    ],
    tip: "A common mistake is putting a generic resume online. High-paying clients hire problem solvers who prove ROI!",
    tipBn: "সাধারণ সিভি আপলোড না করে ক্লায়েন্টদের দেখান আপনি কীভাবে তাদের বিজ্ঞাপনের বাজেট থেকে লাভজনক সেলস এনে দেবেন।"
  },
  {
    number: "02",
    title: "Free Hosting on Netlify (Why .netlify.app?)",
    titleBn: "নেটলিফাইতে (Netlify) সম্পূর্ণ ফ্রি হোস্টিং",
    badge: "Hosting & Domain",
    badgeBn: "হোস্টিং ও ডোমেইন",
    summary: "Netlify gives you free ultra-fast CDN hosting, automatic SSL (HTTPS), and custom subdomains like yourname.netlify.app at zero cost.",
    summaryBn: "নেটলিফাই বিশ্বমানের সিডিএন (CDN), ফ্রি এসএসএল (SSL HTTPS) এবং সম্পূর্ণ বিনামূল্যে yourname.netlify.app সাবডোমেইন প্রদান করে।",
    details: [
      "Step A: Go to netlify.com and sign up for a free account (using GitHub, GitLab, or Email).",
      "Step B (Zero-Code / Drag & Drop): Run `npm run build` on your computer, take the resulting `dist/` folder, and drag-and-drop it into app.netlify.com/drop.",
      "Step C (Recommended Git Integration): Push your project to GitHub. In Netlify, click 'Add new site' > 'Import an existing project' > select your repo. Set Build Command: `npm run build` and Publish Directory: `dist`.",
      "Step D (Subdomain Change): In Netlify Site Settings > General > Site details > Change site name, set it to your handle (e.g., `rakibuldm` or `sifatgrowth`). Your URL becomes `https://rakibuldm.netlify.app`!",
      "Step E (Optional Custom Domain): You can connect any custom domain like `rakibul.com` anytime for free."
    ],
    detailsBn: [
      "ধাপ ১: netlify.com-এ গিয়ে ফ্রি অ্যাকাউন্ট সাইনআপ করুন (গিটহাব বা ইমেইল দিয়ে)।",
      "ধাপ ২ (ড্র্যাগ অ্যান্ড ড্রপ): কোড রান করে `npm run build` দিলে `dist` ফোল্ডার তৈরি হয়। app.netlify.com/drop এ গিয়ে এই ফোল্ডার ড্রপ করলেই ২ সেকেন্ডে সাইট লাইভ!",
      "ধাপ ৩ (গিটহাব অটো-ডিপ্লয়): আপনার কোড গিটহাবে পুশ করে নেটলিফাইতে লিঙ্ক করুন। Build Command দিন `npm run build` এবং Publish Directory দিন `dist`।",
      "ধাপ ৪ (নাম পরিবর্তন): সাইট সেটিংসে গিয়ে 'Change site name' থেকে নিজের পছন্দমতো নাম দিন (যেমন: sifatgrowth)। লিংক হবে: https://sifatgrowth.netlify.app",
      "ধাপ ৫ (কাস্টম ডোমেইন): চাইলে পরে .com ডোমেইনও ফ্রিতে কানেক্ট করা যাবে।"
    ],
    codeSnippet: `# Building the project for Netlify
npm run build

# The output folder 'dist' contains index.html and assets
# Upload this folder to Netlify Drop (app.netlify.com/drop)`
  },
  {
    number: "03",
    title: "Tech Stack & Code Architecture",
    titleBn: "প্রযুক্তি (Tech Stack) ও কোড কাঠামো",
    badge: "Development",
    badgeBn: "ডেভেলপমেন্ট ফ্রেমওয়ার্ক",
    summary: "Modern portfolio websites use lightweight, high-performance tools that guarantee 99+ Google Lighthouse performance scores.",
    summaryBn: "দ্রুত লোডিং স্পিড ও মসৃণ ইউজার এক্সপেরিয়েন্স নিশ্চিত করতে আধুনিক লাইটওয়েট ফ্রেমওয়ার্ক ব্যবহার করা হয়।",
    details: [
      "Frontend Framework: React 19 + Vite (instant build and blazing fast browser hydration)",
      "Styling Engine: Tailwind CSS (clean utility-first styling with zero CSS bloat)",
      "Icons: Lucide-React (clean SVG iconography for social platforms, stats, and checks)",
      "Type Safety: TypeScript (clean schemas for case studies, packages, and client data)"
    ],
    detailsBn: [
      "ফ্রন্টএন্ড: React + Vite (দ্রুত লোডিং এবং স্মুথ কম্পোনেন্ট আর্কিটেকচার)",
      "ডিজাইন: Tailwind CSS (আধুনিক ডার্ক মোড, রেসপন্সিভ গ্রিড ও প্রফেশনাল স্পেসিং)",
      "আইকন: Lucide-React (সোশ্যাল মিডিয়া ও মেট্রিক্সের ক্রিস্টাল ক্লিয়ার আইকন)",
      "টাইপসেফটি: TypeScript (ডেটা এবং কনফিগারেশন নির্ভুল রাখার জন্য)"
    ],
    codeSnippet: `// Example package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`
  },
  {
    number: "04",
    title: "1-Click Direct WhatsApp Integration",
    titleBn: "১-ক্লিকে হোয়াটসঅ্যাপ সংযোগ লিংক তৈরি",
    badge: "Conversion",
    badgeBn: "কনভার্সন ফিচার",
    summary: "In countries like Bangladesh, UAE, UK, and worldwide, 70%+ client deals close directly over WhatsApp. Generate automatic personalized messages.",
    summaryBn: "বাংলাদেশসহ সারা বিশ্বে ৭০%+ ক্লায়েন্ট সরাসরি হোয়াটসঅ্যাপে কথা বলে ডিল ফাইনাল করে। প্রি-ফিল্ড মেসেজ লিংক তৈরি করা অত্যন্ত কার্যকর।",
    details: [
      "Format: https://wa.me/<country_code><number>?text=<encoded_message>",
      "Example for Bangladesh: Country code 880, number 1750000000.",
      "URL-encoded prompt: Pre-fills package name, budget, and website URL so the client doesn't have to type from scratch.",
      "Add a floating WhatsApp button in the corner for constant mobile accessibility."
    ],
    detailsBn: [
      "লিংকের ফরম্যাট: https://wa.me/<country_code><phone_number>?text=<মেসেজ>",
      "বাংলাদেশের উদাহরণ: কান্ট্রি কোড 880 সহ নম্বর দিন (যেমন: https://wa.me/8801750000000)",
      "ইউজার যখন ক্লিকে আসবে, তখন তার মেসেজ বক্সে অটোমেটিক লেখা থাকবে: 'Hello Rakibul, I want to discuss Meta Ads for my e-commerce business.'",
      "সাইটের নিচে একটি ফ্লোটিং হোয়াটসঅ্যাপ বাটন রাখুন যাতে মোবাইল ব্যবহারকারীরা যেকোনো সময় ১ ট্যাপে কথা বলতে পারে।"
    ],
    codeSnippet: `// React WhatsApp Click Handler
const openWhatsApp = (serviceName: string) => {
  const phone = "8801750000000"; // Your international phone
  const message = encodeURIComponent(
    \`Hi! I visited your portfolio and I'm interested in \${serviceName}. Can we discuss?\`
  );
  window.open(\`https://wa.me/\${phone}?text=\${message}\`, '_blank');
};`
  },
  {
    number: "05",
    title: "Tracking & Analytics Setup (Your Own Pixel)",
    titleBn: "আপনার নিজের সাইটে মেটা পিক্সেল ও ট্র্যাকিং সেটআপ",
    badge: "Analytics",
    badgeBn: "অ্যানালিটিক্স সেটআপ",
    summary: "As a digital marketer, your own portfolio should have pristine tracking installed to track visitors from Instagram, Facebook, and LinkedIn.",
    summaryBn: "একজন ডিজিটাল মার্কেটার হিসেবে আপনার নিজের সাইটেই সেরা ট্র্যাকিং সেটআপ থাকতে হবে যেন ইনস্টাগ্রাম বা লিঙ্কডইন থেকে আসা ট্র্যাফিক ট্র্যাক করা যায়।",
    details: [
      "Install Google Tag Manager (GTM) code inside index.html `<head>`.",
      "Add Meta Pixel Base Code to capture PageView, ViewContent, and Contact events.",
      "Track WhatsApp Clicks: Trigger a custom event 'Lead_WhatsApp_Click' whenever someone taps your WhatsApp button.",
      "Setup Google Analytics 4 (GA4) with Enhanced Measurement to see scroll depth and outbound link clicks."
    ],
    detailsBn: [
      "index.html ফাইলের `<head>` অংশে গুগল ট্যাগ ম্যানেজার (GTM) স্ক্রিপ্ট বসান।",
      "মেটা পিক্সেল কোড যুক্ত করে PageView, ViewContent ও Contact ইভেন্ট সেট করুন।",
      "হোয়াটসঅ্যাপ বাটনে ক্লিক করলে 'Lead_WhatsApp_Click' ইভেন্ট ফায়ার করান।",
      "GA4 সেটআপ করে দেখুন কোন সোশ্যাল মিডিয়া বা বায়ো লিংক থেকে কতজন ভিজিটর আসছে।"
    ],
    codeSnippet: `<!-- Place inside index.html <head> -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`
  }
];
