"use client";

import { useState } from "react";

const InitialInquiry = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What courses are available and eligibility criteria?",
      answer:
        "We offer partnerships with 7 Cyprus universities providing 250+ programs across Engineering, Business, Medicine, Computer Science, and more. Eligibility typically requires 12th grade completion with minimum GPA.",
    },
    {
      question: "What is the duration of the course?",
      answer:
        "Undergraduate programs typically last 4 years, while Master's programs are 2 years. Some specialized programs may vary in duration.",
    },
    {
      question: "What is the total fee structure and additional expenses?",
      answer:
        "Annual tuition ranges from €3,000-€15,000 depending on program. Living expenses are approximately €500-800/month. Scholarships and financial aid are available.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include: academic transcripts, 12th pass certificate, valid passport, recommendation letters, statement of purpose, and proof of English proficiency.",
    },
    {
      question: "Is accommodation provided or what are living options?",
      answer:
        "University hostels (€200-300/month), private apartments (€400-700/month), shared flats, and homestays are available options.",
    },
    {
      question: "What is the student visa process and requirements?",
      answer:
        "Visa processing typically takes 4-8 weeks. Required documents include university acceptance letter, financial proof, and medical examination. We provide complete guidance.",
    },
    {
      question:
        "Are there internship or placement opportunities after the course?",
      answer:
        "Yes, Cyprus universities have strong internship programs and industry connections. Career services support job placements in Cyprus and internationally.",
    },
    {
      question: "Are students allowed to work part-time during studies?",
      answer:
        "Yes, international students can work up to 20 hours/week during academic sessions and full-time during holidays.",
    },
    {
      question: "What are the work hours or restrictions while studying?",
      answer:
        "Maximum 20 hours/week during academic period. Full-time work is allowed during scheduled holidays and summer breaks.",
    },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-28 bg-secondary-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Step 1: Initial{" "}
            <span className="text-primary-600">Inquiry & Counseling</span>
          </h2>
          <p className="text-xl text-secondary-gray-700 max-w-2xl mx-auto">
            Get expert guidance through your first consultation
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-secondary-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-all duration-300 bg-white"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-secondary-gray-50 transition-colors text-left"
                >
                  <h4 className="text-base md:text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h4>
                  <svg
                    className={`w-6 h-6 text-primary-600 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {openFAQ === index && (
                  <div className="px-6 md:px-8 py-5 md:py-6 bg-secondary-gray-50 border-t border-secondary-gray-200">
                    <p className="text-secondary-gray-700 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 border border-primary-200">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-secondary-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our expert counselors and start
              your admission journey today.
            </p>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialInquiry;
