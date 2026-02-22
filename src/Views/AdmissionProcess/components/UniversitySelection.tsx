"use client";

const UniversitySelection = () => {
  const criteria = [
    {
      icon: "📊",
      title: "Academic Background Assessment",
      description:
        "We evaluate your academic performance, GPA, and subject strengths to match you with suitable programs.",
    },
    {
      icon: "🎯",
      title: "Career Objectives Alignment",
      description:
        "Your career goals guide the selection of universities and programs that best support your aspirations.",
    },
    {
      icon: "📚",
      title: "Field of Study Matching",
      description:
        "We ensure the program aligns with your interests and builds on your academic strengths.",
    },
    {
      icon: "✅",
      title: "Entry Requirements Evaluation",
      description:
        "Complete assessment of specific requirements for each program and university.",
    },
    {
      icon: "🛂",
      title: "Visa Compliance Check",
      description:
        "Ensure all eligibility criteria for student visa approval are met.",
    },
  ];

  const programTypes = [
    {
      name: "Undergraduate Programs",
      description: "Bachelor's degrees after high school completion",
      duration: "4 Years",
      examples: "Engineering, Business, Medicine, CS",
    },
    {
      name: "Master's Programs",
      description: "Advanced degrees for graduates",
      duration: "2 Years",
      examples: "MBA, MSc Engineering, MA Law",
    },
    {
      name: "Diploma Programs",
      description: "Specialized professional certifications",
      duration: "2 Years",
      examples: "Business Diploma, IT Diploma",
    },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Step 2: University{" "}
            <span className="text-primary-600">Selection</span>
          </h2>
          <p className="text-xl text-secondary-gray-700 max-w-2xl mx-auto">
            Choose the right university and program based on your profile
          </p>
        </div>

        {/* Selection Criteria */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black mb-10">
            Selection Criteria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="border border-secondary-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">
                  {item.title}
                </h4>
                <p className="text-secondary-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Types */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-10">Program Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programTypes.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200"
              >
                <h4 className="text-xl font-bold text-black mb-3">
                  {program.name}
                </h4>
                <p className="text-secondary-gray-700 mb-4">
                  {program.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-semibold text-primary-600">
                      Duration:
                    </span>
                    <p className="text-secondary-gray-700">
                      {program.duration}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary-600">
                      Examples:
                    </span>
                    <p className="text-secondary-gray-700">
                      {program.examples}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySelection;
