"use client";

import { Eye, Target } from "lucide-react";

const StartJourney = () => {
  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
            Mission Statement
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Mission
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              To provide students with wide ranging global education opportunities
              through ethical counseling, professional services, and personalized
              guidance.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Vision
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              To become a leading education consultancy recognized for excellence,
              trust, and impactful guidance, empowering students to build
              successful global careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
