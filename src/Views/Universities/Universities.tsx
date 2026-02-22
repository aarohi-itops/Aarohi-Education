/**
 * Universities Component
 *
 * Main component that exports the universities listing view
 * Shows all universities with search and filter functionality
 */

import Footer from "@/src/app/components/common/Footer";
import Header from "@/src/app/components/common/Header";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";

export default function Universities() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <MainContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
