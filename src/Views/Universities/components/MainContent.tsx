"use client";

import { useState } from "react";
import universitiesData from "../data/universities.json";
import { University } from "../types";
import EmptyState from "./EmptyState";
import FilterSection from "./FilterSection";
import SearchBar from "./SearchBar";
import UniversityCard from "./UniversityCard";

const CATEGORIES = [
  "all",
  "Private University",
  "Public University",
  "Private College",
];

export default function MainContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [degreeType, setDegreeType] = useState<"all" | "bachelors" | "masters">(
    "all",
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredUniversities = (universitiesData as University[]).filter(
    (uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.programs.some((p) =>
          p.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesDegree = degreeType === "all" || uni.type === degreeType;
      const matchesCategory =
        selectedCategory === "all" || uni.category === selectedCategory;

      return matchesSearch && matchesDegree && matchesCategory;
    },
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 mb-12">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            degreeType={degreeType}
            setDegreeType={setDegreeType}
          />
          <FilterSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={CATEGORIES}
          />
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-neutral-600 font-medium">
            Showing{" "}
            <span className="text-primary-600 font-bold">
              {filteredUniversities.length}
            </span>{" "}
            {filteredUniversities.length === 1 ? "university" : "universities"}
          </p>
        </div>

        {/* Universities Grid */}
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
