import { Metadata } from "next";
import dynamic from "next/dynamic";

const AdmissionProcess = dynamic(
  () => import("../../Views/AdmissionProcess/AdmissionProcess")
);

export const metadata: Metadata = {
  title: "Admission Process - Aarohi Skill Academy | Top Universities",
  description:
    "Follow our 6-step admission process to get accepted into top universities. Expert guidance from initial inquiry to departure support.",
  keywords: [
    "admission process",
    "university admission",
    "top universities",
    "application process",
    "student visa",
    "admission counseling",
  ],
  robots: "index, follow",
  authors: [{ name: "Aarohi Skill Academy" }],
  openGraph: {
    title: "Admission Process - Aarohi Skill Academy | Top Universities",
    description:
      "Follow our 6-step admission process to get accepted into top universities.",
    type: "website",
    url: "https://aahiriskillacademy.com/admission-process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission Process - Aarohi Skill Academy | Top Universities",
    description:
      "6-step admission process with expert guidance from initial inquiry to departure support.",
  },
};

export default function AdmissionProcessPage() {
  return <AdmissionProcess />;
}
