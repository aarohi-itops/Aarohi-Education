"use client";

import { User } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  role: string;
  name: string;
  description: string;
  level: number;
  image?: string;
}

const teamStructure: TeamMember[] = [
  {
    role: "Chairman",
    name: "Arjun Thapa",
    description:
      "Provides vision and strategic direction for Aarohi Education.",
    level: 1,
    image: "/assets/Persona/chairman.avif",
  },
  {
    role: "Founder",
    name: "Ms. Binita Thapa",
    description: "Oversees daily operations and strategic planning.",
    level: 2,
  },
  {
    role: "Director",
    name: "Mr/MS Director",
    description: "Oversees daily operations and strategic planning.",
    level: 2,
  },
  {
    role: "Chief Executive Officer",
    name: "Mr. Amit Kumar Sharma",
    description: "Leads execution and ensures institutional excellence.",
    level: 3,
  },
  {
    role: "Operations Department",
    name: "Department",
    description: "Ensures smooth internal operations and service delivery.",
    level: 4,
  },
  {
    role: "Counseling & Admissions",
    name: "Department",
    description: "Guides students through academic and admissions planning.",
    level: 4,
  },
  {
    role: "Finance & Administration",
    name: "Department",
    description: "Manages finance, records, and administrative operations.",
    level: 4,
  },
];

export default function TeamStructure() {
  const level1 = teamStructure.filter((member) => member.level === 1);
  const level2 = teamStructure.filter((member) => member.level === 2);
  const level3 = teamStructure.filter((member) => member.level === 3);
  const level4 = teamStructure.filter((member) => member.level === 4);

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our <span className="text-primary-600">Leadership</span> Structure
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A clear view of the people and departments supporting every student.
          </p>
        </div>

        {/* Hierarchical Structure with proper CSS positioning */}
        <div className="relative">
          <div className="space-y-8">
            {/* Level 1 - Chairman/Director */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                {level1.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 border-4 border-primary-200 overflow-hidden">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-16 h-16 text-primary-400" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {member.role}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-3">
                        {member.name}
                      </p>
                      <p className="text-neutral-600">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 2 - Senior Counsellors with hierarchy lines */}
            <div className="relative">
              {/* Connector lines container */}
              <div className="absolute top-0 left-0 right-0 w-full h-32 pointer-events-none hidden md:block">
                {/* Vertical line from previous level */}
                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-primary-400 to-primary-300 transform -translate-x-1/2" />
                {/* Horizontal line connecting both branches */}
                <div className="absolute top-6 left-1/4 right-1/4 h-0.5 bg-primary-300" />
                {/* Left vertical line to Founder */}
                <div className="absolute top-6 left-1/4 w-0.5 h-12 bg-primary-300 transform -translate-x-1/2" />
                {/* Right vertical line to Director */}
                <div className="absolute top-6 right-1/4 w-0.5 h-12 bg-primary-300 transform translate-x-1/2" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6 md:pt-20">
                {level2.map((member, index) => (
                  <div key={index}>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-200">
                      <div className="flex flex-col items-center text-center">
                        {/* Profile Image Placeholder */}
                        <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center mb-4 border-2 border-primary-200">
                          <User className="w-12 h-12 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {member.role}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-2 text-sm">
                          {member.name}
                        </p>
                        <p className="text-neutral-600 text-sm">
                          {member.description}
                        </p>
                      </div>
                    </div>
                    {index < level2.length - 1 && <div className="py-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3 - Counsellors with hierarchy lines */}
            <div className="relative">
              {/* Connector lines container */}
              <div className="absolute top-0 left-0 right-0 w-full h-32 pointer-events-none hidden md:block">
                {/* Lines coming down from Founder and Director */}
                <div className="absolute -top-8 left-1/4 w-0.5 h-8 bg-primary-300 transform -translate-x-1/2" />
                <div className="absolute -top-8 right-1/4 w-0.5 h-8 bg-primary-300 transform translate-x-1/2" />
                {/* Horizontal line joining them */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-primary-300" />
                {/* Vertical line down to CEO */}
                <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-primary-300 transform -translate-x-1/2" />
              </div>

              <div className="flex justify-center max-w-5xl mx-auto pt-6 md:pt-20">
                {level3.map((member, index) => (
                  <div key={index} className="w-full max-w-sm">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100">
                      <div className="flex flex-col items-center text-center">
                        {/* Profile Image Placeholder */}
                        <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-4 border-2 border-primary-200">
                          <User className="w-10 h-10 text-primary-400" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                          {member.role}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-2 text-sm">
                          {member.name}
                        </p>
                        <p className="text-neutral-600 text-sm">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 4 - Administrative Staff with hierarchy lines */}
            <div className="relative">
              {/* Connector lines container */}
              <div className="absolute top-0 left-0 right-0 w-full h-24 pointer-events-none hidden md:block">
                {/* Vertical line from previous level */}
                <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary-300 to-primary-200 transform -translate-x-1/2" />
                {/* Horizontal line connecting all three departments */}
                <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-primary-200" />
                {/* Left vertical line to first department */}
                <div className="absolute top-0 left-[16.66%] w-0.5 h-6 bg-primary-200 transform -translate-x-1/2" />
                {/* Center vertical line to second department */}
                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-primary-200 transform -translate-x-1/2" />
                {/* Right vertical line to third department */}
                <div className="absolute top-0 right-[16.66%] w-0.5 h-6 bg-primary-200 transform translate-x-1/2" />
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6 md:pt-16">
                {level4.map((member, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Profile Image Placeholder */}
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 border-2 border-neutral-200">
                        <User className="w-10 h-10 text-neutral-400" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {member.role}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-2 text-sm">
                        {member.name}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-primary-50 to-white shadow-lg">
            <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-primary-100/60 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary-200/40 blur-3xl" />
            <div className="relative p-8 md:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
                  In-depth overview
                </div>
                <h3 className="mt-4 text-3xl font-bold text-neutral-900">
                  In-depth about Aarohi Education Consultancy
                </h3>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-600">
                  <p>
                    Aarohi Education Consultancy is dedicated to guiding
                    students toward meaningful international education
                    opportunities with honesty, clarity, and expert support.
                    Based in Kathmandu, we specialize in helping students
                    navigate the study abroad process with confidence, providing
                    reliable guidance tailored to individual academic goals and
                    career aspirations.
                  </p>
                  <p>
                    We offer personalized counseling, careful university and
                    program selection, admission assistance, and visa guidance,
                    ensuring a smooth and transparent journey from initial
                    consultation to enrollment. Our approach is student-focused,
                    ethical, and detail-oriented, designed to simplify complex
                    procedures and empower informed decision-making.
                  </p>
                  <p>
                    In addition to admission support, we place strong emphasis
                    on language and test preparation, including English
                    proficiency exams and other standardized tests. Our
                    qualified instructors and trainers work closely with
                    students to strengthen their academic readiness and
                    confidence.
                  </p>
                  <p>
                    At Aarohi Education Consultancy, we believe that every
                    student deserves the right guidance toward a brighter
                    future. Our holistic approach ensures that students receive
                    complete support from career counseling to post-admission
                    assistance under one roof.
                  </p>
                </div>
              </div>
              <div className="mt-8 h-32 rounded-2xl p-6">
                {/* <div>
                  <h4 className=" text-xl font-semibold text-neutral-900">
                    Download the Aarohi Profile
                  </h4>
                </div> */}
                <a
                  href="/Brusher/Arohi%20Education.pdf"
                  download
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary-700"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
