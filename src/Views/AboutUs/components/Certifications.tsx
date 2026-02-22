"use client";

import { Award, CheckCircle, Shield, Trophy } from "lucide-react";
import CTASection from "@/src/app/components/common/CTASection";

interface Certification {
  title: string;
  issuer: string;
  year: number;
  icon?: any;
  color?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      year: 2023,
      icon: Shield,
      color: "from-primary-600 to-primary-400",
    },
    {
      title: "NABET Accreditation",
      issuer: "National Association of Board Education and Training",
      year: 2022,
      icon: CheckCircle,
      color: "from-orange-600 to-orange-400",
    },
    {
      title: "Best Education Services",
      issuer: "National Education Council",
      year: 2022,
      icon: Award,
      color: "from-orange-500 to-orange-300",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Recognition & Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Certifications &{" "}
            <span className="text-primary-600">Recognitions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Our commitment to quality education guidance has been recognized by
            leading organizations
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon || Award;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-transparent hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {cert.issuer}
                </p>

                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                  <span className="text-primary-600 font-bold text-sm">
                    {cert.year}
                  </span>
                </div>

                {/* Decorative gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Trusted by Thousands"
        description="Join thousands of students who have successfully achieved their educational dreams with our certified counseling services"
        buttonText="Start Your Journey Today"
        showStats={true}
      />
    </section>
  );
}
