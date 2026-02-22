"use client";

import Image from "next/image";

export default function Chairman() {
  return (
    <section className="py-12 md:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Message from Chairman
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative">
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/Persona/chairman.avif"
                alt="Arjun Thapa, Chairman"
                width={600}
                height={500}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-2xl px-6 py-4 border border-gray-100">
              <p className="text-lg font-semibold text-gray-900">Arjun Thapa</p>
              <p className="text-sm font-medium text-primary-600">Chairman</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>Dear Students and Parents,</p>
            <p>
              Namaste and warm greetings, Welcome to Aarohi Education
              Consultancy. It is with great pride &amp; optimism that I address
              you as you take an important step toward your global education
              goals.
            </p>
            <p>
              At Aarohi Education Consultancy, we believe that studying abroad
              is more than academics it&apos;s an opportunity to broaden your
              horizons, build confidence, and shape a successful future. Our
              team is committed to providing honest guidance, personalized
              support, and transparent services to every student we serve.
            </p>
            <p>
              We understand that the path to studying abroad can seem
              overwhelming. Many students and parents are unsure where to start
              or how to choose the right program. That&apos;s why Aarohi
              Education Consultancy emphasizes clear direction, ethical
              counseling, and end-to-end support from career guidance &amp;
              university selection through admissions, visa assistance, &amp;
              pre-departure preparation.
            </p>
            <div className="border-l-4 border-primary-500 bg-primary-50 rounded-2xl p-5 text-gray-900 shadow-sm">
              <p className="text-lg sm:text-xl font-semibold">
                Your better tomorrow is here today
              </p>
            </div>
            <p>
              Thank you for choosing Aarohi Education Consultancy. We look
              forward to being part of your academic success and helping you
              build a bright, global future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
