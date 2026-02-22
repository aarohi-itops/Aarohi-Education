import AboutUs from "@/src/Views/AboutUs/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Aarohi Education - Student Counseling & University Guidance",
  description:
    "Learn about Aarohi Education's mission, team, and approach to student counseling. Discover why we're the trusted partner for university admissions guidance in Cyprus.",
  keywords:
    "Aarohi Education, student counseling, university guidance, Cyprus universities, education services",
  openGraph: {
    title: "About Aarohi Education",
    description:
      "Empowering students to achieve their dreams through quality education and guidance",
    url: "https://aarohi-education.com/about-us",
    type: "website",
    images: [
      {
        url: "https://aarohi-education.com/images/about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aarohi Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aarohi Education",
    description: "Discover our mission and approach to student counseling",
    images: ["https://aarohi-education.com/images/about-us-og.jpg"],
  },
  robots: "index, follow",
  authors: [{ name: "Aarohi Education" }],
  creator: "Aarohi Education",
  publisher: "Aarohi Education",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
