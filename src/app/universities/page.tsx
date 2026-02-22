import Universities from "@/src/Views/Universities/Universities";
import type { Metadata } from "next";

/**
 * All Universities Listing Page
 *
 * This page displays all universities with search and filter functionality
 * Route: /universities
 *
 * Features:
 * - Search by university name, location, and programs
 * - Filter by degree type (Bachelor's, Master's)
 * - Filter by category (Private, Public)
 * - Responsive grid layout
 */

export const metadata: Metadata = {
  title: "Universities | Aarohi Skill Academy",
  description:
    "Browse and filter universities worldwide. Search by degree type, location, and programs. Find your perfect university match.",
  keywords: [
    "universities",
    "higher education",
    "bachelor's degree",
    "master's degree",
    "study abroad",
  ],
  openGraph: {
    title: "Universities | Aarohi Skill Academy",
    description:
      "Browse and filter universities worldwide. Find your perfect university match.",
    type: "website",
  },
};

export default function AllUniversitiesDetailsPage() {
  return <Universities />;
}
