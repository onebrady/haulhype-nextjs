"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Image from "next/image";
import Link from "next/link";

import {
  Globe,
  TrendingUp,
  ShoppingCart,
  MapPin,
  Network,
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "website",
      name: "Website Design",
      shortName: "Websites",
      icon: Globe,
      color: "blue",
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-200",
      buttonColor:
        "bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-300",
      accentColor: "text-blue-600",
      cardBg: "from-blue-50 to-blue-100",
      description:
        "Fast-loading, mobile-first websites optimized for lead generation and inventory visibility, designed specifically for construction businesses.",
      features: [
        "Mobile-responsive design",
        "Lead capture optimization",
        "Project portfolio showcase",
        "Fast loading times",
      ],
    },
    {
      id: "marketing",
      name: "Digital Marketing Strategy",
      shortName: "Marketing",
      icon: TrendingUp,
      color: "emerald",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200",
      buttonColor:
        "bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-emerald-300",
      accentColor: "text-emerald-600",
      cardBg: "from-emerald-50 to-emerald-100",
      description:
        "Multi-channel campaigns including email, remarketing, and paid search specifically tailored to reach construction buyers and decision-makers.",
      features: [
        "Targeted PPC campaigns",
        "Email marketing automation",
        "Social media strategy",
        "Content marketing",
      ],
    },
    {
      id: "ecommerce",
      name: "E-commerce & Inventory Solutions",
      shortName: "E-commerce",
      icon: ShoppingCart,
      color: "purple",
      bgColor: "bg-purple-50/50",
      borderColor: "border-purple-200",
      buttonColor:
        "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300",
      accentColor: "text-purple-600",
      cardBg: "from-purple-50 to-purple-100",
      description:
        "Custom tools for online inventory management, quote integration, lead tracking, and dealership automation tailored for construction equipment.",
      features: [
        "Inventory management systems",
        "Quote request integration",
        "Lead tracking tools",
        "Automated workflows",
      ],
    },
    {
      id: "seo",
      name: "Local SEO Optimization",
      shortName: "Local SEO",
      icon: MapPin,
      color: "amber",
      bgColor: "bg-amber-50/50",
      borderColor: "border-amber-200",
      buttonColor:
        "bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300",
      accentColor: "text-amber-600",
      cardBg: "from-amber-50 to-amber-100",
      description:
        "Local search optimization to help construction businesses appear in local search results and Google Maps for their service areas.",
      features: [
        "Google My Business optimization",
        "Local citation management",
        "Review management",
        "Local keyword targeting",
      ],
    },
    {
      id: "marketplace",
      name: "Marketplace Integration",
      shortName: "Marketplace",
      icon: Network,
      color: "indigo",
      bgColor: "bg-indigo-50/50",
      borderColor: "border-indigo-200",
      buttonColor:
        "bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border-indigo-300",
      accentColor: "text-indigo-600",
      cardBg: "from-indigo-50 to-indigo-100",
      description:
        "Integration with construction marketplaces and platforms to expand your reach and connect with more potential customers.",
      features: [
        "Equipment marketplace integration",
        "Contractor directory listings",
        "Supply chain platform connections",
        "Cross-platform inventory sync",
      ],
    },
    {
      id: "analytics",
      name: "Business Analytics & Reporting",
      shortName: "Analytics",
      icon: Bot,
      color: "slate",
      bgColor: "bg-slate-50/50",
      borderColor: "border-slate-200",
      buttonColor:
        "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300",
      accentColor: "text-slate-600",
      cardBg: "from-slate-50 to-slate-100",
      description:
        "Comprehensive analytics and reporting to track performance, measure ROI, and make data-driven decisions for your construction business.",
      features: [
        "Performance dashboards",
        "Lead tracking analytics",
        "ROI measurement",
        "Custom reporting",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Marketing Services",
            description:
              "Professional construction marketing services including website design, digital marketing, SEO, and e-commerce solutions.",
            provider: {
              "@type": "Organization",
              name: "HaulHype",
              url: "https://haulhype.com",
            },
            serviceType: "Construction Marketing",
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Construction Marketing Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 mb-6">
                Construction Marketing{" "}
                <span className="text-primary-600">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
                Comprehensive digital marketing and web development solutions
                specifically designed for construction businesses. From website
                design to lead generation, we help you grow your construction
                business online.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={() => scrollToSection("services-grid")}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  className="bg-background hover:bg-neutral-50 text-primary-700 border border-primary-300 font-medium py-3 px-8 rounded-lg transition duration-300"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) =>
                service.id === "website" ? (
                  <Link
                    key={service.id}
                    href="/services/website-design"
                    className="group"
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      className={`border-2 ${service.borderColor} hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer group`}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <service.icon
                            className={`w-6 h-6 ${service.accentColor}`}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                          {service.name}
                        </h3>
                        <p className="text-neutral-700 mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-neutral-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card
                    key={service.id}
                    className={`border-2 ${service.borderColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon
                          className={`w-6 h-6 ${service.accentColor}`}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-neutral-700 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-neutral-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className={`w-full ${service.buttonColor} transition-all duration-300 group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Construction Business?
              </h2>
              <p className="text-lg text-primary-100 mb-8">
                Get started with our construction marketing services and see
                results in as little as 30 days.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-primary-700 hover:bg-neutral-100 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary-700 font-medium py-3 px-8 rounded-lg transition duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Services;
