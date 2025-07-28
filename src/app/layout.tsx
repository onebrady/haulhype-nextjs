import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haulhype.com"),
  title: {
    default: "HaulHype - Construction Marketing & Web Development",
    template: "%s | HaulHype",
  },
  description:
    "Transform your construction business with professional marketing and web development services. Get more leads, showcase your work, and grow your business with our tailored digital solutions.",
  keywords: [
    "construction marketing",
    "web development",
    "construction website",
    "digital marketing",
    "construction business",
    "construction SEO",
    "contractor marketing",
    "construction lead generation",
    "construction web design",
    "construction digital agency",
  ],
  authors: [{ name: "HaulHype", url: "https://haulhype.com" }],
  creator: "HaulHype",
  publisher: "HaulHype",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haulhype.com",
    siteName: "HaulHype",
    title: "HaulHype - Construction Marketing & Web Development",
    description:
      "Transform your construction business with professional marketing and web development services. Get more leads, showcase your work, and grow your business.",
    images: [
      {
        url: "/assets/hero-construction.jpg",
        width: 1200,
        height: 630,
        alt: "HaulHype - Construction Marketing & Web Development",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaulHype - Construction Marketing & Web Development",
    description:
      "Transform your construction business with professional marketing and web development services.",
    images: ["/assets/hero-construction.jpg"],
    creator: "@haulhype",
    site: "@haulhype",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://haulhype.com",
    languages: {
      "en-US": "https://haulhype.com",
    },
  },
  category: "construction marketing",
  classification: "construction digital marketing agency",
  other: {
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "HaulHype",
    "application-name": "HaulHype",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/favicon.ico",
    "msapplication-TileImage:144x144": "/favicon.ico",
    "msapplication-TileImage:150x150": "/favicon.ico",
    "msapplication-TileImage:310x150": "/favicon.ico",
    "msapplication-TileImage:310x310": "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/assets/hero-construction.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HaulHype",
              url: "https://haulhype.com",
              logo: "https://haulhype.com/logo.png",
              description:
                "Professional construction marketing and web development services",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.linkedin.com/company/haulhype",
                "https://www.facebook.com/haulhype",
                "https://twitter.com/haulhype",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
