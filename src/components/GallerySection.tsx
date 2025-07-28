import { Button } from "@/components/ui/button";
import Image from "next/image";

const GallerySection = () => {
  const testimonials = [
    {
      quote:
        "HaulHype transformed our online presence completely. Their understanding of the construction industry made all the difference. We&apos;ve seen a 200% increase in qualified leads since working with them.",
      name: "Michael Rodriguez",
      title: "CEO, Rodriguez Construction",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "The digital quoting system HaulHype built for us has cut our estimation time by 75% and improved our close rate. Their team truly understands the unique challenges of the construction industry.",
      name: "Sarah Johnson",
      title: "Operations Manager, Johnson Builders",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const clientLogos = [
    {
      name: "SteelCore Construction",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <rect x="10" y="15" width="20" height="30" rx="2" />
          <rect x="35" y="10" width="20" height="40" rx="2" />
          <rect x="60" y="20" width="20" height="20" rx="2" />
          <rect x="85" y="15" width="20" height="30" rx="2" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            STEELCORE
          </text>
        </svg>
      ),
    },
    {
      name: "BuildRight Solutions",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <path d="M20 40 L40 20 L60 40 L80 20 L100 40" />
          <rect x="15" y="45" width="90" height="8" rx="4" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            BUILDRIGHT
          </text>
        </svg>
      ),
    },
    {
      name: "Foundation First",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <rect x="20" y="35" width="80" height="15" rx="2" />
          <rect x="30" y="25" width="60" height="10" rx="2" />
          <rect x="40" y="15" width="40" height="10" rx="2" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            FOUNDATION
          </text>
        </svg>
      ),
    },
    {
      name: "Precision Builders",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <circle cx="30" cy="30" r="15" />
          <circle cx="60" cy="30" r="15" />
          <circle cx="90" cy="30" r="15" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            PRECISION
          </text>
        </svg>
      ),
    },
    {
      name: "Elite Contractors",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <polygon points="60,10 80,30 60,50 40,30" />
          <rect x="25" y="25" width="70" height="10" rx="5" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            ELITE
          </text>
        </svg>
      ),
    },
    {
      name: "Summit Construction",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 120 60" fill="currentColor">
          <polygon points="30,40 45,25 60,40 75,25 90,40" />
          <rect x="20" y="45" width="80" height="8" rx="4" />
          <text x="60" y="55" textAnchor="middle" className="text-xs font-bold">
            SUMMIT
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
            Our Work in Action
          </h2>
          <p className="text-lg text-neutral-700">
            See how we&apos;ve helped construction businesses transform their
            digital presence.
          </p>
        </div>

        {/* Client Logo Wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group"
              title={logo.name}
            >
              <div className="w-20 h-12 text-neutral-400 group-hover:text-primary-600 transition-colors duration-300">
                {logo.svg}
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border border-border shadow-card overflow-hidden">
            <div className="mb-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/website-transformation.jpg"
                  alt="Construction company website transformation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Website Transformation
              </h3>
              <p className="text-neutral-700">
                Redesigned the website for ABC Construction, resulting in a 150%
                increase in lead generation within 3 months.
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-card overflow-hidden">
            <div className="mb-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/marketing-dashboard.jpg"
                  alt="Digital marketing dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Digital Marketing Campaign
              </h3>
              <p className="text-neutral-700">
                Implemented a targeted PPC campaign for XYZ Builders that
                delivered 45 qualified leads in the first month.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border shadow-card"
            >
              <div className="flex items-center mb-6">
                <div className="text-secondary-500 mr-4">
                  <i className="fa-solid fa-quote-left text-3xl"></i>
                </div>
                <div>
                  <div className="text-yellow-400 flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-700 italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
