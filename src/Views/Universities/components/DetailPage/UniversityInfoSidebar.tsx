"use client";

import InquireFormModal from "@/src/app/components/modal/InquireForm";
import Button from "@/src/app/components/ui/Button";
import { useState } from "react";
import { University } from "../../types";

interface UniversityInfoSidebarProps {
  university: University;
}

export default function UniversityInfoSidebar({
  university,
}: UniversityInfoSidebarProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="md:col-span-1 self-start">
        <div className="sticky top-32 bg-secondary-gray-50 rounded-lg p-6 space-y-6">
          {/* Key Info Cards */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold text-primary-600">
                {university.ranking}
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-secondary-gray-600 text-sm font-semibold">
                DEGREE TYPE
              </p>
              <p className="text-lg font-semibold text-secondary-gray-900">
                {university.type === "bachelors" ? "Bachelor's" : "Master's"}
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-secondary-gray-600 text-sm font-semibold">
                DURATION
              </p>
              <p className="text-lg font-semibold text-secondary-gray-900">
                {university.duration}
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-secondary-gray-600 text-sm font-semibold">
                CATEGORY
              </p>
              <p className="text-lg font-semibold text-secondary-gray-900">
                {university.category}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="primary"
            className="w-full text-base"
            onClick={() => setIsFormOpen(true)}
          >
            Apply Now
          </Button>
        </div>
      </div>
      <InquireFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}
