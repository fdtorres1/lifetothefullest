"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission - in production, this would connect to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            We'd love to hear from you. Please fill out the form below or give us a call to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Please do not include sensitive information in this form; we can discuss details when we contact you. We respond to messages within 1 business day.
              </p>
              
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you within 1 business day.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                  <p>There was an error submitting your message. Please try calling us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  >
                    <option value="">Select a location</option>
                    <option value="oak-brook">Oak Brook</option>
                    <option value="orland-park">Orland Park</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Therapy</option>
                    <option value="couples">Couples Counseling</option>
                    <option value="family">Family Counseling</option>
                    <option value="testing">Psychological Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a90a4] focus:border-[#4a90a4] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p>
                    <a href="tel:630-294-0288" className="text-[#4a90a4] hover:underline font-medium text-lg">
                      (630) 294-0288
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p>
                    <a href="mailto:info@lifetothefullestllc.com" className="text-[#4a90a4] hover:underline">
                      info@lifetothefullestllc.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span className="font-semibold">9:00 am - 8:00 pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday</span>
                        <span className="font-semibold">9:00 am - 7:00 pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-semibold">9:00 am - 5:00 pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Office Addresses */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#4a90a4] mb-2">Oak Brook Office</h3>
                  <p className="text-gray-700 mb-2">2625 Butterfield Rd., Suite 138S</p>
                  <p className="text-gray-700 mb-3">Oak Brook, IL 60523</p>
                  <Link href="/locations/oak-brook" className="text-[#4a90a4] hover:underline text-sm">
                    View location details →
                  </Link>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#4a90a4] mb-2">Orland Park Office</h3>
                  <p className="text-gray-700 mb-2">11512 W. 183rd Pl. SE</p>
                  <p className="text-gray-700 mb-3">Orland Park, IL 60467</p>
                  <Link href="/locations/orland-park" className="text-[#4a90a4] hover:underline text-sm">
                    View location details →
                  </Link>
                </div>
              </div>

              {/* Patient Portal */}
              <div className="bg-[#f0f7f9] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Existing Clients</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Existing clients can log in to the secure Patient Portal to manage appointments or message your therapist.
                </p>
                <a
                  href="#patient-portal"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Please contact us for patient portal access information.");
                  }}
                  className="btn-primary inline-block text-center w-full"
                >
                  Access Patient Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section-padding bg-red-50 border-t border-red-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Emergency Notice</h3>
              <p className="text-gray-700">
                If you are experiencing a crisis or emergency, do not use this form. Please call <strong>911</strong> or visit your nearest emergency room immediately.
              </p>
              <p className="text-gray-700 mt-2">
                For mental health crisis support, you can also call the National Suicide Prevention Lifeline at <a href="tel:988" className="text-[#4a90a4] font-semibold hover:underline">988</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

