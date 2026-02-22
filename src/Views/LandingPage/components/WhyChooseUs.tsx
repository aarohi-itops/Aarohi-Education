"use client";

import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const services = [
    "Personalized counseling to identify the right country, program, and institution",
    "Language preparation support to meet European study requirements",
    "Step-by-step assistance with admissions and documentation",
    "Visa application guidance and interview preparation",
    "Scholarship guidance and financial planning support",
    "Pre-departure and post-arrival assistance, including accommodation guidance",
  ];

  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
                About Preview
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 ">
                Why Choose Aarohi Education Consultancy?
              </h2>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                For Nepalese students aspiring to study in Europe, Aarohi Education
                Consultancy offers a trusted partner to navigate every step of the
                journey. We understand the unique challenges students face, from
                program selection and language requirements to visa documentation and
                cultural adjustment.
              </p>
              <p>
                Our experienced counselors provide end-to-end guidance designed to
                remove confusion and reduce stress. We support students aiming for
                popular European destinations with tailored counseling and
                preparation aligned with European academic standards.
              </p>
              <p>
                Our approach is practical, student-focused, and results-driven,
                helping you move forward with clarity and confidence.
              </p>
            </div>
            <div>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-lg shadow-primary-200/50 hover:bg-primary-700 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Our Key Services Include
              </h3>
              <div className="hidden sm:flex items-center gap-2 text-primary-600 font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                Student-first
              </div>
            </div>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-600" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
