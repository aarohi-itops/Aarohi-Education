import { University } from "../../types";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import ProgramsSection from "./ProgramsSection";
import RequirementsSection from "./RequirementsSection";
import UniversityInfoSidebar from "./UniversityInfoSidebar";

interface UniversityContentProps {
  university: University;
}

export default function UniversityContent({
  university,
}: UniversityContentProps) {
  return (
    <main className="grow">
      {/* Hero Section */}
      <HeroSection university={university} />

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <OverviewSection university={university} />
              <ProgramsSection university={university} />
              <RequirementsSection university={university} />
            </div>

            {/* Sidebar */}
            <UniversityInfoSidebar university={university} />
          </div>
        </div>
      </section>

      <GallerySection university={university} />
    </main>
  );
}
