import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";

// Lazy load non-critical components
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse" />,
  ssr: true,
});

const WhyChooseSection = dynamic(
  () => import("@/components/WhyChooseSection"),
  {
    loading: () => <div className="h-96 bg-white animate-pulse" />,
    ssr: true,
  }
);

const GallerySection = dynamic(() => import("@/components/GallerySection"), {
  loading: () => <div className="h-96 bg-neutral-50 animate-pulse" />,
  ssr: true,
});

const InsightsSection = dynamic(() => import("@/components/InsightsSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

const ConsultationSection = dynamic(
  () => import("@/components/ConsultationSection"),
  {
    loading: () => <div className="h-96 bg-neutral-50 animate-pulse" />,
    ssr: true,
  }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-neutral-900 animate-pulse" />,
  ssr: true,
});

const MobileCTA = dynamic(() => import("@/components/MobileCTA"), {
  loading: () => <div className="h-16 bg-secondary-500 animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <InsightsSection />
      <ConsultationSection />
      <Footer />
      <MobileCTA />
    </div>
  );
}
