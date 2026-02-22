import Button from "@/src/app/components/ui/Button";
import Card from "@/src/app/components/ui/Card";
import { ROUTES } from "@/src/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { University } from "../types";

export default function UniversityCard({
  university,
}: {
  university: University;
}) {
  return (
    <Card
      variant="default"
      className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* University Image */}
      <div className="relative h-48 overflow-hidden bg-secondary-gray-100">
        <Image
          src={university.image}
          alt={university.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {university.ranking}
        </div>
        <div className="absolute top-4 left-4 bg-secondary-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {university.type === "bachelors" ? "Bachelor's" : "Master's"}
        </div>
      </div>

      {/* University Info */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-secondary-gray-900 mb-2">
          {university.name}
        </h3>

        <div className="flex items-center text-secondary-gray-600 mb-3">
          <svg
            className="w-4 h-4 mr-2 text-primary-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{university.location}</span>
        </div>

        <p className="text-secondary-gray-600 text-sm mb-4 grow">
          {university.description}
        </p>

        {/* Programs */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-secondary-gray-900 mb-2">
            Popular Programs:
          </p>
          <div className="flex flex-wrap gap-2">
            {university.programs.slice(0, 3).map((program, idx) => (
              <span
                key={idx}
                className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium"
              >
                {program}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-secondary-gray-200">
          <div>
            <p className="text-xs text-secondary-gray-600">Duration</p>
            <p className="text-sm font-semibold text-secondary-gray-900">
              {university.duration}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={ROUTES.universityDetail(university.id)}>
          <Button variant="primary" className="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </Card>
  );
}
