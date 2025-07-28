"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuoteRequestModal from "./QuoteRequestModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background shadow-md z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold font-heading text-primary-700">
                Haul<span className="text-secondary-500">Hype</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="font-medium text-neutral-900 hover:text-primary-600 transition"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="font-medium text-neutral-700 hover:text-primary-600 transition"
              >
                Services
              </Link>
              <button
                onClick={() => scrollToSection("gallery")}
                className="font-medium text-neutral-700 hover:text-primary-600 transition"
              >
                Portfolio
              </button>
              <Link
                href="/blog"
                className="font-medium text-neutral-700 hover:text-primary-600 transition"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="font-medium text-neutral-700 hover:text-primary-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="font-medium text-neutral-700 hover:text-primary-600 transition"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <Button
              onClick={openQuoteModal}
              className="hidden md:block bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-5 rounded-lg transition duration-300"
            >
              Request a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-neutral-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 pt-20">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-neutral-900 py-2 border-b border-neutral-200 text-left"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-neutral-700 py-2 border-b border-neutral-200 text-left"
              >
                Services
              </Link>
              <button
                onClick={() => scrollToSection("gallery")}
                className="font-medium text-neutral-700 py-2 border-b border-neutral-200 text-left"
              >
                Portfolio
              </button>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-neutral-700 py-2 border-b border-neutral-200 text-left"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="font-medium text-neutral-700 py-2 border-b border-neutral-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="font-medium text-neutral-700 py-2 border-b border-neutral-200 text-left"
              >
                Contact
              </button>
              <Button
                onClick={openQuoteModal}
                className="bg-secondary-500 text-white font-medium py-3 px-5 rounded-lg text-center mt-4"
              >
                Request a Quote
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      <QuoteRequestModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
};

export default Header;
