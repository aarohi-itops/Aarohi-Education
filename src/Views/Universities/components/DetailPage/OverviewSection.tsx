import { University } from "../../types";

interface OverviewSectionProps {
  university: University;
}

export default function OverviewSection({ university }: OverviewSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-secondary-gray-900 mb-4">
        Overview
      </h2>
      <p className="text-secondary-gray-600 text-lg leading-relaxed">
        {university.description}
      </p>
      {university.overview && university.overview.length > 0 && (
        <div className="mt-6 space-y-4">
          {university.overview.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-secondary-gray-600 text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {university.vision && (
        <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50 p-6">
          <h3 className="text-xl font-semibold text-secondary-gray-900 mb-2">
            Vision & Mission
          </h3>
          <p className="text-secondary-gray-700 leading-relaxed">
            {university.vision}
          </p>
        </div>
      )}
      {university.strengths && university.strengths.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-secondary-gray-900 mb-3">
            Our Strengths
          </h3>
          <ul className="space-y-3">
            {university.strengths.map((strength, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-secondary-gray-600"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
