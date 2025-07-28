"use client";

import { useEffect } from "react";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Type for layout shift entry
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Type for first input entry
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

// Type for resource entry
interface ResourceEntry extends PerformanceEntry {
  initiatorType: string;
  duration: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const trackLCP = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            console.log("LCP:", lastEntry.startTime);
            // Send to analytics service
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "LCP",
                value: Math.round(lastEntry.startTime),
              });
            }
          }
        });
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      };

      // FID (First Input Delay)
      const trackFID = () => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as FirstInputEntry;
            console.log(
              "FID:",
              firstInputEntry.processingStart - firstInputEntry.startTime
            );
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "FID",
                value: Math.round(
                  firstInputEntry.processingStart - firstInputEntry.startTime
                ),
              });
            }
          });
        });
        observer.observe({ entryTypes: ["first-input"] });
      };

      // CLS (Cumulative Layout Shift)
      const trackCLS = () => {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          console.log("CLS:", clsValue);
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "CLS",
              value: Math.round(clsValue * 1000) / 1000,
            });
          }
        });
        observer.observe({ entryTypes: ["layout-shift"] });
      };

      // Track all metrics
      trackLCP();
      trackFID();
      trackCLS();
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded =
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart;

          console.log("Page Load Time:", loadTime);
          console.log("DOM Content Loaded:", domContentLoaded);

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "timing_complete", {
              name: "load",
              value: Math.round(loadTime),
            });
          }
        }
      });
    };

    // Track resource loading
    const trackResourceLoading = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resourceEntry = entry as ResourceEntry;
          if (
            resourceEntry.initiatorType === "img" ||
            resourceEntry.initiatorType === "css" ||
            resourceEntry.initiatorType === "script"
          ) {
            console.log(
              `${resourceEntry.initiatorType} load time:`,
              resourceEntry.duration
            );
          }
        });
      });
      observer.observe({ entryTypes: ["resource"] });
    };

    // Initialize tracking
    trackWebVitals();
    trackPageLoad();
    trackResourceLoading();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
