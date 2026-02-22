"use client";

import Image from "next/image";
import React from "react";

const courses = [
  {
    id: "pte",
    title: "PTE Preparation",
    desc: "Practical training to help you master PTE exam skills. Includes intensive speaking and writing practice, detailed score analysis, and full-length simulated tests to build confidence for test day.",
    img: "/assets/CoursesImages/PTE.jpg",
    alt: "PTE course image",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    desc: "Structured classes to help you achieve your target IELTS band. We cover all four modules with exam strategies, weekly mock tests, and personalized feedback from certified instructors to track your progress.",
    img: "/assets/CoursesImages/itels.jpg",
    alt: "IELTS course image",
  },
  {
    id: "toefl",
    title: "TOEFL Preparation",
    desc: "Focused lessons and practice to boost your TOEFL score. Emphasis on academic reading, listening note-taking, integrated writing, and speaking tasks with targeted practice and performance reviews.",
    img: "/assets/CoursesImages/tofel.jpg",
    alt: "TOEFL course image",
  },
];

const LanguageCourses: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black uppercase tracking-wider">
            Language Courses
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Comprehensive test-prep in Kathmandu — achieve your target scores
            with Aarohi Educational Consultancy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className={`flex-1 flex flex-col bg-white rounded-4xl shadow-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl min-h-[28rem]`}
            >
              <div className="w-full h-52 md:h-64 lg:h-72 overflow-hidden flex-shrink-0 relative">
                <Image
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-full"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-black uppercase tracking-wide mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-400">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageCourses;
