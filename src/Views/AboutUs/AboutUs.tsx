"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../app/components/common/Header"));
const Footer = dynamic(() => import("../../app/components/common/Footer"));
const Certifications = dynamic(() => import("./components/Certifications"));
const CompanyIntroduction = dynamic(
  () => import("./components/CompanyIntroduction")
);
const OfficeInformation = dynamic(
  () => import("./components/OfficeInformation")
);
const StudentCounsellingApproach = dynamic(
  () => import("./components/StudentCounsellingApproach")
);
const Chairman = dynamic(() => import("./components/Chairman"));

const WhyChooseAarohi = dynamic(() => import("./components/WhyChooseAarohi"));
const TeamStructure = dynamic(() => import("./components/TeamStructure"));

export default function AboutUs() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <CompanyIntroduction />
        <Chairman />
        <TeamStructure />
        <WhyChooseAarohi />
        <StudentCounsellingApproach />
        <OfficeInformation />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
