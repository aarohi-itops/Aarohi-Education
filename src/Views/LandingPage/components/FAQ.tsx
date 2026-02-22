"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is the eligibility criteria for Cyprus universities?",
      answer:
        "Generally, students need to have completed their 12th grade (NEB certification) with a minimum GPA. Some universities may have specific subject requirements depending on the program. Our counselors can help you determine eligibility for each university.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      question: "How much does it cost to study in Cyprus?",
      answer:
        "Tuition fees vary by university and program, typically ranging from $3,000 to $15,000 per year. Living expenses are approximately $500-800 per month. Many universities offer scholarships to international students.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      question: "What is the visa process for Cyprus?",
      answer:
        "The process involves university acceptance, document preparation, visa application at the Cyprus embassy in Kathmandu, and approval. It typically takes 4-8 weeks. Our team provides complete guidance throughout this process.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      question: "Can I work while studying in Cyprus?",
      answer:
        "Yes, international students in Cyprus are allowed to work up to 20 hours per week during academic sessions and full-time during holidays. This helps support living expenses.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      question: "What support does Aarohi Education provide?",
      answer:
        "We provide complete support including university selection, document preparation, visa guidance, accommodation assistance, and pre-departure orientation. We also offer post-arrival support for settling in.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      question: "How do I get admission in my desired university?",
      answer:
        "Contact us for a free consultation. We assess your profile, recommend suitable universities and programs, help prepare documents, and submit applications directly to the universities on your behalf.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, most Cyprus universities offer merit-based and need-based scholarships. We provide guidance on available scholarships and help you apply for them.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
    },
    {
      question: "What is the duration of programs in Cyprus?",
      answer:
        "Most undergraduate programs are 4 years, while master programs are typically 2 years. Some programs may have different durations depending on the university and field of study.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-8 md:py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Frequently Asked{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-gray-600 max-w-2xl mx-auto px-4">
            Find answers to common questions about studying in Cyprus.
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#contact"
              className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2"
            >
              Contact us
            </a>
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${
                  openIndex === index
                    ? "border-primary-400 shadow-lg shadow-primary-100"
                    : "border-transparent hover:border-primary-100"
                }`}
              >
                {/* Gradient Accent Bar */}
                {openIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 rounded-t-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-4 text-left group-hover:bg-gradient-to-r group-hover:from-primary-50/50 group-hover:to-transparent transition-all duration-300 rounded-2xl"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg text-white"
                        : "bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 group-hover:from-primary-200 group-hover:to-accent-200"
                    }`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Question */}
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index
                          ? "text-primary-700"
                          : "text-secondary-gray-900 group-hover:text-primary-600"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 pt-0.5 sm:pt-1"
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 font-bold text-lg ${
                        openIndex === index
                          ? "bg-primary-600 text-white"
                          : "bg-primary-100 text-primary-600 group-hover:bg-primary-200"
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-12 sm:pl-[88px]">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="relative"
                        >
                          {/* Decorative Line */}
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-400 via-primary-300 to-transparent rounded-full" />

                          <p className="text-secondary-gray-700 leading-relaxed text-sm sm:text-base md:text-lg pl-4 sm:pl-6">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
