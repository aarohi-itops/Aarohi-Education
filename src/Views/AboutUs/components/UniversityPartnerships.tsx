interface University {
  name: string;
  country: string;
  logo?: string;
}

export default function UniversityPartnerships() {
  const universities: University[] = [
    {
      name: "University of Cyprus",
      country: "Cyprus",
    },
    {
      name: "Cyprus University of Technology",
      country: "Cyprus",
    },
    {
      name: "European University Cyprus",
      country: "Cyprus",
    },
    {
      name: "Frederick University",
      country: "Cyprus",
    },
    {
      name: "Open University of Cyprus",
      country: "Cyprus",
    },
    {
      name: "Neapolis University Pafos",
      country: "Cyprus",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Our University Partners
        </h2>
        <p className="text-center text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto"></p>
        <div className="grid md:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200"
            >
              <div className="h-20 bg-white rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{uni.name}</h3>
              <p className="text-gray-600 text-sm mt-2">📍 {uni.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
