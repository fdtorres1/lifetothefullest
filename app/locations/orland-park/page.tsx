import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orland Park Counseling Office | Life to the Fullest LLC - Orland Park, IL",
  description: "Our Orland Park office provides therapy and counseling services for residents of Orland Park, Tinley Park, New Lenox, Frankfort, Lockport, and surrounding Will County communities.",
};

export default function OrlandParkLocation() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Orland Park Office</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Conveniently located in Will County to serve you and your family
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
                    <p>11512 W. 183rd Pl. SE</p>
                    <p>Orland Park, IL 60467</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890123!2d-87.8500!3d41.6300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM3JzQ4LjAiTiA4N8KwNTEnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Orland Park Office Location"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=11512+W+183rd+Pl+SE+Orland+Park+IL+60467"
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
              Our Orland Park office serves clients from throughout Will County and surrounding areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Orland Park",
                "Tinley Park",
                "New Lenox",
                "Frankfort",
                "Lockport",
                "Mokena",
                "Homer Glen",
                "Palos Heights",
                "Palos Hills",
                "Lemont",
                "Joliet",
                "Romeoville",
              ].map((city, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-gray-900 font-medium">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              And many more surrounding communities in Will County and the southwest suburbs of Chicago.
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
              Our Orland Park office offers the full range of our counseling services, including:
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
                Our Orland Park office is conveniently located with easy access and parking available. The office is easily accessible from I-80 and Route 45.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit Our Orland Park Office?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or learn more about our services.
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

