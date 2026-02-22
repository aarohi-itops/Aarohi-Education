"use client";

import Image from "next/image";
import { ROUTES } from "@/src/constants/routes";
import { AnimatedTooltip } from "./AnimatedTooltip";

const Universities = () => {
  const universities = [
    {
      id: 1,
      name: "Ledra College",
      designation: "Private College • Nicosia, Cyprus",
      image: "/assets/LIDRA%20images/Logo-of-lidra.png",
      href: ROUTES.universityDetail(1),
    },
  ];

  return (
    <section
      id="universities"
      className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Study at{" "}
            <span className="text-primary-600">Top Cyprus Universities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from 7 leading universities offering diverse programs and
            world-class education.
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="mb-8 md:mb-16 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
            <Image
              src="/assets/landing-images/hero.webp"
              alt="Cyprus Universities"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <div className="text-center text-white mb-8">
                <h3 className="text-3xl md:text-5xl font-bold mb-3">
                  Excellence in Education
                </h3>
                <p className="text-lg md:text-xl text-gray-100">
                  World-class universities awaiting you
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl w-full">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold text-whitemb-2">
                    7
                  </p>
                  <p className="text-xs md:text-sm text-white font-medium">
                    Partner Universities
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold text-white mb-2">
                    250+
                  </p>
                  <p className="text-xs md:text-sm text-white font-medium">
                    Available Programs
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold text-white mb-2">
                    5000+
                  </p>
                  <p className="text-xs md:text-sm text-white font-medium">
                    Nepali Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Universities Animated Tooltip Section */}
        <div className="mb-8 md:mb-16">
          <div className="py-8">
            <AnimatedTooltip items={universities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
