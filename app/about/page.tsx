import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import { staffMembers } from "@/lib/staff";

export const metadata: Metadata = {
  title: "About Us | Life to the Fullest LLC - Our Philosophy & Team",
  description: "Learn about Life to the Fullest LLC's therapeutic approach, philosophy, and our team of licensed clinical psychologists and counselors serving Oak Brook and Orland Park, Illinois.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Our mission is to help you uncover your true potential and lead a life worth celebrating.
          </p>
        </div>
      </section>

      {/* Philosophy & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Philosophy & Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                At Life to the Fullest, we believe that you are the expert on your own life. Our role is to help you navigate your unique situation with better coping skills and fulfillment. While we can't change difficult situations of the past, we can work together to better understand and resolve challenges in your life.
              </p>
              <p>
                By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
              </p>
              <p>
                We understand it takes courage to seek help, and we admire your strength in taking this step. Our goal is to provide a comfortable, supportive atmosphere where you can explore your thoughts and feelings without judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Therapeutic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-4">Personalized Care</h3>
                <p className="text-gray-700">
                  We offer a highly personalized approach tailored to each client's unique needs. No two people are the same, and neither should their therapy be.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-4">Comfortable Environment</h3>
                <p className="text-gray-700">
                  Our offices provide a safe, welcoming space where you can feel comfortable sharing your thoughts and working toward your goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-4">Collaborative Process</h3>
                <p className="text-gray-700">
                  Therapy is a collaborative journey. We work together with you, respecting your expertise on your own life while providing professional guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-4">Evidence-Based Methods</h3>
                <p className="text-gray-700">
                  We utilize proven therapeutic approaches and techniques that have been shown to be effective in helping people overcome challenges and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Our therapists are experienced, licensed professionals dedicated to helping you achieve your goals. Each member of our team brings unique expertise and a shared commitment to compassionate, effective care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
                  aria-label={`Learn more about ${member.name}`}
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                    <User className="w-16 h-16 text-gray-500 group-hover:text-gray-600 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:text-[#4a90a4] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{member.credentials}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.summary}
                  </p>
                  <p className="text-[#4a90a4] font-semibold text-sm mt-4 text-center group-hover:underline">
                    Read more →
                  </p>
                </Link>
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-8 italic text-sm">
              * Professional photos coming soon. Please contact us to learn more about our therapists and find the right fit for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Choose Life to the Fullest?</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Comprehensive Services</h3>
                <p className="text-gray-700">
                  We offer a wide range of counseling services under one roof, from individual therapy to couples counseling, family therapy, and psychological testing. This means you can find the support you need without having to look elsewhere.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Convenient Locations</h3>
                <p className="text-gray-700">
                  With offices in both Oak Brook and Orland Park, we're easily accessible to clients throughout DuPage and Will Counties. We serve communities including Hinsdale, Downers Grove, Tinley Park, and many more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Experienced Professionals</h3>
                <p className="text-gray-700">
                  Our team consists of licensed clinical psychologists and counselors with years of experience treating a variety of mental health concerns. We stay current with the latest research and therapeutic techniques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Client-Centered Care</h3>
                <p className="text-gray-700">
                  We strive to make every client feel heard, understood, and supported from the very first session. Your goals and values guide our work together, and we're committed to helping you achieve the outcomes that matter most to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#4a90a4] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            We'd love to learn more about you and how we can help. Contact us today to schedule a consultation.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#4a90a4] hover:bg-blue-50 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
