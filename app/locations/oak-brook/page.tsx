import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oak Brook Counseling Office | Life to the Fullest LLC - Oak Brook, IL",
  description: "Our Oak Brook office provides therapy and counseling services for residents of Oak Brook, Hinsdale, Glen Ellyn, Downers Grove, Elmhurst, Lombard, and surrounding DuPage County communities.",
};

export default function OakBrookLocation() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oak Brook Office</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Conveniently located in DuPage County to serve you and your family
          </p>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Location Details</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p>2625 Butterfield Rd., Suite 138S</p>
                    <p>Oak Brook, IL 60523</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p>
                      <a href="tel:630-294-0288" className="text-[#4a90a4] hover:underline font-medium">
                        (630) 294-0288
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p>
                      <a href="mailto:info@lifetothefullestllc.com" className="text-[#4a90a4] hover:underline">
                        info@lifetothefullestllc.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
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
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890123!2d-87.9282!3d41.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUxJzAwLjAiTiA4N8KwNTUnNDEuNiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Oak Brook Office Location"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=2625+Butterfield+Rd+Suite+138S+Oak+Brook+IL+60523"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a90a4] font-semibold hover:underline"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Communities We Serve</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our Oak Brook office serves clients from throughout DuPage County and surrounding areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Oak Brook",
                "Hinsdale",
                "Glen Ellyn",
                "Downers Grove",
                "Elmhurst",
                "Lombard",
                "Wheaton",
                "Naperville",
                "Villa Park",
                "Addison",
                "Woodridge",
                "Westmont",
              ].map((city, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-gray-900 font-medium">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              And many more surrounding communities in DuPage County and the western suburbs of Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* Services at This Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Services Available</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our Oak Brook office offers the full range of our counseling services, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Individual Therapy</h3>
                <p className="text-gray-700">For anxiety, depression, eating disorders, and more</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Couples Counseling</h3>
                <p className="text-gray-700">Helping partners strengthen their relationships</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Family Therapy</h3>
                <p className="text-gray-700">Supporting families through challenges together</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Psychological Testing</h3>
                <p className="text-gray-700">ADHD assessments and comprehensive evaluations</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="text-[#4a90a4] font-semibold hover:underline">
                View all services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Directions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Parking & Directions</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our Oak Brook office is conveniently located on Butterfield Road with ample parking available. The office is easily accessible from I-88 (Eisenhower Expressway) and Route 83.
              </p>
              <p className="text-gray-700">
                When you arrive, please check in at the front desk. Our friendly staff will help you get settled and direct you to your therapist's office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#4a90a4] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit Our Oak Brook Office?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#3a7282] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#4a90a4] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none transform hover:scale-105"
              aria-label="Contact us to schedule an appointment"
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none transform hover:scale-105"
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

