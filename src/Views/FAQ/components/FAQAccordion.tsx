"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQItem } from "../data/faqData";

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-16 md:py-20">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-lg text-gray-600 font-medium">
          No FAQs found. Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-5">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${
              openIndex === item.id
                ? "border-primary-400 shadow-lg shadow-primary-100"
                : "border-transparent hover:border-primary-100"
            }`}
          >
            {/* Gradient Accent Bar */}
            {openIndex === item.id && (
              <motion.div
                layoutId={`activeIndicator-${item.id}`}
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 rounded-t-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            <button
              onClick={() =>
                setOpenIndex(openIndex === item.id ? null : item.id)
              }
              className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start gap-3 sm:gap-4 text-left group-hover:bg-gradient-to-r group-hover:from-primary-50/50 group-hover:to-transparent transition-all duration-300 rounded-2xl"
            >
              {/* Icon - Category based */}
              <motion.div
                animate={{
                  scale: openIndex === item.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-all duration-300 text-lg sm:text-xl ${
                  openIndex === item.id
                    ? "bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg text-white"
                    : "bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 group-hover:from-primary-200 group-hover:to-accent-200"
                }`}
              >
                {item.category === "admission"}
                {item.category === "costs"}
                {item.category === "visa"}
                {item.category === "work"}
                {item.category === "support"}
                {item.category === "programs"}
              </motion.div>

              {/* Question */}
              <div className="flex-1 pt-0.5 sm:pt-1">
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${
                    openIndex === item.id
                      ? "text-primary-700"
                      : "text-secondary-gray-900 group-hover:text-primary-600"
                  }`}
                >
                  {item.question}
                </h3>
              </div>

              {/* Toggle Icon - Plus/Minus */}
              <motion.div
                animate={{ rotate: openIndex === item.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 pt-0.5 sm:pt-1"
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 font-bold text-lg ${
                    openIndex === item.id
                      ? "bg-primary-600 text-white"
                      : "bg-primary-100 text-primary-600 group-hover:bg-primary-200"
                  }`}
                >
                  {openIndex === item.id ? "−" : "+"}
                </div>
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pl-12 sm:pl-16 md:pl-20">
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="relative"
                    >
                      {/* Decorative Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-400 via-primary-300 to-transparent rounded-full" />

                      <p className="text-secondary-gray-700 leading-relaxed text-sm sm:text-base md:text-lg pl-3 sm:pl-4 md:pl-6">
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
  );
};

export default FAQAccordion;
