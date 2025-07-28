import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Digital Marketing Strategies for Construction Companies",
  description:
    "Discover proven digital marketing strategies that construction companies can use to generate more leads and grow their business in today's competitive market.",
  keywords: [
    "construction digital marketing",
    "construction marketing strategies",
    "construction lead generation",
    "contractor marketing",
    "construction SEO",
    "construction PPC",
    "construction social media marketing",
    "construction email marketing",
  ],
  openGraph: {
    title: "Digital Marketing Strategies for Construction Companies | HaulHype",
    description:
      "Discover proven digital marketing strategies that construction companies can use to generate more leads and grow their business in today's competitive market.",
    url: "https://haulhype.com/blog/digital-marketing-strategies",
    type: "article",
    images: [
      {
        url: "/assets/blog-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Strategies for Construction Companies",
      },
    ],
    authors: ["HaulHype Team"],
    publishedTime: "2024-01-15T00:00:00.000Z",
    modifiedTime: "2024-01-15T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Strategies for Construction Companies | HaulHype",
    description:
      "Discover proven digital marketing strategies that construction companies can use to generate more leads and grow their business.",
    images: ["/assets/blog-marketing.jpg"],
  },
  alternates: {
    canonical: "https://haulhype.com/blog/digital-marketing-strategies",
  },
};

const BlogPost1 = () => {
  return (
    <>
      {/* Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Digital Marketing Strategies for Construction Companies",
            description:
              "Discover proven digital marketing strategies that construction companies can use to generate more leads and grow their business in today's competitive market.",
            image: "https://haulhype.com/assets/blog-marketing.jpg",
            author: {
              "@type": "Person",
              name: "HaulHype Team",
            },
            publisher: {
              "@type": "Organization",
              name: "HaulHype",
              url: "https://haulhype.com",
            },
            datePublished: "2024-01-15T00:00:00.000Z",
            dateModified: "2024-01-15T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://haulhype.com/blog/digital-marketing-strategies",
            },
            articleSection: "Digital Marketing",
            keywords:
              "construction digital marketing, construction marketing strategies, construction lead generation",
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Article Header */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Digital Marketing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 mb-6">
                Digital Marketing Strategies for Construction Companies
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8">
                Discover proven digital marketing strategies that construction
                companies can use to generate more leads and grow their business
                in today&apos;s competitive market.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <span>By HaulHype Team</span>
                <span>•</span>
                <span>January 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/assets/blog-marketing.jpg"
                  alt="Digital Marketing Strategies for Construction Companies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              <article className="prose prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  In today&apos;s digital age, construction companies need more
                  than just traditional marketing methods to stay competitive.
                  Digital marketing offers construction businesses powerful
                  tools to reach their target audience, generate qualified
                  leads, and grow their revenue.
                </p>

                <h2>Why Digital Marketing Matters for Construction</h2>
                <p>
                  The construction industry is increasingly going digital, with
                  more decision-makers researching contractors and services
                  online before making purchasing decisions. A strong digital
                  presence is no longer optional—it&apos;s essential for
                  business growth.
                </p>

                <h2>Key Digital Marketing Strategies</h2>

                <h3>1. Search Engine Optimization (SEO)</h3>
                <p>
                  Local SEO is crucial for construction companies. Optimize your
                  website for local search terms like &quot;construction
                  services in [city]&quot; and &quot;contractors near me.&quot;
                  This helps you appear in local search results and Google Maps.
                </p>

                <h3>2. Pay-Per-Click (PPC) Advertising</h3>
                <p>
                  Google Ads and social media advertising can deliver immediate
                  results. Target specific keywords related to your services and
                  geographic areas to reach potential customers actively
                  searching for construction services.
                </p>

                <h3>3. Content Marketing</h3>
                <p>
                  Create valuable content that addresses your customers&apos;
                  pain points. Blog posts, case studies, and project showcases
                  demonstrate your expertise and help establish trust with
                  potential clients.
                </p>

                <h3>4. Social Media Marketing</h3>
                <p>
                  Platforms like LinkedIn, Facebook, and Instagram are excellent
                  for showcasing your work, sharing industry insights, and
                  connecting with potential clients and partners.
                </p>

                <h3>5. Email Marketing</h3>
                <p>
                  Build and nurture relationships with prospects and existing
                  clients through targeted email campaigns. Share project
                  updates, industry news, and special offers to stay
                  top-of-mind.
                </p>

                <h2>Measuring Success</h2>
                <p>
                  Track key metrics like website traffic, lead generation,
                  conversion rates, and ROI to measure the effectiveness of your
                  digital marketing efforts and optimize your strategies
                  accordingly.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Digital marketing offers construction companies unprecedented
                  opportunities to reach their target audience and grow their
                  business. By implementing these strategies consistently, you
                  can build a strong online presence and generate more qualified
                  leads for your construction business.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default BlogPost1;
