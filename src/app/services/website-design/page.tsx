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
  Smartphone,
  Zap,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Search,
  Palette,
  Code,
  Rocket,
  Target,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";

const WebsiteDesign = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive websites that look and work perfectly on all devices, from smartphones to desktops.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed with fast loading times that keep visitors engaged and improve search rankings.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Lead Generation Focused",
      description:
        "Strategic placement of contact forms, CTAs, and lead capture elements to maximize conversions.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description:
        "Built-in tracking and analytics to monitor performance and understand visitor behavior.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Security & Reliability",
      description:
        "Secure hosting, SSL certificates, and regular backups to protect your business and data.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description:
        "Search engine optimized structure and content to improve visibility in search results.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, and competitors to create a strategic website plan.",
      details: [
        "Business analysis and goal setting",
        "Competitor research and analysis",
        "Target audience identification",
        "Content strategy development",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design & Wireframing",
      description:
        "Our designers create beautiful, user-friendly layouts that reflect your brand and drive conversions.",
      details: [
        "Wireframe and mockup creation",
        "Brand integration and styling",
        "User experience optimization",
        "Mobile-responsive design",
      ],
      color: "bg-purple-500",
    },
    {
      icon: Code,
      number: "03",
      title: "Development & Testing",
      description:
        "We build your website using modern technologies and thoroughly test across all devices and browsers.",
      details: [
        "Frontend and backend development",
        "Cross-browser compatibility testing",
        "Performance optimization",
        "Security implementation",
      ],
      color: "bg-green-500",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch & Training",
      description:
        "We launch your website and provide training on how to manage and update your content.",
      details: [
        "Final testing and quality assurance",
        "Website deployment and launch",
        "Content management training",
        "Ongoing support and maintenance",
      ],
      color: "bg-orange-500",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Professional Online Presence",
      description: "Builds trust and credibility with potential clients",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Capture leads even when you're not available",
    },
    {
      icon: Award,
      title: "Showcase Your Expertise",
      description: "Effectively display your projects and capabilities",
    },
    {
      icon: TrendingUp,
      title: "Generate Qualified Leads",
      description: "Strategic design to capture and convert visitors",
    },
    {
      icon: Users,
      title: "Improve Customer Service",
      description: "Provide online resources and information",
    },
    {
      icon: Shield,
      title: "Competitive Advantage",
      description: "Stay ahead of businesses without websites",
    },
  ];

  const stats = [
    { number: "95%", label: "Mobile Responsive" },
    { number: "< 2s", label: "Load Time" },
    { number: "100%", label: "SEO Optimized" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <>
      {/* Structured Data for Website Design Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Design for Construction Companies",
            description:
              "Professional website design services for construction businesses, including mobile-responsive design, lead generation optimization, and SEO integration.",
            provider: {
              "@type": "Organization",
              name: "HaulHype",
              url: "https://haulhype.com",
            },
            serviceType: "Website Design",
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Website Design Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile-Responsive Design",
                    description: "Websites that work perfectly on all devices",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Lead Generation Optimization",
                    description:
                      "Strategic design to capture and convert leads",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Integration",
                    description: "Search engine optimized websites",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Enhanced Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Professional Website Design
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 mb-6">
                Transform Your Business with a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Website
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                We create stunning, mobile-first websites that generate leads,
                showcase your work, and build trust with potential clients. Our
                strategic approach ensures your website works as hard as you do.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-neutral-50 text-blue-700 border-2 border-blue-300 hover:border-blue-400 font-medium py-4 px-8 rounded-lg transition duration-300 shadow-md"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-4 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-neutral-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
              <Link
                href="/services"
                className="text-neutral-600 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
              <span className="text-blue-600 font-medium">Website Design</span>
            </nav>
          </div>
        </section>

        {/* Enhanced Features Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                Why Choose Our{" "}
                <span className="text-blue-600">Website Design?</span>
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                We specialize in creating websites that are not just beautiful,
                but strategically designed to grow your construction business
                and drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <CardContent className="p-8 relative">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-700 text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                Our{" "}
                <span className="text-blue-600">Website Design Process</span>
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                We follow a proven, transparent process to deliver exceptional
                websites that drive real results for construction businesses.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Timeline Process */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full hidden lg:block"></div>

                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"></div>

                      {/* Content Card */}
                      <div
                        className={`w-full lg:w-5/12 ${
                          index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                        }`}
                      >
                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group">
                          <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                              <div
                                className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center shadow-lg`}
                              >
                                <step.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-blue-600 mb-1">
                                  Step {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900">
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="space-y-3">
                              {step.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-start"
                                >
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-neutral-600">
                                    {detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                    Benefits of a{" "}
                    <span className="text-blue-600">Professional Website</span>
                  </h2>
                  <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                    A well-designed website is more than just an online
                    presence—it&apos;s a powerful tool that can transform how
                    your construction business operates and grows.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                          <benefit.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/hero-construction.jpg"
                      alt="Professional website design for construction companies"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">
                          Ready to Get Started?
                        </h4>
                        <p className="text-sm text-neutral-600 mb-3">
                          Let&apos;s discuss how we can transform your
                          construction business with a professional website.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Construction Business?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Get started with our professional website design services and
                see results in as little as 2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-blue-700 hover:bg-neutral-100 font-medium py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-700 font-medium py-4 px-8 rounded-lg transition duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <MobileCTA />
    </>
  );
};

export default WebsiteDesign;
