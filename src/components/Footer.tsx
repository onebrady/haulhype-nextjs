import Link from "next/link";

const Footer = () => {
  const services = [
    "Website Development",
    "Digital Marketing",
    "E-commerce Solutions",
    "Local SEO",
    "Marketplace Integrations",
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="inline-block mb-6 cursor-pointer">
              <span className="text-2xl font-bold font-heading">
                Haul<span className="text-secondary-500">Hype</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6">
              Specialized digital marketing and web development for the
              construction industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#why-choose"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-secondary-500"></i>
                <span className="text-neutral-400">
                  123 Construction Ave, Suite 200
                  <br />
                  Portland, OR 97201
                </span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-secondary-500"></i>
                <a
                  href="tel:(555) 123-4567"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-secondary-500"></i>
                <a
                  href="mailto:info@haulhype.com"
                  className="text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  info@haulhype.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © 2025 HaulHype. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-neutral-500 hover:text-white text-sm transition cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white text-sm transition cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white text-sm transition cursor-pointer"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
