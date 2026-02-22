"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import FAQCategoryFilter from "./components/FAQCategoryFilter";
import FAQHeroSection from "./components/FAQHeroSection";
import { faqCategories, getAllFAQs } from "./data/faqData";

const FAQAccordion = dynamic(() => import("./components/FAQAccordion"));
const Header = dynamic(() => import("../../app/components/common/Header"));
const Footer = dynamic(() => import("../../app/components/common/Footer"));

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get FAQs organized by category when in "All FAQs" mode
  const organizedFAQs = useMemo(() => {
    const organized: {
      categoryId: string;
      categoryName: string;
      categoryIcon: string;
      items: ReturnType<typeof getAllFAQs>;
    }[] = [];

    faqCategories.forEach((category) => {
      const categoryItems = getAllFAQs().filter(
        (item) => item.category === category.id
      );
      organized.push({
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon,
        items: categoryItems.slice(0, 2), // Get first 2 from each category
      });
    });

    return organized;
  }, []);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let results = getAllFAQs();

    // Apply category filter
    if (selectedCategory) {
      results = results.filter((item) => item.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      results = results.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return results;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section with Search */}
        <FAQHeroSection onSearch={(query) => setSearchQuery(query)} />

        {/* Content Section */}
        <section className="py-8 md:py-20 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <FAQCategoryFilter
              categories={faqCategories}
              selectedCategory={selectedCategory}
              onCategorySelect={(categoryId) => {
                setSelectedCategory(categoryId);
                setSearchQuery(""); // Clear search when changing category
              }}
            />

            {/* Results Info */}
            {(searchQuery || selectedCategory) && (
              <div className="mb-12 md:mb-16 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-2xl">
                <p className="text-primary-700 text-base md:text-lg font-medium">
                  Found{" "}
                  <strong className="font-bold">{filteredFAQs.length}</strong>{" "}
                  result
                  {filteredFAQs.length !== 1 ? "s" : ""}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory &&
                    ` in ${
                      faqCategories.find((c) => c.id === selectedCategory)?.name
                    }`}
                </p>
              </div>
            )}

            {/* FAQ Content */}
            {!selectedCategory && !searchQuery ? (
              // Show all FAQs organized by category
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {organizedFAQs.map((categoryGroup) => (
                  <div key={categoryGroup.categoryId}>
                    {/* Category Heading */}
                    <div className="mb-6 md:mb-8">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-gray-900 mb-2">
                        {categoryGroup.categoryName}
                      </h2>
                      <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"></div>
                    </div>

                    {/* FAQs for this category */}
                    <FAQAccordion items={categoryGroup.items} />
                  </div>
                ))}
              </div>
            ) : (
              // Show filtered FAQs (by category or search)
              <FAQAccordion items={filteredFAQs} />
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
