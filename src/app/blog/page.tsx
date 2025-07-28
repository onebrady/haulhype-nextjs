import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Marketing Blog",
  description:
    "Expert insights on construction marketing, digital strategies, and industry trends. Learn how to grow your construction business with our latest articles and tips.",
  keywords: [
    "construction marketing blog",
    "construction digital marketing",
    "construction industry insights",
    "contractor marketing tips",
    "construction SEO blog",
    "construction lead generation",
    "construction business growth",
    "construction marketing strategies",
  ],
  openGraph: {
    title: "Construction Marketing Blog | HaulHype",
    description:
      "Expert insights on construction marketing, digital strategies, and industry trends.",
    url: "https://haulhype.com/blog",
    images: [
      {
        url: "/assets/blog-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Marketing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Marketing Blog | HaulHype",
    description:
      "Expert insights on construction marketing, digital strategies, and industry trends.",
    images: ["/assets/blog-marketing.jpg"],
  },
  alternates: {
    canonical: "https://haulhype.com/blog",
  },
};

const Blog = () => {
  const blogPosts = [
    {
      id: "digital-marketing-strategies",
      title: "Digital Marketing Strategies for Construction Companies",
      excerpt:
        "Discover proven digital marketing strategies that construction companies can use to generate more leads and grow their business in today's competitive market.",
      image: "/assets/blog-marketing.jpg",
      category: "Digital Marketing",
      readTime: "5 min read",
      date: "2024-01-15",
      author: "HaulHype Team",
    },
    {
      id: "digital-quoting-systems",
      title: "Digital Quoting Systems: Streamlining Construction Estimates",
      excerpt:
        "Learn how digital quoting systems can revolutionize your construction business by reducing estimation time and improving accuracy for better project outcomes.",
      image: "/assets/blog-quoting.jpg",
      category: "Technology",
      readTime: "4 min read",
      date: "2024-01-10",
      author: "HaulHype Team",
    },
    {
      id: "website-analytics",
      title:
        "Website Analytics: Understanding Your Construction Business Performance",
      excerpt:
        "Master website analytics to track your construction business performance, understand customer behavior, and make data-driven decisions for growth.",
      image: "/assets/blog-analytics.jpg",
      category: "Analytics",
      readTime: "6 min read",
      date: "2024-01-05",
      author: "HaulHype Team",
    },
  ];

  return (
    <>
      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "HaulHype Construction Marketing Blog",
            description:
              "Expert insights on construction marketing, digital strategies, and industry trends.",
            url: "https://haulhype.com/blog",
            publisher: {
              "@type": "Organization",
              name: "HaulHype",
              url: "https://haulhype.com",
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              author: {
                "@type": "Person",
                name: post.author,
              },
              datePublished: post.date,
              image: `https://haulhype.com${post.image}`,
              url: `https://haulhype.com/blog/${post.id}`,
            })),
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
                <span className="text-primary-600">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
                Expert insights, strategies, and tips to help construction
                businesses thrive in the digital age. Stay ahead with our latest
                articles on construction marketing and industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Blog;
