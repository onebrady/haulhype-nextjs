"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast(
      "Thank you for your interest! We'll get back to you within 24 hours to schedule your free consultation."
    );
    // Reset form
    setFormData({
      name: "",
      business: "",
      email: "",
      phone: "",
      message: "",
      newsletter: false,
    });
  };

  return (
    <section
      id="consultation"
      className="py-20 md:py-32 bg-gradient-cta text-white"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Let&apos;s Grow Your Construction Business
            </h2>
            <p className="text-lg text-primary-100">
              Schedule your free consultation to discuss how we can help you
              achieve your goals.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-custom-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="business"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Business Name
                  </Label>
                  <Input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Smith Construction"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@smithconstruction.com"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="block text-neutral-700 font-medium mb-2"
                  >
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label
                  htmlFor="message"
                  className="block text-neutral-700 font-medium mb-2"
                >
                  How can we help?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your project or challenges..."
                />
              </div>

              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        newsletter: !!checked,
                      }))
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-sm text-neutral-700 leading-relaxed"
                  >
                    I&apos;d like to receive marketing emails with industry
                    insights and tips. You can unsubscribe at any time.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Get My Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
