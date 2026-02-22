"use client";

import CTASection from "@/src/app/components/common/CTASection";
import {
  FileText,
  Globe,
  GraduationCap,
  MessageCircle,
  Plane,
  Send,
} from "lucide-react";
import { useMemo, useState } from "react";
import { processSteps } from "../data/processStepsData";

const ProcessOverview = () => {
  const steps = processSteps;
  const [activeStep, setActiveStep] = useState(0);
  const [openSections, setOpenSections] = useState<
    Record<number, { activities: boolean; deliverables: boolean }>
  >(() =>
    steps.reduce(
      (acc, _, index) => ({
        ...acc,
        [index]: { activities: index === 0, deliverables: index === 0 },
      }),
      {},
    ),
  );

  const progressPercent = useMemo(() => {
    if (steps.length <= 1) return 0;
    return Math.round((activeStep / (steps.length - 1)) * 100);
  }, [activeStep, steps.length]);

  const mobileVisibleSteps = useMemo(() => {
    const visibleCount = 3;
    return steps.slice(activeStep, activeStep + visibleCount);
  }, [activeStep, steps]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setOpenSections((prev) => ({
      ...prev,
      [index]: { activities: true, deliverables: true },
    }));
  };

  const handleNextStep = () => {
    if (activeStep >= steps.length - 1) return;
    handleStepClick(activeStep + 1);
  };

  const handlePrevStep = () => {
    if (activeStep <= 0) return;
    handleStepClick(activeStep - 1);
  };

  const toggleSection = (
    index: number,
    section: "activities" | "deliverables",
  ) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [section]: !prev[index]?.[section],
      },
    }));
  };

  const gradientClasses = [
    "from-white via-primary-100 to-primary-300",
    "from-white via-primary-200 to-primary-400",
    "from-white via-primary-300 to-primary-500",
    "from-white via-primary-400 to-primary-600",
    "from-white via-primary-500 to-primary-700",
    "from-white via-primary-600 to-primary-800",
  ];

  const stepIcons = [
    MessageCircle,
    GraduationCap,
    FileText,
    Send,
    Plane,
    Globe,
  ];

  const activeStepData = steps[activeStep];
  const ActiveIcon = stepIcons[activeStep];
  const activeGradient = gradientClasses[activeStep % gradientClasses.length];

  return (
    <section className="relative overflow-hidden bg-white py-10 pb-28 md:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-32 h-48 bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Your Journey Starts Here
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Your Journey to{" "}
            <span className="text-primary-600">Studying Abroad</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Track every milestone of the admission process. Jump to any step,
            stay confident in your progress, and dive into details only when you
            need them.
          </p>
        </div>

        <div className="relative rounded-3xl border border-neutral-200 bg-white/80 p-6 md:p-10 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="font-semibold uppercase tracking-[0.18em] text-primary-600">
                    Journey Map
                  </span>
                  <span className="h-1 w-1 rounded-full bg-primary-500" />
                  <span>{steps.length} Total Steps</span>
                </div>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-6 right-6 top-8 h-1 rounded-full bg-neutral-200" />
                <div
                  className="hidden md:block absolute left-6 top-8 h-1 rounded-full bg-primary-500 transition-all duration-1000"
                  style={{ width: `${progressPercent}%` }}
                />
                <div className="md:hidden absolute left-7 top-4 bottom-4 w-1 rounded-full bg-neutral-200" />
                <div
                  className="md:hidden absolute left-7 top-4 w-1 rounded-full bg-primary-500 transition-all duration-1000"
                  style={{ height: `${progressPercent}%` }}
                />

                <div className="hidden md:grid gap-4 md:grid-cols-6 md:gap-4">
                  {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    const isCompleted = index < activeStep;

                    const Icon = stepIcons[index];

                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => handleStepClick(index)}
                        className="relative z-10 flex w-full items-start gap-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none md:hover:translate-y-0 md:flex-col md:items-center md:gap-3"
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 md:h-14 md:w-14 ${
                            isCompleted
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : isActive
                                ? "border-primary-500 bg-primary-500 text-white animate-pulse"
                                : "border-neutral-300 bg-white text-neutral-500"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="md:text-center">
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                            Step {step.number}
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              isActive ? "text-neutral-900" : "text-neutral-600"
                            }`}
                          >
                            {step.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="grid gap-3 md:hidden">
                  {mobileVisibleSteps.map((step, localIndex) => {
                    const index = activeStep + localIndex;
                    const isActive = index === activeStep;
                    const isCompleted = index < activeStep;
                    const Icon = stepIcons[index];

                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => handleStepClick(index)}
                        className={`relative z-10 flex w-full items-start gap-4 rounded-2xl border px-4 py-3 text-left shadow-sm transition-all duration-300 ${
                          isActive
                            ? "border-primary-200 bg-primary-50"
                            : "border-neutral-200 bg-white"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ${
                            isCompleted
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : isActive
                                ? "border-primary-500 bg-primary-500 text-white"
                                : "border-neutral-300 bg-white text-neutral-500"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                            Step {step.number}
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              isActive ? "text-neutral-900" : "text-neutral-600"
                            }`}
                          >
                            {step.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.4)] transition-all duration-500 md:min-h-[70vh] ring-1 ring-primary-200">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`relative flex items-center justify-center p-8 md:w-[30%] md:items-start md:justify-start md:rounded-l-3xl md:p-10 bg-linear-to-br ${
                      activeGradient
                    } text-gray-600`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_55%)]" />
                    <div className="relative z-10">
                      <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
                        Step
                      </p>
                      <p className="text-5xl md:text-6xl font-bold leading-none">
                        {activeStepData.number}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-3xl">
                        <span className="rounded-full bg-white/15 p-3">
                          <ActiveIcon className="h-9 w-9" />
                        </span>
                        <span className="text-base font-semibold text-gray-600">
                          {activeStepData.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-8 md:w-[70%] md:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                          {activeStepData.title}
                        </h3>
                        <p className="mt-2 text-neutral-600 text-base md:text-lg">
                          {activeStepData.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                        <span className="h-2 w-2 rounded-full bg-primary-500" />
                        {activeStepData.fullDetails.duration}
                      </span>
                    </div>

                    <div className="mt-6 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-5">
                      <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                        {activeStepData.fullDetails.overview}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-2xl border border-neutral-100 bg-white p-5">
                        <button
                          type="button"
                          onClick={() =>
                            toggleSection(activeStep, "activities")
                          }
                          className="flex w-full items-center justify-between text-left"
                        >
                          <div>
                            <p className="text-base font-bold text-neutral-900">
                              Key Activities
                            </p>
                            <p className="text-sm text-neutral-500">
                              {activeStepData.fullDetails.keyActivities.length}{" "}
                              actions
                            </p>
                          </div>
                          <span
                            className={`text-sm font-semibold text-primary-600 transition-transform duration-300 ${
                              openSections[activeStep]?.activities
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        <div
                          className={`grid gap-3 overflow-hidden transition-all duration-500 ${
                            openSections[activeStep]?.activities
                              ? "mt-4 max-h-[600px]"
                              : "max-h-0"
                          }`}
                        >
                          {activeStepData.fullDetails.keyActivities.map(
                            (activity, actIndex) => (
                              <div
                                key={actIndex}
                                className="flex items-start gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm md:text-base"
                              >
                                <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                                <span className="text-neutral-700">
                                  {activity}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-neutral-100 bg-white p-5">
                        <button
                          type="button"
                          onClick={() =>
                            toggleSection(activeStep, "deliverables")
                          }
                          className="flex w-full items-center justify-between text-left"
                        >
                          <div>
                            <p className="text-base font-bold text-neutral-900">
                              Deliverables
                            </p>
                            <p className="text-sm text-neutral-500">
                              {activeStepData.fullDetails.deliverables.length}{" "}
                              outcomes
                            </p>
                          </div>
                          <span
                            className={`text-sm font-semibold text-primary-600 transition-transform duration-300 ${
                              openSections[activeStep]?.deliverables
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        <div
                          className={`grid gap-3 overflow-hidden transition-all duration-500 ${
                            openSections[activeStep]?.deliverables
                              ? "mt-4 max-h-[600px]"
                              : "max-h-0"
                          }`}
                        >
                          {activeStepData.fullDetails.deliverables.map(
                            (deliverable, delIndex) => (
                              <div
                                key={delIndex}
                                className="flex items-start gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm md:text-base"
                              >
                                <span className="mt-1 text-emerald-500">✓</span>
                                <span className="text-neutral-700">
                                  {deliverable}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        aria-label="Next step"
                        className="hidden md:inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200"
                      >
                        Next step →
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStepClick(activeStep)}
                        className="text-sm font-semibold text-neutral-500 hover:text-neutral-700"
                      >
                        Step {activeStepData.number}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-4">
          {activeStep > 0 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-600 shadow-lg shadow-neutral-200 transition-all duration-300 active:scale-95"
              aria-label="Previous step"
            >
              ←
            </button>
          )}
          <div className="flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white/90 px-3 py-3 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.6)] backdrop-blur">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Jump to step
            </div>
            <div className="mt-2 overflow-hidden">
              <div
                className="flex items-center gap-2 transition-transform duration-500"
                style={{ transform: `translateX(-${activeStep * 156}px)` }}
              >
                {steps.map((step, index) => {
                  const Icon = stepIcons[index];
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => handleStepClick(index)}
                      className={`flex min-w-[148px] items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-primary-400 bg-primary-50 text-primary-700"
                          : "border-neutral-200 bg-white text-neutral-600"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-primary-500 bg-primary-500 text-white"
                            : "border-neutral-300 bg-white text-neutral-500"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>Step {step.number}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {activeStep < steps.length - 1 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-200 transition-all duration-300 active:scale-95"
              aria-label="Next step"
            >
              →
            </button>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </section>
  );
};

export default ProcessOverview;
