"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal = memo(
  ({ isOpen, onClose }: QuoteRequestModalProps) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      website: "",
      phoneNumber: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
      } else {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    // Memoize event handlers
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      },
      []
    );

    const handleSubmit = useCallback(
      async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Add actual form submission logic here when database is ready
        console.log("Form submitted:", formData);

        setIsSubmitting(false);
        onClose();

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          website: "",
          phoneNumber: "",
        });
      },
      [formData, onClose]
    );

    const handleBackdropClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      },
      [onClose]
    );

    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    // Don't render if not open
    if (!isOpen) return null;

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
          isVisible
            ? "bg-black bg-opacity-50 backdrop-blur-sm"
            : "bg-black bg-opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        <div
          className={`bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300 ease-out transform ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4"
          }`}
        >
          {/* Close Button - Absolute positioned */}
          <button
            onClick={handleClose}
            className="absolute top-1 right-1 text-neutral-400 hover:text-neutral-600 transition-all duration-200 p-2 hover:bg-neutral-100 rounded-lg z-10 hover:scale-110"
            aria-label="Close modal"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Header */}
          <div className="p-4 md:p-6 border-b border-neutral-200">
            <div className="flex-1 min-w-0 pr-12">
              <h2 className="text-xl md:text-2xl font-bold font-heading text-neutral-900">
                Request a Quote
              </h2>
              <p className="text-sm md:text-base text-neutral-600 mt-1">
                Get a customized quote for your construction business
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-6 space-y-4 md:space-y-6"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base hover:border-neutral-400"
                  placeholder="John"
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base hover:border-neutral-400"
                  placeholder="Smith"
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-3 md:px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base hover:border-neutral-400"
                placeholder="ABC Construction Co."
                autoComplete="organization"
              />
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 md:px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base hover:border-neutral-400"
                placeholder="https://www.yourcompany.com"
                autoComplete="url"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 md:px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-base hover:border-neutral-400"
                placeholder="(555) 123-4567"
                autoComplete="tel"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 md:pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-neutral-500 text-center px-2">
              By submitting this form, you agree to our privacy policy and
              consent to being contacted about your quote request.
            </p>
          </form>
        </div>
      </div>
    );
  }
);

QuoteRequestModal.displayName = "QuoteRequestModal";

export default QuoteRequestModal;
