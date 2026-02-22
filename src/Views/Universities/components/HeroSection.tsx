"use client";

import dynamic from "next/dynamic";

const DynamicBackgroundPaths = dynamic(
  () =>
    import("@/src/app/components/ui/BackGroundPath").then(
      (mod) => mod.BackgroundPaths,
    ),
  { ssr: true },
);

export default function HeroSection() {
  return (
    <DynamicBackgroundPaths
      title="Explore Universities in Cyprus"
      subtitle="Discover top-tier educational institutions"
      description="Discover top-tier educational institutions offering world-class programs for both undergraduate and graduate studies"
      showButton={false}
      minHeight="min-h-[40vh] md:min-h-[75vh]"
      paddingY="pt-8 pb-0 md:pt-20 md:pb-0"
      alignItems="items-start sm:items-center"
    />
  );
}
