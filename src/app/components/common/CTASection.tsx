"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const InquireFormModal = dynamic(
  () => import("@/src/app/components/modal/InquireForm"),
  { ssr: false }
);

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  showStats?: boolean;
  showModal?: boolean;
}

export default function CTASection({
  title = "Ready to Begin Your Journey?",
  description = "Our expert counselors are here to guide you through every step of the admission process.",
  buttonText = "Schedule Free Consultation",
  buttonLink,
  onButtonClick,
  showStats = false,
  showModal = true,
}: CTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (showModal) {
      setIsModalOpen(true);
    } else if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Semi-circle Top Left */}
          <div className="absolute top-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>

          {/* Semi-circle Bottom Right */}
          <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
              {title}
            </h3>
            <p className="text-white/90 text-base sm:text-lg md:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto px-2 leading-relaxed">
              {description}
            </p>
            <button
              onClick={handleClick}
              className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-primary-600 rounded-full font-bold text-base sm:text-lg hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:scale-105 active:scale-95 inline-block overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                {buttonText}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            {showStats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-1 sm:mb-2">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    Students Guided
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-1 sm:mb-2">
                    7+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    University Partners
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-1 sm:mb-2">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    Success Rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-1 sm:mb-2">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    Years Experience
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inquire Form Modal */}
      <InquireFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
