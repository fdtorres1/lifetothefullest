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
            backgroundColor: '#4a90a4'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a7282]/92 via-[#4a90a4]/90 to-[#3a7282]/92"></div>
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
                className="bg-white text-[#3a7282] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#4a90a4] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none transform hover:scale-105"
                aria-label="Request an appointment"
              >
                Request Appointment
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none transform hover:scale-105"
                aria-label="Learn more about our practice"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white" aria-labelledby="welcome-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="welcome-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Life to the Fullest
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our goal is to help you uncover your true potential and lead a life worth celebrating. We provide a comfortable, supportive atmosphere and a highly personalized approach for individuals, couples, and families.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              While we can't change difficult situations of the past, we can work together to better understand and resolve challenges in your life. By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
            </p>
            <Link 
              href="/about" 
              className="text-[#4a90a4] font-semibold hover:underline inline-flex items-center gap-1"
              aria-label="Read more about our therapeutic approach"
            >
              Read more about our approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive counseling services tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.Icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="mb-4 flex justify-center">
                    <IconComponent 
                      className="w-12 h-12 text-[#4a90a4] group-hover:scale-110 transition-transform duration-200" 
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4a90a4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/services" 
              className="btn-primary"
              aria-label="View all our services"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Teaser */}
      <section className="section-padding bg-white" aria-labelledby="locations-heading">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#f0f7f9] to-[#e8f4f7] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 id="locations-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Now Serving DuPage and Will County
              </h2>
              <p className="text-lg text-gray-700">
                Convenient locations in Oak Brook and Orland Park to serve you better
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-[#4a90a4] mb-4">Oak Brook Office</h3>
                <address className="not-italic text-gray-700 mb-4">
                  <p>2625 Butterfield Rd., Suite 138S</p>
                  <p>Oak Brook, IL 60523</p>
                </address>
                <p className="text-sm text-gray-600 mb-4">
                  Serving clients from Oak Brook, Hinsdale, Glen Ellyn, Downers Grove, Elmhurst, Lombard, and surrounding areas in DuPage County.
                </p>
                <Link 
                  href="/locations/oak-brook" 
                  className="text-[#4a90a4] font-semibold hover:underline inline-flex items-center gap-1"
                  aria-label="Learn more about our Oak Brook location"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-[#4a90a4] mb-4">Orland Park Office</h3>
                <address className="not-italic text-gray-700 mb-4">
                  <p>11512 W. 183rd Pl. SE</p>
                  <p>Orland Park, IL 60467</p>
                </address>
                <p className="text-sm text-gray-600 mb-4">
                  Providing counseling for residents of Orland Park, Tinley Park, New Lenox, Frankfort, Lockport, and surrounding communities in Will County.
                </p>
                <Link 
                  href="/locations/orland-park" 
                  className="text-[#4a90a4] font-semibold hover:underline inline-flex items-center gap-1"
                  aria-label="Learn more about our Orland Park location"
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50" aria-labelledby="trust-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Licensed Clinical Psychologists & Counselors
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experienced therapists is dedicated to providing compassionate, evidence-based care. We understand it takes courage to seek help, and we're here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              {trustIndicators.map((indicator) => {
                const IconComponent = indicator.Icon;
                return (
                  <div key={indicator.text} className="flex items-center space-x-2">
                    <IconComponent 
                      className="w-6 h-6 text-[#4a90a4]" 
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#4a90a4] text-white" aria-labelledby="cta-heading">
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
              className="bg-white text-[#3a7282] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#4a90a4] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none"
              aria-label="Contact us to schedule a consultation"
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none"
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
