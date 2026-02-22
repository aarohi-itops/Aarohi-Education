import Footer from "@/src/app/components/common/Footer";
import Header from "@/src/app/components/common/Header";
import type { Metadata } from "next";
import universitiesData from "../../data/universities.json";
import { University } from "../../types";
import UniversityContent from "./UniversityContent";
import UniversityNotFound from "./UniversityNotFound";

/**
 * Individual University Detail Page
 *
 * This page displays detailed information about a specific university
 * Route: /universities/[id]
 * Example: /universities/1
 *
 * Features:
 * - Dynamic page generation for each university
 * - Rich metadata for SEO
 * - University information (ranking, programs, duration)
 * - Beautiful detail layout with modular components
 * - Static generation for performance
 */

interface UniversityDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return (universitiesData as University[]).map((uni) => ({
    id: uni.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: UniversityDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const university = (universitiesData as University[]).find(
    (uni) => uni.id === parseInt(id)
  );

  if (!university) {
    return {
      title: "University Not Found | Aarohi Skill Academy",
      description: "The university you are looking for does not exist.",
    };
  }

  return {
    title: `${university.name} | Aarohi Skill Academy`,
    description: university.description,
    keywords: [
      university.name,
      university.location,
      university.category,
      university.type === "bachelors" ? "Bachelor's degree" : "Master's degree",
      ...university.programs,
    ],
    openGraph: {
      title: university.name,
      description: university.description,
      type: "website",
      images: [
        {
          url: university.image,
          width: 1200,
          height: 630,
          alt: university.name,
        },
      ],
    },
  };
}

export default async function UniversityDetailPage({
  params,
}: UniversityDetailPageProps) {
  const { id } = await params;
  const university = (universitiesData as University[]).find(
    (uni) => uni.id === parseInt(id)
  );

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <UniversityNotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <UniversityContent university={university} />
      <Footer />
    </div>
  );
}
