"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../app/components/common/Header"));
const Footer = dynamic(() => import("../../app/components/common/Footer"));
const AdmissionHeroSection = dynamic(
  () => import("./components/AdmissionHeroSection"),
);
const ProcessOverview = dynamic(() => import("./components/ProcessOverview"));

const AdmissionProcess = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section */}
        <AdmissionHeroSection />

        {/* Process Overview - 6 Steps */}
        <ProcessOverview />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdmissionProcess;
