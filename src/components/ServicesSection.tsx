import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Website Development",
      description:
        "Custom, mobile-optimized websites designed to showcase your projects and generate leads.",
      features: [
        "Project galleries & portfolios",
        "Quote request forms",
        "Service area maps",
      ],
    },
    {
      icon: "fa-solid fa-bullhorn",
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to attract and convert your ideal construction clients.",
      features: ["PPC advertising", "Content marketing", "Email campaigns"],
    },
    {
      icon: "fa-solid fa-cart-shopping",
      title: "E-commerce & Inventory",
      description:
        "Online stores and inventory management systems for equipment and materials.",
      features: [
        "Equipment rental systems",
        "Parts ordering portals",
        "Inventory tracking",
      ],
    },
    {
      icon: "fa-solid fa-map-marker-alt",
      title: "Local SEO",
      description:
        "Dominate local search results and attract customers in your service area.",
      features: [
        "Google Business optimization",
        "Local citations",
        "Review management",
      ],
    },
    {
      icon: "fa-solid fa-plug",
      title: "Marketplace Integrations",
      description:
        "Connect your business with industry-specific platforms and marketplaces.",
      features: [
        "Equipment marketplaces",
        "Contractor directories",
        "Supply chain platforms",
      ],
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: "Business Analytics",
      description:
        "Data-driven insights to optimize your operations and marketing efforts.",
      features: ["Performance dashboards", "Lead tracking", "ROI reporting"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-neutral-700">
            Comprehensive digital solutions tailored for the construction
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border shadow-card hover:shadow-hover transition duration-300"
            >
              <div className="text-primary-600 mb-4">
                <i className={`${service.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-700 mb-4">{service.description}</p>
              <ul className="text-neutral-700 mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="fa-solid fa-check text-secondary-500 mt-1 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/services">
            <Button
              variant="default"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg text-center transition duration-300 shadow-md hover:shadow-lg"
            >
              Explore Our Services
            </Button>
          </Link>
          <Button
            variant="outline"
            className="bg-background hover:bg-neutral-50 text-primary-700 border border-primary-300 font-medium py-3 px-8 rounded-lg text-center transition duration-300"
          >
            Talk to a Specialist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
