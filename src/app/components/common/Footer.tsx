"use client";

import {
  Check,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiTiktokLogo } from "react-icons/pi";

// Social media links data
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/aarohi-skill-academy/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/aarohiskillacademy",
    ariaLabel: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/aarohiskillacademy",
    ariaLabel: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@aarohiskillacademy",
    ariaLabel: "Youtube",
  },
  {
    icon: PiTiktokLogo,
    href: "https://www.tiktok.com/@aarohi_skill_academy",
    ariaLabel: "Tiktok",
  },
];

// Company links data
const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/universities", label: "Universities" },
  { href: "/admission-process", label: "Admission Process" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setShowToast(true);
      setEmail("");
      setIsLoading(false);

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="bg-white py-4 sm:py-6">
      <footer className="relative bg-primary-600/90 font-primary p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden mx-4 sm:mx-6 rounded-2xl">
        {/* Wave Background SVG */}
        <div className="absolute inset-0 z-0">
          <svg
            id="wave"
            style={{ transform: "rotate(180deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(0, 97, 153, 1)" offset="0%"></stop>
                <stop stopColor="rgba(0, 97, 153, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,294L60,302.2C120,310,240,327,360,285.8C480,245,600,147,720,155.2C840,163,960,278,1080,343C1200,408,1320,425,1440,375.7C1560,327,1680,212,1800,196C1920,180,2040,261,2160,302.2C2280,343,2400,343,2520,294C2640,245,2760,147,2880,138.8C3000,131,3120,212,3240,228.7C3360,245,3480,196,3600,220.5C3720,245,3840,343,3960,318.5C4080,294,4200,147,4320,98C4440,49,4560,98,4680,130.7C4800,163,4920,180,5040,204.2C5160,229,5280,261,5400,294C5520,327,5640,359,5760,359.3C5880,359,6000,327,6120,277.7C6240,229,6360,163,6480,147C6600,131,6720,163,6840,212.3C6960,261,7080,327,7200,294C7320,261,7440,131,7560,138.8C7680,147,7800,294,7920,318.5C8040,343,8160,245,8280,245C8400,245,8520,343,8580,392L8640,441L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
            ></path>
          </svg>
        </div>

        <div className="w-full relative z-10 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row w-full gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Logo and description section */}
            <div className="w-full md:w-2/5 flex flex-col items-start">
              <Link href="/">
                <div className="flex items-center gap-2 mb-1 sm:mb-3">
                  <div className="w-28 h-28 sm:w-40 sm:h-12 relative flex-shrink-0 p-1">
                    <Image
                      src="/assets/logo/logo.svg"
                      alt="Aarohi Skill Academy Logo"
                      width={300}
                      height={300}
                      className="fill"
                    />
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <MapPin className="text-white" size={14} />
                <p className="text-xs text-white">Kathmandu, Nepal</p>
              </div>

              <p className="text-xs text-white mb-3 sm:mb-4 leading-relaxed max-w-xs">
                Your pathway to world-class education at top Cyprus
                universities. Expert guidance for a brighter future.
              </p>

              <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors hover:scale-110"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  </a>
                ))}
              </div>

              <p className="text-xs text-white/80">Reg. No: 381054/82/83</p>
            </div>

            {/* Links grid section */}
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                {/* Company */}
                <div>
                  <h3 className="text-sm text-white font-bold mb-2 sm:mb-3">
                    Company
                  </h3>
                  <ul className="space-y-2">
                    {companyLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-xs text-white hover:text-gray-200 transition-colors block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="flex flex-col items-start w-full">
                  <h3 className="text-sm text-white font-bold mb-2 sm:mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-xs text-white/90 mb-2 sm:mb-3 leading-relaxed">
                    Get the latest updates about universities and admission
                    processes delivered to your inbox.
                  </p>
                  <form
                    className="flex flex-col gap-2 w-full"
                    onSubmit={handleSubscribe}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 text-xs focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-primary-600 px-3 py-2 sm:py-2.5 rounded-lg font-semibold text-xs hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe Now"}
                    </button>
                  </form>
                  <p className="text-[10px] text-white/70 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center font-semibold gap-2 text-[9px] sm:text-[10px] text-white">
              <p>
                All rights reserved © {currentYear} Aarohi Education Consultancy
              </p>
              <Link
                href="https://dobaato.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="order-3 md:order-2 hover:text-gray-200 transition-colors"
              >
                Crafted by Dobaato
              </Link>
              <div className="flex gap-2 order-2 md:order-3">
                <Link
                  href="/privacy"
                  className="hover:text-gray-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  href="/terms"
                  className="hover:text-gray-200 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Vector SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            width="1920"
            height="142"
            viewBox="0 0 1920 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 md:h-20"
          >
            <path
              d="M-6 138.325L463.617 1.00003M1927 139.57L1447.82 1.00003M1664.07 140.762L1322.24 1.00003M1431.87 140.762L1186.19 1.00002M1246.12 139.808L1050.15 1.00005M1057.75 141L963.566 2.00612M733.336 139.808L896.606 1.00003M512.262 140.285L754.021 1M271.567 139.093L600.97 1.00003M91.7001 110.245L1826.27 110.245M229.053 69.715L1687.61 69.715M349.401 34.4301L1576.42 34.43"
              stroke="url(#paint0_linear_75_2304)"
              strokeOpacity="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_75_2304"
                x1="960.5"
                y1="1"
                x2="960.5"
                y2="141"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.867009" stopColor="white" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-full duration-300">
            <div className="bg-white/20 rounded-full p-1">
              <Check size={16} />
            </div>
            <div>
              <p className="font-semibold">Successfully Subscribed!</p>
              <p className="text-sm opacity-90">
                Thank you for joining our newsletter.
              </p>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
