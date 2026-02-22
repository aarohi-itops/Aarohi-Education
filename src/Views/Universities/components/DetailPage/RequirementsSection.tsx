import { Check } from "lucide-react";
import { University } from "../../types";

interface RequirementsSectionProps {
  university: University;
}

export default function RequirementsSection({
  university,
}: RequirementsSectionProps) {
  const { languageRequirements, admissions, contact } = university;

  if (!languageRequirements && !admissions && !contact) {
    return null;
  }

  return (
    <div className="mb-12 space-y-10">
      {languageRequirements && (
        <div>
          <h2 className="text-3xl font-bold text-secondary-gray-900 mb-4">
            Language Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languageRequirements.foundation && (
              <div className="rounded-lg border border-secondary-gray-200 p-4 bg-secondary-gray-50">
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Foundation
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-secondary-gray-600">
                  {languageRequirements.foundation.map((item, idx) => (
                    <li key={`foundation-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {languageRequirements.undergraduate && (
              <div className="rounded-lg border border-secondary-gray-200 p-4 bg-secondary-gray-50">
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Undergraduate
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-secondary-gray-600">
                  {languageRequirements.undergraduate.map((item, idx) => (
                    <li key={`ug-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {languageRequirements.postgraduate && (
              <div className="rounded-lg border border-secondary-gray-200 p-4 bg-secondary-gray-50">
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Postgraduate
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-secondary-gray-600">
                  {languageRequirements.postgraduate.map((item, idx) => (
                    <li key={`pg-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {languageRequirements.note && (
            <p className="mt-3 text-sm text-secondary-gray-600">
              {languageRequirements.note}
            </p>
          )}
        </div>
      )}

      {admissions && (
        <div>
          <h2 className="text-3xl font-bold text-secondary-gray-900 mb-4">
            Admissions
          </h2>
          <div className="space-y-6">
            {admissions.undergraduate && (
              <div>
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Undergraduate Admission
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-secondary-gray-600">
                  {admissions.undergraduate.map((item, idx) => (
                    <li
                      key={`ad-ug-${idx}`}
                      className="flex items-start gap-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {admissions.postgraduate && (
              <div>
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Graduate Admission
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-secondary-gray-600">
                  {admissions.postgraduate.map((item, idx) => (
                    <li
                      key={`ad-pg-${idx}`}
                      className="flex items-start gap-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {admissions.matureApplicants && (
              <div className="rounded-lg border border-secondary-gray-200 bg-white p-4">
                <h3 className="text-lg font-semibold text-secondary-gray-900">
                  Mature Applicants & Exceptional Admissions
                </h3>
                <p className="mt-2 text-sm text-secondary-gray-600">
                  {admissions.matureApplicants}
                </p>
              </div>
            )}
            {admissions.notes && admissions.notes.length > 0 && (
              <p className="text-sm text-secondary-gray-600">
                {admissions.notes.join(" ")}
              </p>
            )}
          </div>
        </div>
      )}

      {contact && (
        <div>
          <h2 className="text-3xl font-bold text-secondary-gray-900 mb-4">
            Contact & Location
          </h2>
          <div className="rounded-lg border border-secondary-gray-200 bg-white p-4 space-y-2 text-sm text-secondary-gray-600">
            {contact.address && (
              <p>
                <span className="font-semibold text-secondary-gray-900">
                  Address:
                </span>{" "}
                {contact.address}
              </p>
            )}
            {contact.phone && (
              <p>
                <span className="font-semibold text-secondary-gray-900">
                  Phone:
                </span>{" "}
                {contact.phone}
              </p>
            )}
            {contact.email && (
              <p>
                <span className="font-semibold text-secondary-gray-900">
                  Email:
                </span>{" "}
                {contact.email}
              </p>
            )}
            {contact.website && (
              <p>
                <span className="font-semibold text-secondary-gray-900">
                  Website:
                </span>{" "}
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  {contact.website}
                </a>
              </p>
            )}
            {contact.mapUrl && (
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                View on Google Maps
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
