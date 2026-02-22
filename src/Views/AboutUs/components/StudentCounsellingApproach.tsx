"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function StudentCounsellingApproach() {
  const approaches = [
    {
      title: "Assessment & Understanding",
      description:
        "We begin by understanding your academic background, interests, strengths, and career aspirations",
    },
    {
      title: "Personalized Planning",
      description:
        "Create a customized roadmap tailored to your specific goals and requirements",
    },
    {
      title: "University Selection",
      description:
        "Identify suitable universities and programs that match your profile and ambitions",
    },
    {
      title: "Application Support",
      description:
        "Comprehensive assistance with applications, essays, and interview preparation",
    },
    {
      title: "Ongoing Mentorship",
      description:
        "Continuous support throughout your academic journey and beyond",
    },
    {
      title: "Success Tracking",
      description:
        "Monitor your progress and celebrate milestones as you achieve your educational goals",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Our Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4 px-4">
            Our Approach to{" "}
            <span className="text-primary-600">Student Counselling</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto px-4">
            A comprehensive, personalized approach to guide you toward academic
            success
          </p>
        </div>

        {/* Image and Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/Illustrations/Councel.png"
                alt="Student Counselling Approach"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -left-8 w-48 h-48 sm:w-72 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 top-8 -right-8 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -z-10 bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 lg:h-[500px] flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex gap-2 sm:gap-3 items-start">
                  {/* Orange Check Icon */}
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 flex items-center justify-center">
                      <Check
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-0.5 sm:mb-1">
                      {approach.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
