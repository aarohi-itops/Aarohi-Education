"use client";

interface FilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export default function FilterSection({
  selectedCategory,
  setSelectedCategory,
  categories,
}: FilterSectionProps) {
  return (
    <div className="mt-8 pt-8 border-t border-neutral-200">
      <label className="block text-sm font-semibold text-neutral-700 mb-3">
        Filter by Category
      </label>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const displayName = category === "all" ? "All Categories" : category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isSelected
                  ? "text-white"
                  : "text-neutral-700 bg-neutral-50 hover:bg-neutral-100 border-2 border-neutral-200"
              }`}
            >
              {isSelected && (
                <span
                  className="absolute inset-0 bg-primary-600 rounded-full transition-all duration-300 ease-out"
                  style={{
                    animation:
                      "bubbleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  }}
                />
              )}
              <span className="relative z-10">{displayName}</span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes bubbleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
