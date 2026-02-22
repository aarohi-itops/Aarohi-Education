"use client";
import dynamic from "next/dynamic";

const DynamicBackgroundPaths = dynamic(
  () =>
    import("@/src/app/components/ui/BackGroundPath").then(
      (mod) => mod.BackgroundPaths,
    ),
  { ssr: true },
);

export default function CompanyIntroduction() {
  return (
    <DynamicBackgroundPaths
      title="About Aarohi"
      subtitle="Empowering students to achieve their dreams"
      description="Aarohi Education is dedicated to providing comprehensive educational guidance and counseling services to students aspiring to pursue higher education at international universities."
      showButton={false}
      minHeight="min-h-[40vh] md:min-h-[80vh]"
      paddingY="pt-12 pb-0 md:pt-20 md:pb-0"
      alignItems="items-start sm:items-center"
    />
  );
}
