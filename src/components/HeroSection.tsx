"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuoteRequestModal from "./QuoteRequestModal";

const HeroSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <>
      <section
        id="hero"
        className="mt-20 pt-24 pb-20 md:pt-20 bg-gradient-hero"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 leading-tight mb-4">
                Grow Your Construction Business{" "}
                <span className="text-primary-600">Digitally</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-6 max-w-lg">
                We help construction companies streamline operations, generate
                leads, and increase revenue through tailored digital marketing
                and web solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="secondary"
                  onClick={openQuoteModal}
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300 shadow-md hover:shadow-lg"
                >
                  Get Your Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="bg-background hover:bg-neutral-50 text-primary-700 border border-primary-300 font-medium py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  See How We Help
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  className="rounded-lg shadow-custom-xl w-full h-auto"
                  src="/assets/hero-construction.jpg"
                  alt="Construction team on site with digital dashboard overlay"
                  width={600}
                  height={400}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
};

export default HeroSection;
