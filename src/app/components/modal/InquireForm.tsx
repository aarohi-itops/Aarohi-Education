"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface InquireFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquireFormModal({
  isOpen,
  onClose,
}: InquireFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    educationQualification: "",
    englishTest: "",
    testScore: "",
    wantToJoinTest: false,
    phoneNumber: "",
    universityPreference: "",
    coursePreference: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send inquiry email
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.details ||
            responseData.error ||
            "Failed to send inquiry",
        );
      }

      // Show success message
      setShowSuccess(true);

      // Reset form and close modal after delay
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          dob: "",
          educationQualification: "",
          englishTest: "",
          testScore: "",
          wantToJoinTest: false,
          phoneNumber: "",
          universityPreference: "",
          coursePreference: "",
        });
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send inquiry. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass Container */}
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/10 border border-white/20 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 border-b border-gray-200/50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/Illustrations/form.svg"
                        alt="Form"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                      <h2 className="text-2xl font-light text-gray-900">
                        Student Inquiry
                      </h2>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100/50 transition-colors group"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Form Content */}
                <div className="relative overflow-y-auto max-h-[70vh] px-8 py-6">
                  {showSuccess ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6"
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">
                        Submission Successful
                      </h3>
                      <p className="text-sm text-gray-500">
                        We&apos;ll contact you shortly
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Grid Layout - Row 1 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label className="block text-xs font-medium text-gray-500 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("fullName")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                            placeholder="Enter your full name"
                          />
                          {focusedField === "fullName" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>

                        {/* Email Address */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <label className="block text-xs font-medium text-gray-500 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                            placeholder="Enter your email"
                          />
                          {focusedField === "email" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Grid Layout - Row 1.5 (Date of Birth) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Date of Birth */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 5 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="block text-xs font-medium text-gray-500 mb-2">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("dob")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                          />
                          {focusedField === "dob" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Grid Layout - Row 2 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Education Qualification */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="block text-xs font-medium text-gray-500 mb-2">
                            Education Qualification
                          </label>
                          <select
                            name="educationQualification"
                            value={formData.educationQualification}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("education")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select qualification</option>
                            <option value="10th">10th Grade</option>
                            <option value="12th">12th Grade / +2</option>
                            <option value="bachelors">
                              Bachelor&apos;s Degree
                            </option>
                            <option value="masters">
                              Master&apos;s Degree
                            </option>
                            <option value="other">Other</option>
                          </select>
                          {focusedField === "education" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>

                        {/* Phone Number */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="block text-xs font-medium text-gray-500 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            required
                            pattern="[0-9]{10}"
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                            placeholder="10-digit number"
                          />
                          {focusedField === "phone" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* IELTS / PTE - Full Width */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <label className="block text-xs font-medium text-gray-500 mb-2">
                          IELTS / PTE Status
                        </label>
                        <select
                          name="englishTest"
                          value={formData.englishTest}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("english")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select status</option>
                          <option value="completed">Completed</option>
                          <option value="not-done">Not Done</option>
                        </select>
                        {focusedField === "english" && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                          />
                        )}
                      </motion.div>

                      {/* Conditional Score Field */}
                      <AnimatePresence>
                        {formData.englishTest === "completed" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="block text-xs font-medium text-gray-500 mb-2">
                              Test Score
                            </label>
                            <input
                              type="text"
                              name="testScore"
                              value={formData.testScore}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("testScore")}
                              onBlur={() => setFocusedField(null)}
                              required={formData.englishTest === "completed"}
                              className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                              placeholder="e.g., 7.0 or 65"
                            />
                            {focusedField === "testScore" && (
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                              />
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Conditional Checkbox */}
                      <AnimatePresence>
                        {formData.englishTest === "not-done" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-200/30 cursor-pointer group hover:bg-orange-50 transition-colors">
                              <input
                                type="checkbox"
                                name="wantToJoinTest"
                                checked={formData.wantToJoinTest}
                                onChange={handleChange}
                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-2 focus:ring-orange-400/50 cursor-pointer"
                              />
                              <span className="text-sm text-gray-700">
                                Join IELTS / PTE preparation program
                              </span>
                            </label>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Grid Layout - Row 3 (Optional Fields) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* University Preference */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label className="block text-xs font-medium text-gray-400 mb-2">
                            University Preference{" "}
                            <span className="text-gray-300">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="universityPreference"
                            value={formData.universityPreference}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("university")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                            placeholder="Preferred university"
                          />
                          {focusedField === "university" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>

                        {/* Course Preference */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.45 }}
                        >
                          <label className="block text-xs font-medium text-gray-400 mb-2">
                            Course Preference{" "}
                            <span className="text-gray-300">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="coursePreference"
                            value={formData.coursePreference}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("course")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-white/50 border border-gray-200/50 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/80 transition-all"
                            placeholder="Preferred courses"
                          />
                          {focusedField === "course" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mt-1 rounded-full"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pt-4"
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 flex items-center justify-center gap-2 group"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing
                            </>
                          ) : (
                            <>
                              Submit Inquiry
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
