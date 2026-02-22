"use client";

import dynamic from "next/dynamic";

const DynamicBackgroundPaths = dynamic(
  () =>
    import("@/src/app/components/ui/BackGroundPath").then(
      (mod) => mod.BackgroundPaths
    ),
  { ssr: true }
);

const AdmissionHeroSection = () => {
  return (
    <DynamicBackgroundPaths
      title="Your Admission Journey"
      subtitle="Follow our streamlined 6-step process"
      description="Get admitted to top Cyprus universities with expert guidance at every step."
      buttonText="Start Your Journey"
      minHeight="min-h-[30vh] md:min-h-[65vh]"
      paddingY="pt-8 pb-0 md:pt-20 md:pb-0"
      alignItems="items-start sm:items-center"
    />
  );
};

export default AdmissionHeroSection;
