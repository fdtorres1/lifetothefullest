import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Links | Life to the Fullest LLC - Mental Health Resources",
  description: "Helpful mental health resources, articles, crisis hotlines, and links for individuals and families in Oak Brook, Orland Park, and surrounding communities.",
};

const resources = [
  {
    category: "Crisis Resources",
    items: [
      {
        title: "National Suicide Prevention Lifeline",
        description: "24/7 free and confidential support for people in distress",
        link: "https://988lifeline.org/",
        phone: "988",
      },
      {
        title: "Crisis Text Line",
        description: "Free 24/7 crisis support via text message",
        link: "https://www.crisistextline.org/",
        text: "Text HOME to 741741",
      },
      {
        title: "National Domestic Violence Hotline",
        description: "24/7 support for victims of domestic violence",
        link: "https://www.thehotline.org/",
        phone: "1-800-799-7233",
      },
    ],
  },
  {
    category: "Mental Health Organizations",
    items: [
      {
        title: "National Alliance on Mental Illness (NAMI)",
        description: "Education, support, and advocacy for individuals and families affected by mental illness",
        link: "https://www.nami.org/",
      },
      {
        title: "National Eating Disorders Association (NEDA)",
        description: "Support, resources, and treatment options for eating disorders",
        link: "https://www.nationaleatingdisorders.org/",
      },
      {
        title: "Anxiety and Depression Association of America (ADAA)",
        description: "Resources and information about anxiety, depression, and related disorders",
        link: "https://adaa.org/",
      },
      {
        title: "American Psychological Association (APA)",
        description: "Information about psychology, mental health, and finding a therapist",
        link: "https://www.apa.org/",
      },
    ],
  },
  {
    category: "Local Resources",
    items: [
      {
        title: "DuPage County Health Department",
        description: "Mental health services and resources in DuPage County",
        link: "https://www.dupagehealth.org/",
      },
      {
        title: "Will County Health Department",
        description: "Mental health services and resources in Will County",
        link: "https://willcountyhealth.org/",
      },
      {
        title: "NAMI DuPage",
        description: "Local NAMI chapter serving DuPage County",
        link: "https://www.namidupage.org/",
      },
    ],
  },
  {
    category: "Support for Families",
    items: [
      {
        title: "Mental Health America",
        description: "Resources and tools for mental health and wellness",
        link: "https://www.mhanational.org/",
      },
      {
        title: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
        description: "National helpline and treatment locator",
        link: "https://www.samhsa.gov/",
        phone: "1-800-662-4357",
      },
      {
        title: "Child Mind Institute",
        description: "Resources for children's mental health and learning disorders",
        link: "https://childmind.org/",
      },
    ],
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Links</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            Helpful resources, articles, and links to support your mental health journey
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              We recommend the following organizations and readings for additional support between sessions. These resources can complement your therapy work and provide valuable information and community connections.
            </p>

            {resources.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-[#4a90a4] mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4a90a4] font-semibold hover:underline inline-flex items-center"
                          >
                            Visit Website
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {item.phone && (
                          <a
                            href={`tel:${item.phone.replace(/\D/g, "")}`}
                            className="text-[#4a90a4] font-semibold hover:underline"
                          >
                            Call {item.phone}
                          </a>
                        )}
                        {item.text && (
                          <span className="text-gray-600 font-medium">{item.text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section - Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Helpful Articles</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Check back soon for articles on mental health, coping strategies, and wellness tips.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600">Articles and resources will be added here regularly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Tuned</h3>
                <p className="text-gray-600">We're working on creating helpful content for our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events - Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Community Events & Workshops</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We occasionally offer free community workshops and support groups. Check back here for upcoming events, or contact us to be added to our mailing list.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">
                No upcoming events at this time. Please contact us if you're interested in learning about future workshops or support groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#4a90a4] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Support?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            If you're looking for professional support, we're here to help. Contact us to learn more about our services or schedule a consultation.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#3a7282] hover:bg-blue-50 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#4a90a4] px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a90a4] focus:outline-none transform hover:scale-105 inline-block"
            aria-label="Contact us for professional support"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

