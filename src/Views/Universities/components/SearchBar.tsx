"use client";

import { useState, useRef, useEffect } from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  degreeType: "all" | "bachelors" | "masters";
  setDegreeType: (type: "all" | "bachelors" | "masters") => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  degreeType,
  setDegreeType,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const degreeOptions = [
    { value: "all", label: "All Programs" },
    { value: "bachelors", label: "Bachelor's" },
    { value: "masters", label: "Master's" },
  ];

  const selectedOption =
    degreeOptions.find((opt) => opt.value === degreeType) || degreeOptions[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Search Input */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-neutral-700 mb-2">
          Search Universities or Programs
        </label>
        <div className="relative">
          <svg
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
              isFocused ? "text-primary-600" : "text-neutral-400"
            }`}
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
            placeholder="Search by name, location, or program..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-full font-medium text-neutral-800 placeholder:text-neutral-400 placeholder:font-normal bg-white transition-all duration-300 ${
              isFocused
                ? "border-primary-600 shadow-lg shadow-primary-100"
                : "border-neutral-200 hover:border-neutral-300"
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
              aria-label="Clear search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Degree Type Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <label className="block text-sm font-semibold text-neutral-700 mb-2">
          Degree Type
        </label>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`w-full px-4 py-3.5 border-2 rounded-full font-medium text-neutral-800 bg-white transition-all duration-300 flex items-center justify-between ${
            isDropdownOpen
              ? "border-primary-600 shadow-lg shadow-primary-100"
              : "border-neutral-200 hover:border-neutral-300"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className={`w-5 h-5 transition-colors duration-200 ${
                isDropdownOpen ? "text-primary-600" : "text-neutral-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            {selectedOption.label}
          </span>
          <svg
            className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border-2 border-neutral-200 rounded-2xl shadow-xl overflow-hidden animate-dropdown">
            {degreeOptions.map((option) => {
              const isSelected = degreeType === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    setDegreeType(
                      option.value as "all" | "bachelors" | "masters",
                    );
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-medium transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-primary-600 text-white"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
