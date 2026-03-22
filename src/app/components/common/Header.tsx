"use client";

import { ROUTES } from "@/src/constants/routes";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import InquireFormModal from "../modal/InquireForm";
import { InquireButton } from "../ui/InquireButton";

// ✅ NEW: Social Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: ROUTES.home },
  { label: "Universities", href: ROUTES.universities },
  { label: "Admission Process", href: ROUTES.admissionProcess },
  { label: "FAQ", href: ROUTES.faq },
  { label: "About", href: ROUTES.aboutUs },
];

// ✅ Social Icons Component
const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.facebook.com/aarohieduconsultancy"
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all hover:scale-110"
      >
        <FaFacebookF size={25} />
      </a>
      <a
        href="https://www.instagram.com/aarohieducation.ho/"
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all hover:scale-110"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://www.linkedin.com/company/aarohi-education-consultancy/"
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all hover:scale-110"
      >
        <FaLinkedinIn size={25} />
      </a>
      <a
        href="https://www.tiktok.com/@aarohi_educonsultancy"
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all hover:scale-110"
      >
        <FaTiktok size={25} />
      </a>
      <a
        href=""
        target="_blank"
        className="text-sky-500 hover:text-sky-600 transition-all hover:scale-110"
      ></a>
    </div>
  );
};

// Desktop Navigation Component
interface NavigationProps {
  onInquireClick: () => void;
}

const DesktopNavigation = ({ onInquireClick }: NavigationProps) => (
  <>
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-12">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-black hover:underline hover:decoration-primary-600 decoration-2 underline-offset-8 transition-colors font-semibold text-base"
        >
          {item.label}
        </Link>
      ))}
    </nav>

    {/* Desktop CTA + Social */}
    <div className="hidden md:flex items-center gap-4">
      <SocialIcons /> {/* ✅ Added */}
      <InquireButton onClick={onInquireClick} size="md" />
    </div>
  </>
);

// Mobile Navigation Component
interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onInquireClick: () => void;
}

const MobileNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
  onInquireClick,
}: MobileNavigationProps) => (
  <div className="flex items-center md:hidden">
    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
    >
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {typeof document !== "undefined" &&
      createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
              className="fixed inset-0 z-[12000] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/50 z-[12000]" />

              {/* Drawer */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="fixed inset-y-0 right-0 w-[84%] max-w-sm bg-white p-5 overflow-auto z-[12001] shadow-2xl ring-1 ring-black/5"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
                      <Image
                        src="/assets/logo/logo.png"
                        alt="Aarohi Education"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Navigate
                      </p>
                      <p className="text-lg font-semibold text-slate-900">
                        Explore Aarohi
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:bg-primary-50"
                  >
                    ✕
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group w-full rounded-xl px-4 py-3 text-base font-semibold text-slate-900 shadow-sm hover:text-primary-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* ✅ Social Icons in Mobile */}
                <div className="mt-6 flex justify-center">
                  <SocialIcons />
                </div>

                {/* CTA */}
                <div className="mt-6 flex justify-center">
                  <InquireButton
                    onClick={() => {
                      setIsMenuOpen(false);
                      onInquireClick();
                    }}
                    size="md"
                    className="w-full justify-center"
                  />
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
  </div>
);

// Logo Component
const Logo = () => (
  <Link href={ROUTES.home}>
    <div className="flex items-center">
      <Image
        src="/assets/logo/logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  </Link>
);

// Main Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white z-[11000]">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          <Logo />
          <DesktopNavigation onInquireClick={() => setIsModalOpen(true)} />
          <MobileNavigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            onInquireClick={() => setIsModalOpen(true)}
          />
        </div>
      </header>

      <InquireFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;