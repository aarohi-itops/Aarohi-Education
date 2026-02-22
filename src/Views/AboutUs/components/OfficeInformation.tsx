"use client";

import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function OfficeInformation() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Visit Our <span className="text-primary-600">Office</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We&apos;re here to help you achieve your educational dreams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6">
            <div className="space-y-12">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Our Location
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    AAROHI Education Consultancy Pvt. Ltd
                    <br />
                    Basundhara-3, Kathmandu
                    <br />
                    Kathmandu 44600, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Phone Number
                  </h3>
                  <p className="text-sm text-neutral-700">+977 1 4961807</p>
                  <p className="text-xs text-neutral-600">
                    +977-1-4962925 (Fax)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Email Address
                  </h3>
                  <p className="text-sm text-neutral-700">
                    info@aarohieducation.com
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">Website</h3>
                  <p className="text-sm text-neutral-700">
                    www.aarohieducation.com
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">
                    Office Hours
                  </h3>
                  <p className="text-sm text-neutral-700">
                    Sunday – Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-neutral-100 rounded-2xl overflow-hidden shadow-xl h-[400px] border-2 border-neutral-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Aarohi Education Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.548!2d85.3205!3d27.7169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a5b1111ab%3A0x1234567890abc!2sNear%20HRIT%20Academy%2C%20Kathmandu%20Metropolitan%20City%20Office%20Ward%20No.%203%20Basundhara%20Chauki%2C%20Kanti%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1673500000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.app.goo.gl/bxsUwJ1cQgxvZDA89"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
