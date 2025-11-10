import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life to the Fullest LLC | Therapy & Counseling in Oak Brook & Orland Park, IL",
  description: "Welcome to Life to the Fullest, where our goal is to help you uncover your true potential and lead a life worth celebrating. Professional therapy services in Oak Brook and Orland Park, Illinois.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Today you are one step closer to a new you
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Where you feel empowered and on a positive path to growth and well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-[#4a90a4] hover:bg-blue-50">
                Request Appointment
              </Link>
              <Link href="/about" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Life to the Fullest
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to Life to the Fullest, where our goal is to help you uncover your true potential and lead a life worth celebrating. We provide a comfortable, supportive atmosphere and a highly personalized approach for individuals, couples, and families.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              While we can't change difficult situations of the past, we can work together to better understand and resolve challenges in your life. By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
            </p>
            <Link href="/about" className="text-[#4a90a4] font-semibold hover:underline">
              Read more about our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive counseling services tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Individual Therapy", desc: "Personalized treatment for anxiety, depression, eating disorders, and more", icon: "👤" },
              { title: "Couples Counseling", desc: "Help partners improve communication, rebuild trust, and navigate conflicts", icon: "💑" },
              { title: "Family Counseling", desc: "Supporting families through challenges and strengthening relationships", icon: "👨‍👩‍👧‍👦" },
              { title: "Eating Disorders", desc: "Specialized treatment for eating disorders and body image concerns", icon: "🍽️" },
              { title: "ADHD Assessments", desc: "Comprehensive psychological testing for children and adults", icon: "🧠" },
              { title: "Grief Counseling", desc: "Compassionate support during times of loss and transition", icon: "🕊️" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#f0f7f9] to-[#e8f4f7] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Now Serving DuPage and Will County
              </h2>
              <p className="text-lg text-gray-700">
                Convenient locations in Oak Brook and Orland Park to serve you better
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-[#4a90a4] mb-4">Oak Brook Office</h3>
                <p className="text-gray-700 mb-4">2625 Butterfield Rd., Suite 138S</p>
                <p className="text-gray-700 mb-4">Oak Brook, IL 60523</p>
                <p className="text-sm text-gray-600 mb-4">
                  Serving clients from Oak Brook, Hinsdale, Glen Ellyn, Downers Grove, Elmhurst, Lombard, and surrounding areas in DuPage County.
                </p>
                <Link href="/locations/oak-brook" className="text-[#4a90a4] font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-[#4a90a4] mb-4">Orland Park Office</h3>
                <p className="text-gray-700 mb-4">11512 W. 183rd Pl. SE</p>
                <p className="text-gray-700 mb-4">Orland Park, IL 60467</p>
                <p className="text-sm text-gray-600 mb-4">
                  Providing counseling for residents of Orland Park, Tinley Park, New Lenox, Frankfort, Lockport, and surrounding communities in Will County.
                </p>
                <Link href="/locations/orland-park" className="text-[#4a90a4] font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Licensed Clinical Psychologists & Counselors
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experienced therapists is dedicated to providing compassionate, evidence-based care. We understand it takes courage to seek help, and we're here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalized Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-[#4a90a4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Safe & Supportive Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#4a90a4] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            We're here to help you on your journey to a more fulfilling life. Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-[#4a90a4] hover:bg-blue-50">
              Contact Us
            </Link>
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
