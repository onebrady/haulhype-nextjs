import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Marketing Services",
  description:
    "Professional construction marketing services including website design, digital marketing, SEO, and e-commerce solutions. Transform your construction business with our tailored digital strategies.",
  keywords: [
    "construction marketing services",
    "construction website design",
    "construction SEO",
    "construction digital marketing",
    "construction e-commerce",
    "contractor marketing",
    "construction lead generation",
    "construction web development",
  ],
  openGraph: {
    title: "Construction Marketing Services | HaulHype",
    description:
      "Professional construction marketing services including website design, digital marketing, SEO, and e-commerce solutions.",
    url: "https://haulhype.com/services",
    images: [
      {
        url: "/assets/services-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Marketing Services | HaulHype",
    description:
      "Professional construction marketing services including website design, digital marketing, SEO, and e-commerce solutions.",
    images: ["/assets/services-hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://haulhype.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
