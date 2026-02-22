"use client";

import {
  ClipboardCheck,
  FileText,
  Globe,
  GraduationCap,
  Plane,
  Send,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "Evaluate your academic profile and career goals with our expert counselors.",
      icon: ClipboardCheck,
      color: "primary",
    },
    {
      number: "02",
      title: "University Selection",
      description:
        "Choose from our partner universities based on your interests and requirements.",
      icon: GraduationCap,
      color: "orange",
    },
    {
      number: "03",
      title: "Document Preparation",
      description:
        "We guide you through collecting all necessary documents with checklist support.",
      icon: FileText,
      color: "primary",
    },
    {
      number: "04",
      title: "Application Submission",
      description:
        "Submit your applications directly to universities with our assistance.",
      icon: Send,
      color: "orange",
    },
    {
      number: "05",
      title: "Visa Processing",
      description:
        "Get comprehensive support for visa application and interview preparation.",
      icon: Plane,
      color: "primary",
    },
    {
      number: "06",
      title: "Departure & Support",
      description:
        "Complete your journey with ongoing support for accommodation and settling.",
      icon: Globe,
      color: "orange",
    },
  ];

  return (
    <section
      id="process"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your <span className="text-primary-600">Admission Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, streamlined process from initial consultation to successful
            admission.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isPrimary = step.color === "primary";

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      isPrimary
                        ? "bg-gradient-to-br from-primary-500 to-primary-600"
                        : "bg-gradient-to-br from-orange-500 to-orange-600"
                    } flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-4 rounded-xl ${
                      isPrimary
                        ? "bg-gradient-to-br from-primary-50 to-primary-100"
                        : "bg-gradient-to-br from-orange-50 to-orange-100"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        isPrimary ? "text-primary-600" : "text-orange-600"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 transition-colors ${
                    isPrimary
                      ? "text-gray-900 group-hover:text-primary-600"
                      : "text-gray-900 group-hover:text-orange-600"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    isPrimary
                      ? "bg-gradient-to-br from-primary-500 to-primary-600"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  } opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
