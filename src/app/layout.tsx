import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Archivo_Black,
} from "next/font/google";
import { SITE } from "@/lib/site";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { PROJECTS } from "./components/portfolioData";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [...SITE.keywords],
  category: "technology",
  alternates: { canonical: "/" },
  verification: {
    google: "qsgXv66Ym7CSU8lNxorgotEQk7u8Xu1-bPbY2gXcIco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.shortName,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/opengraph-image"],
    creator: "@marlongacrama",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, "");
const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;
const SERVICE_ID = `${SITE.url}/#service`;
const PORTFOLIO_ID = `${SITE.url}/#portfolio`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      telephone: SITE.phone,
      jobTitle: "Full-Stack & AI Engineer",
      description: SITE.description,
      image: `${SITE.url}/images/dev.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.location.city,
        addressRegion: SITE.location.region,
        addressCountry: SITE.location.countryCode,
      },
      nationality: { "@type": "Country", name: "Philippines" },
      sameAs: [SITE.social.github, SITE.social.linkedin],
      knowsAbout: [
        "Agentic AI",
        "AI Voice Agents",
        "Retrieval-Augmented Generation",
        "LLM Tool Calling",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "OpenAI API",
        "Claude API",
        "LangChain",
        "VAPI",
        "Retell",
        "Twilio",
        "n8n",
        "Make.com",
        "Workflow Automation",
        "Full-Stack Development",
      ],
      knowsLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Filipino" },
      ],
      worksFor: [
        { "@type": "Organization", name: "Aeva AI" },
        { "@type": "Organization", name: "Cargo Atlanta" },
      ],
      alumniOf: { "@type": "Organization", name: "Accenture" },
      seeks: {
        "@type": "Demand",
        name: "Freelance and full-time engineering engagements",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.shortName,
      alternateName: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
      copyrightHolder: { "@id": PERSON_ID },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": SERVICE_ID,
      name: `${SITE.name} — Full-Stack & AI Engineering`,
      url: SITE.url,
      image: `${SITE.url}/opengraph-image`,
      description:
        "Freelance and contract engineering: agentic AI, voice agents, RAG, end-to-end web products, and workflow automation. Remote-first, based in Cebu, Philippines.",
      provider: { "@id": PERSON_ID },
      areaServed: [
        { "@type": "Country", name: "Worldwide" },
        { "@type": "Country", name: "Philippines" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Full-Stack Web Development",
        "AI Engineering",
        "Voice Agent Development",
        "Workflow Automation",
        "Technical Leadership",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agentic AI development",
              description:
                "LLM-powered agents wired to real systems — tool-calling, RAG, multi-step orchestration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Voice agent development",
              description:
                "AI voice receptionists and calling agents using VAPI, Retell, and Twilio.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-stack web product",
              description:
                "End-to-end web builds with Next.js, React, Node, and PostgreSQL — from Figma to production.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow automation",
              description:
                "n8n, Make.com, and custom Node services replacing manual ops with reliable automated flows.",
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": PORTFOLIO_ID,
      name: "Selected work",
      description: "Projects shipped by Marlon Gacrama Jr.",
      numberOfItems: PROJECTS.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: stripHtml(p.title),
          description: p.desc,
          dateCreated: p.yr,
          keywords: p.stack.join(", "),
          ...(p.image ? { image: `${SITE.url}${p.image}` } : {}),
          creator: { "@id": PERSON_ID },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Marlon available for freelance or full-time work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Marlon is open to both freelance contracts and full-time roles. Reach out via email at maruronu@gmail.com — replies within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Marlon work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full-stack web with Next.js, React, TypeScript, Tailwind, Node, Express, FastAPI, Python, and PostgreSQL. Agentic AI with the OpenAI API, Claude API, LangChain, and vector databases. Voice agents via VAPI, Retell, and Twilio. Automation via n8n, Make.com, and Zapier. Mobile with React Native, Expo, and Flutter.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Marlon based, and does he work remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cebu City, Philippines (GMT+8). Remote-first by default. Open to occasional onsite visits and to international engagements when the hiring company supports the visa.",
          },
        },
        {
          "@type": "Question",
          name: "What is Marlon currently building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI voice receptionist at Aeva AI (migrating Make.com automations to Node, shipping new features and Splose integrations) and a logistics platform at Cargo Atlanta (AI integrations and Replit-to-Next.js migration with n8n flows).",
          },
        },
        {
          "@type": "Question",
          name: "How much experience does Marlon have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About four years across freelance, agency, and contract work. Career path: freelance (2022 — present) → Accenture automation intern (2023) → Staff Outsourcing Solutions full-stack developer (2023 — 2024) → Kreativ Kat Digital Marketing technical head (Dec 2024 — 2025) → Aeva AI and Cargo Atlanta contracts (2025 — present).",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Marlon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email maruronu@gmail.com or call +63 939 681 0206. The contact form on this site also routes to the same inbox. Replies within 24 hours.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE.url}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Strengths",
          item: `${SITE.url}/#strengths`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Work",
          item: `${SITE.url}/#work`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Experience",
          item: `${SITE.url}/#exp`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Stack",
          item: `${SITE.url}/#stack`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Contact",
          item: `${SITE.url}/#contact`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <SpeedInsights />
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
