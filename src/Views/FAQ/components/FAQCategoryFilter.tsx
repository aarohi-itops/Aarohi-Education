"use client";

import { FAQCategory } from "../data/faqData";

interface FAQCategoryFilterProps {
  categories: FAQCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const FAQCategoryFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: FAQCategoryFilterProps) => {
  return (
    <div className="mb-12 md:mb-16 lg:mb-20">
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
        {/* All FAQs Button */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap shadow-sm hover:shadow-md ${
            selectedCategory === null
              ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
              : "bg-primary-100 text-primary-700 hover:bg-primary-200"
          }`}
        >
          All FAQs
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base whitespace-nowrap shadow-sm hover:shadow-md ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                : "bg-primary-50 text-primary-700 hover:bg-primary-100"
            }`}
          >
            <span className="text-base sm:text-lg">{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQCategoryFilter;
