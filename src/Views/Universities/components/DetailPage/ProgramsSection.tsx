import { BookOpen } from "lucide-react";
import { University } from "../../types";

interface ProgramsSectionProps {
  university: University;
}

export default function ProgramsSection({ university }: ProgramsSectionProps) {
  const detailedPrograms = university.programsDetailed;

  const renderProgramGroup = (
    title: string,
    programs?: { name: string; details?: string; link?: string }[],
  ) => {
    if (!programs || programs.length === 0) {
      return null;
    }

    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-secondary-gray-900 mb-3">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program, idx) => (
            <div
              key={`${title}-${idx}`}
              className="rounded-lg border border-secondary-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="text-secondary-gray-900 font-semibold">
                {program.name}
              </p>
              {program.details && (
                <p className="mt-2 text-sm text-secondary-gray-600">
                  {program.details}
                </p>
              )}
              {program.link && (
                <a
                  href={program.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  View course details
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-secondary-gray-900 mb-4">
        Popular Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {university.programs.map((program, idx) => (
          <div
            key={idx}
            className="p-4 bg-primary-50 rounded-lg border border-primary-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                <BookOpen className="h-4 w-4" />
              </span>
              <p className="text-primary-900 font-semibold">{program}</p>
            </div>
          </div>
        ))}
      </div>
      {(detailedPrograms?.diplomas ||
        detailedPrograms?.undergraduate ||
        detailedPrograms?.postgraduate ||
        detailedPrograms?.other) && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-secondary-gray-900">
            Programs & Courses
          </h2>
          {renderProgramGroup("Diplomas", detailedPrograms?.diplomas)}
          {renderProgramGroup(
            "Undergraduate",
            detailedPrograms?.undergraduate,
          )}
          {renderProgramGroup(
            "Postgraduate",
            detailedPrograms?.postgraduate,
          )}
          {renderProgramGroup("Other", detailedPrograms?.other)}
        </div>
      )}
    </div>
  );
}
