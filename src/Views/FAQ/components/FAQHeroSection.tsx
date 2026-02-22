"use client";

import dynamic from "next/dynamic";

const DynamicBackgroundPaths = dynamic(
  () =>
    import("@/src/app/components/ui/BackGroundPath").then(
      (mod) => mod.BackgroundPaths,
    ),
  { ssr: true },
);

interface FAQHeroSectionProps {
  onSearch?: (query: string) => void;
}

const FAQHeroSection = ({ onSearch }: FAQHeroSectionProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch?.(query);
  };

  return (
    <DynamicBackgroundPaths
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about studying in Cyprus"
      showButton={false}
      minHeight="min-h-[40vh] md:min-h-[75vh]"
      paddingY="pt-8 pb-0 md:pt-20 md:pb-0"
      alignItems="items-start sm:items-center"
    >
      {/* Search Bar */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-2xl relative">
          <svg
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search FAQs..."
            onChange={handleSearch}
            className="w-full pl-14 pr-6 py-4 rounded-xl bg-gray-100 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-lg"
          />
        </div>
      </div>
    </DynamicBackgroundPaths>
  );
};

export default FAQHeroSection;
