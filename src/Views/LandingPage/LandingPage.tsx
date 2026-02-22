"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../app/components/common/Header"));
const Footer = dynamic(() => import("../../app/components/common/Footer"));
const Hero = dynamic(() => import("./components/Hero"));
const Features = dynamic(() => import("./components/Features"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
const Universities = dynamic(() => import("./components/Universities"));
const StartJourney = dynamic(() => import("./components/StartJourney"));
const Process = dynamic(() => import("./components/Process"));
const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
);
const FAQ = dynamic(() => import("./components/FAQ"));
const CTA = dynamic(() => import("./components/CTA"));
const LanguageCourses = dynamic(() => import("./components/LanguageCourses"));

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Universities Section */}
        <Universities />

        {/* Mission Statement Section */}
        <StartJourney />

        {/* CTA Section */}
        <CTA />

        {/* Process Section */}
        <Process />

        {/* Language Courses Section */}
        <LanguageCourses />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
