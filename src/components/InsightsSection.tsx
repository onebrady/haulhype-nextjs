import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const InsightsSection = () => {
  const blogPosts = [
    {
      image: "/assets/blog-marketing.jpg",
      date: "June 15, 2023",
      title: "5 Digital Marketing Strategies for Construction Companies",
      description:
        "Learn how to leverage digital channels to generate more leads and grow your construction business in today's competitive market.",
      alt: "Construction marketing digital strategy meeting",
      slug: "digital-marketing-strategies",
    },
    {
      image: "/assets/blog-quoting.jpg",
      date: "May 28, 2023",
      title: "How Digital Quoting Systems Save Time and Win More Projects",
      description:
        "Discover how automating your quoting process can improve accuracy, speed, and conversion rates for your construction business.",
      alt: "Construction worker using digital tablet for quoting",
      slug: "digital-quoting-systems",
    },
    {
      image: "/assets/blog-analytics.jpg",
      date: "April 10, 2023",
      title: "Website Analytics That Matter for Construction Companies",
      description:
        "Focus on the metrics that actually drive business growth and help you make data-driven decisions for your construction company.",
      alt: "Construction website analytics dashboard",
      slug: "website-analytics",
    },
  ];

  return (
    <section id="insights" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
            Construction Industry Insights
          </h2>
          <p className="text-lg text-neutral-700">
            Expert advice and strategies to grow your construction business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border shadow-card overflow-hidden hover:shadow-hover transition duration-300"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block cursor-pointer"
              >
                <Image
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.alt}
                  width={400}
                  height={200}
                />
              </Link>
              <div className="p-6">
                <div className="text-sm text-neutral-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition cursor-pointer"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-neutral-700 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center cursor-pointer"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="default"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Read All Insights
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
