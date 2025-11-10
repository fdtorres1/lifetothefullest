import Link from "next/link";
import type { Metadata } from "next";
import { User, Heart, Users, UtensilsCrossed, Brain, Flower, CheckCircle2, Sparkles, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Life to the Fullest LLC | Therapy & Counseling in Oak Brook & Orland Park, IL",
  description: "Welcome to Life to the Fullest, where our goal is to help you uncover your true potential and lead a life worth celebrating. Professional therapy services in Oak Brook and Orland Park, Illinois.",
  openGraph: {
    title: "Life to the Fullest LLC | Therapy & Counseling in Oak Brook & Orland Park, IL",
    description: "Professional therapy and counseling services in Oak Brook and Orland Park, Illinois.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life to the Fullest LLC | Therapy & Counseling",
    description: "Professional therapy services in Oak Brook and Orland Park, Illinois.",
  },
};

// Service data extracted for better maintainability
const services = [
  { 
    title: "Individual Therapy", 
    desc: "Personalized treatment for anxiety, depression, eating disorders, and more", 
    Icon: User,
    href: "/services#individual-therapy"
  },
  { 
    title: "Couples Counseling", 
    desc: "Help partners improve communication, rebuild trust, and navigate conflicts", 
    Icon: Heart,
    href: "/services#couples-counseling"
  },
  { 
    title: "Family Counseling", 
    desc: "Supporting families through challenges and strengthening relationships", 
    Icon: Users,
    href: "/services#family-counseling"
  },
  { 
    title: "Eating Disorders", 
    desc: "Specialized treatment for eating disorders and body image concerns", 
    Icon: UtensilsCrossed,
    href: "/services#eating-disorders"
  },
  { 
    title: "ADHD Assessments", 
    desc: "Comprehensive psychological testing for children and adults", 
    Icon: Brain,
    href: "/services#adhd-assessments"
  },
  { 
    title: "Grief Counseling", 
    desc: "Compassionate support during times of loss and transition", 
    Icon: Flower,
    href: "/services#grief-counseling"
  },
] as const;

const trustIndicators = [
  { text: "Licensed Professionals", Icon: Shield },
  { text: "Personalized Approach", Icon: Sparkles },
  { text: "Safe & Supportive Environment", Icon: CheckCircle2 },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative text-white section-padding overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')`,
            // Fallback gradient if image doesn't load
            backgroundColor: '#4F8FE6'
          }}
        >
          {/* Slate/gray-blue overlay for text readability */}
          <div className="absolute inset-0 bg-slate-800/75"></div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {/* Large circle - top right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          {/* Medium circle - bottom left */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          {/* Small circle - center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Today you are one step closer to a new you
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 drop-shadow-md">
              Where you feel empowered and on a positive path to growth and well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[#3D7BD6] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#4F8FE6] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4F8FE6] focus:outline-none transform hover:scale-105"
                aria-label="Request an appointment"
              >
                Request Appointment
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4F8FE6] focus:outline-none transform hover:scale-105"
                aria-label="Learn more about our practice"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="welcome-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="welcome-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Welcome to Life to the Fullest
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4F8FE6] to-[#FF7B7B] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-800 font-light">
                Our goal is to help you uncover your true potential and lead a life worth celebrating. We provide a comfortable, supportive atmosphere and a highly personalized approach for individuals, couples, and families.
              </p>
              <p className="text-lg text-gray-700">
                While we can't change difficult situations of the past, we can work together to better understand and resolve challenges in your life. By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link 
                href="/about" 
                className="text-[#4F8FE6] font-semibold hover:text-[#3D7BD6] inline-flex items-center gap-2 transition-colors group"
                aria-label="Read more about our therapeutic approach"
              >
                Read more about our approach
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We offer comprehensive counseling services tailored to your unique needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5BA8B8] to-[#6BB8C8] mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.Icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#4F8FE6]/20 transition-all duration-300 hover:-translate-y-2 group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4F8FE6]/10 to-[#FF7B7B]/5 group-hover:from-[#4F8FE6]/20 group-hover:to-[#FF7B7B]/10 transition-all duration-300">
                      <IconComponent 
                        className="w-8 h-8 text-[#4F8FE6] group-hover:scale-110 transition-transform duration-300" 
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4F8FE6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 bg-[#4F8FE6] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#3D7BD6] transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4F8FE6] focus:ring-offset-2"
              aria-label="View all our services"
            >
              View All Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Teaser */}
      <section className="section-padding bg-gradient-to-b from-gray-50/50 to-white" aria-labelledby="locations-heading">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#f0f9fb] via-white to-[#f8fcfe] rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <h2 id="locations-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Now Serving DuPage and Will County
              </h2>
              <p className="text-xl text-gray-700 font-light">
                Convenient locations in Oak Brook and Orland Park to serve you better
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4F8FE6] to-[#FF7B7B] mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#4F8FE6]/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#4F8FE6] mb-5">Oak Brook Office</h3>
                <address className="not-italic text-gray-700 mb-5 space-y-1">
                  <p className="font-medium">2625 Butterfield Rd., Suite 138S</p>
                  <p>Oak Brook, IL 60523</p>
                </address>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Serving clients from Oak Brook, Hinsdale, Glen Ellyn, Downers Grove, Elmhurst, Lombard, and surrounding areas in DuPage County.
                </p>
                <Link 
                  href="/locations/oak-brook" 
                  className="text-[#4F8FE6] font-semibold hover:text-[#3D7BD6] inline-flex items-center gap-2 transition-colors group"
                  aria-label="Learn more about our Oak Brook location"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#4F8FE6]/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#4F8FE6] mb-5">Orland Park Office</h3>
                <address className="not-italic text-gray-700 mb-5 space-y-1">
                  <p className="font-medium">11512 W. 183rd Pl. SE</p>
                  <p>Orland Park, IL 60467</p>
                </address>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Providing counseling for residents of Orland Park, Tinley Park, New Lenox, Frankfort, Lockport, and surrounding communities in Will County.
                </p>
                <Link 
                  href="/locations/orland-park" 
                  className="text-[#4F8FE6] font-semibold hover:text-[#3D7BD6] inline-flex items-center gap-2 transition-colors group"
                  aria-label="Learn more about our Orland Park location"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-white" aria-labelledby="trust-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="trust-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Licensed Clinical Psychologists & Counselors
            </h2>
            <p className="text-xl text-gray-700 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Our team of experienced therapists is dedicated to providing compassionate, evidence-based care. We understand it takes courage to seek help, and we're here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-gray-700">
              {trustIndicators.map((indicator) => {
                const IconComponent = indicator.Icon;
                return (
                  <div key={indicator.text} className="flex flex-col items-center gap-3 group">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4F8FE6]/10 to-[#FF7B7B]/5 group-hover:from-[#4F8FE6]/20 group-hover:to-[#FF7B7B]/10 transition-all duration-300">
                      <IconComponent 
                        className="w-7 h-7 text-[#4F8FE6]" 
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-medium text-gray-800">{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#4F8FE6] text-white" aria-labelledby="cta-heading">
        <div className="container-custom text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            We're here to help you on your journey to a more fulfilling life. Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#4A9B9D] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#5BA8B8] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5BA8B8] focus:outline-none transform hover:scale-105"
              aria-label="Contact us to schedule a consultation"
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5BA8B8] focus:outline-none transform hover:scale-105"
              aria-label="Request an appointment"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
