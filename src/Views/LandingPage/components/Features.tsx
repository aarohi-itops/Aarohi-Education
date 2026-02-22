"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Expert Guidance",
      description:
        "Get personalized counseling from education experts with 10+ years of experience.",
    },
    {
      title: "Streamlined Process",
      description:
        "Simplify document collection and application process with our comprehensive checklist.",
    },
    {
      title: "Partner Universities",
      description:
        "Access 7 top-ranked Cyprus universities with various programs and specializations.",
    },
    {
      title: "Scholarship Support",
      description:
        "Guidance on scholarships and financial aid to make education affordable.",
    },
    {
      title: "Global Network",
      description:
        "Connect with thousands of Nepali students studying abroad and build lasting relationships.",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any questions or concerns during your journey.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Features That Make{" "}
            <span className="text-primary-600">The Difference</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive support at every step of your educational journey to
            Cyprus.
          </p>
        </div>

        {/* Image and Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/Illustrations/Student.png"
                alt="Features That Make The Difference"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -left-8 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -z-10 top-8 -right-8 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 lg:h-[500px] flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2 sm:gap-3 items-start">
                  {/* Green Check Icon */}
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5 sm:mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
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
};

export default Features;
