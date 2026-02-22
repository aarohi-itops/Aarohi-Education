"use client";

import Button from "@/src/app/components/ui/Button";
import { ROUTES } from "@/src/constants/routes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const InquireFormModal = dynamic(
  () => import("@/src/app/components/modal/InquireForm"),
  { ssr: false }
);

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Need Help Choosing?
        </h2>
        <p className="text-lg text-white mb-8">
          Our education experts are here to guide you through the selection
          process
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white hover:bg-gray-100 font-bold"
          >
            Schedule Consultation
          </Button>
          <Link href={ROUTES.aboutUs} className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              className="w-full bg-primary-50 text-black hover:bg-slate-200 font-bold"
            >
              Contact Us
            </Button>
          </Link>
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
