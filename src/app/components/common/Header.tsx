"use client";

import { ROUTES } from "@/src/constants/routes";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import InquireFormModal from "../modal/InquireForm";
import { InquireButton } from "../ui/InquireButton";

const navItems = [
  { label: "Home", href: ROUTES.home },
  { label: "Universities", href: ROUTES.universities },
  { label: "Admission Process", href: ROUTES.admissionProcess },
  { label: "FAQ", href: ROUTES.faq },
  { label: "About", href: ROUTES.aboutUs },
];

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

    {/* Desktop CTA Button */}
    <div className="hidden md:flex items-center gap-4">
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

    {/* Sliding Sidebar for Mobile (portal to body to avoid stacking-context issues) */}
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

              {/* Side Drawer Menu Panel */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="fixed inset-y-0 right-0 w-[84%] max-w-sm bg-white p-5 overflow-auto z-[12001] shadow-2xl ring-1 ring-black/5"
              >
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
                    aria-label="Close menu"
                    className="p-2.5 rounded-full bg-white shadow-sm ring-1 ring-black/5 hover:bg-primary-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={"M6 18L18 6M6 6l12 12"}
                      />
                    </svg>
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group w-full rounded-xl bg-white px-4 py-3 text-base font-semibold text-slate-900 shadow-sm transition-all hover:text-primary-700"
                    >
                      <span className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="text-base font-medium text-slate-400 transition-colors group-hover:text-primary-500">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 flex justify-center">
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
  <Link href={ROUTES.home} aria-label="Go to landing page">
    <div className="flex-shrink-0 flex items-center gap-3">
      <div className="w-32 h-32 md:w-40 md:h-36 relative flex items-center justify-center scale-165 origin-left">
        <Image
          src="/assets/logo/logo.png"
          alt="Aarohi Education Logo"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </Link>
);

// Main Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInquireClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-white backdrop-blur-sm z-[11000] overflow-visible">
        <div className="px-4 sm:px-6 lg:px-8 overflow-visible">
          {/* Header Content */}
          <div className="flex justify-between md:justify-between items-center py-3 md:py-4 px-2 md:px-10 overflow-visible">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <DesktopNavigation onInquireClick={handleInquireClick} />

            {/* Mobile Navigation */}
            <MobileNavigation
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              onInquireClick={handleInquireClick}
            />
          </div>
        </div>
      </header>

      {/* Inquire Form Modal */}
      <InquireFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
