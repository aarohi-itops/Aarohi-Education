export default function WhyChooseAarohi() {
  const reasons = [
    {
      title: "Expert Guidance",
      description:
        "Our experienced counsellors provide personalized guidance based on individual strengths and aspirations",
    },
    {
      title: "Comprehensive Support",
      description:
        "From university selection to application process, we support you every step of the way",
    },
    {
      title: "Proven Track Record",
      description:
        "Successfully guided hundreds of students to top-tier international universities",
    },
    {
      title: "Industry Connections",
      description: "Strong partnerships with leading universities worldwide",
    },
    {
      title: "Holistic Approach",
      description: "We focus on overall development, not just academics",
    },
    {
      title: "Affordable Services",
      description:
        "Quality education guidance accessible to students from all backgrounds",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6 md:mb-12">
          Why Choose Aarohi Education?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
