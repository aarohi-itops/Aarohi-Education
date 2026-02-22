"use client";

import Button from "@/src/app/components/ui/Button";
import { ROUTES } from "@/src/constants/routes";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicBackgroundPaths = dynamic(
  () =>
    import("@/src/app/components/ui/BackGroundPath").then(
      (mod) => mod.BackgroundPaths,
    ),
  { ssr: true },
);

const Hero = () => {
  return (
    <DynamicBackgroundPaths
      title="Connecting Students to the World"
      subtitle="Aarohi Education connects ambitious Nepali students with world-class education"
      description="Get expert guidance through every step of your admission journey. Join 500+ successful students."
      showButton={false}
      minHeight="min-h-[50vh] md:min-h-[90vh]"
      paddingY="pt-12 pb-0 md:pt-20 md:pb-0"
      alignItems="items-start sm:items-center"
    >
      {/* Stats */}
      <div className="mt-8 md:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto px-4">
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">
            500+
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            Students Enrolled
          </p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">
            7
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            Partner Universities
          </p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">
            98%
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">Success Rate</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4">
        <Link href={ROUTES.universities}>
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Start Your Journey
          </Button>
        </Link>
        <Link href={ROUTES.aboutUs}>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
      </div>
    </DynamicBackgroundPaths>
  );
};

export default Hero;
