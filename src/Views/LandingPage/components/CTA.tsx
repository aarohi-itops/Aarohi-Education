"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const InquireFormModal = dynamic(
  () => import("@/src/app/components/modal/InquireForm"),
  { ssr: false }
);

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600"></div>

      {/* Decorative Background Elements */}
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .semi-circle {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .semi-circle:hover {
          animation: zoomIn 0.4s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Left Circle */}
        <div className="absolute -top-32 -left-32 semi-circle opacity-30">
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="140" cy="140" r="140" fill="white" />
          </svg>
        </div>

        {/* Bottom-Right Circle */}
        <div className="absolute -bottom-32 -right-32 semi-circle opacity-30">
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="140" cy="140" r="140" fill="white" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ready to Start Your Journey?
            </h2>

            {/* Description */}
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Connect with our experts today for a free consultation about your
              study options.
            </p>

            {/* Stats - Horizontal Layout */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {/* Stat 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-2a4 4 0 00-8 0v2h8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-white/80 text-sm">Students Guided</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.072A3.066 3.066 0 0116 17.335H4a3.066 3.066 0 01-3.066-3.066V6.517a3.066 3.066 0 012.812-3.062zm9.946 1.348c-.502.646-1.113.72-1.513.72-.21 0-.51-.055-.shark-.055a1.034 1.034 0 00-.704.279c-.276.244-.514.547-.676.846-.159.291-.256.622-.256.97 0 .529.18 1.013.5 1.4.32.388.768.649 1.27.7.503.05.99-.05 1.407-.35.418-.3.755-.75.96-1.27.205-.52.243-1.08.15-1.62-.092-.54-.356-1.018-.75-1.36z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-white/80 text-sm">Success Rate</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-white text-primary-600 hover:bg-white hover:shadow-2xl hover:shadow-white/30 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </button>
          </div>

          {/* Right Content - Contact Methods */}
          <div className="space-y-4">
            {/* Phone Card */}
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 group-hover:bg-white/30 transition-all">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Phone</p>
                  <p className="text-white font-semibold text-lg">
                    +977 1 4961807
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 group-hover:bg-white/30 transition-all">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Email</p>
                  <p className="text-white font-semibold text-lg">
                    info@aarohieducation.com
                  </p>
                </div>
              </div>
            </div>
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
};

export default CTA;
