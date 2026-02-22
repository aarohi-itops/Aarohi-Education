import { Metadata } from "next";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("../../Views/FAQ/FAQ"));

export const metadata: Metadata = {
  title: "FAQ - Aarohi Skill Academy | Study in Cyprus",
  description:
    "Find answers to frequently asked questions about studying in Cyprus. Get information about admission, visa, financial aid, and living in Cyprus.",
  keywords: [
    "Cyprus education FAQ",
    "study in Cyprus",
    "admission questions",
    "visa process",
    "student life Cyprus",
    "scholarships Cyprus",
  ],
  robots: "index, follow",
  authors: [{ name: "Aarohi Skill Academy" }],
  openGraph: {
    title: "FAQ - Aarohi Skill Academy | Study in Cyprus",
    description:
      "Find answers to frequently asked questions about studying in Cyprus.",
    type: "website",
    url: "https://aahiriskillacademy.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Aarohi Skill Academy | Study in Cyprus",
    description:
      "Get answers to your questions about studying in Cyprus universities.",
  },
};

export default function FAQPage() {
  return <FAQ />;
}
