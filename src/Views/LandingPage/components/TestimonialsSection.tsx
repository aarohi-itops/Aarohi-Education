"use client";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "I wasn't sure where to start or which program to choose, but Aarohi Education Consultancy made everything so simple. Their guidance helped me choose the right university in Europe, complete my application, and even prepare me for my visa. I felt supported every step of the way!",
      name: "Anonymous",
      destination: "University in Europe",
    },
    {
      quote:
        "Thanks to Aarohi Education Consultancy Pvt. Ltd.'s expert counseling and honest advice, I am now pursuing my dream course in Europe. Their team truly cares about your future and makes studying abroad feel achievable.",
      name: "Anonymous",
      destination: "Europe",
    },
    {
      quote:
        "Aarohi Education Consultancy didn't just help me get admission, they guided me through the whole journey, from choosing the right program to settling in my new country. I couldn't have done it without them!",
      name: "Anonymous",
      destination: "Europe",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Our Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col"
            >
              <span className="text-primary-600 text-4xl leading-none mb-4">
                “
              </span>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="mt-auto">
                <p className="text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-600 font-medium">
                  {testimonial.destination}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
