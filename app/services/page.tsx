import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Life to the Fullest LLC - Therapy & Counseling Services",
  description: "Comprehensive counseling services including individual therapy, couples counseling, family therapy, eating disorder treatment, ADHD assessments, and more in Oak Brook and Orland Park, Illinois.",
};

const services = [
  {
    category: "Individual Therapy",
    items: [
      "Eating Disorders",
      "Self-Injury",
      "Self-Esteem Issues",
      "Depression",
      "Anxiety",
      "ADHD",
      "Trauma & PTSD",
      "Bipolar Disorder",
      "Obsessive-Compulsive Disorder (OCD)",
      "Panic Disorders",
      "Phobias",
      "Personality Disorders",
    ],
    description: "Personalized one-on-one therapy sessions tailored to address your specific concerns and goals.",
  },
  {
    category: "Couples Counseling",
    items: [
      "Communication Improvement",
      "Rebuilding Trust",
      "Conflict Resolution",
      "Intimacy Issues",
      "Pre-marital Counseling",
      "Infidelity Recovery",
    ],
    description: "Helping partners improve communication, rebuild trust, and navigate conflicts in a healthy way.",
  },
  {
    category: "Family Counseling",
    items: [
      "Family Conflict Resolution",
      "Parent-Child Relationships",
      "Blended Family Issues",
      "Family Communication",
      "Supporting Family Members with Mental Health Concerns",
    ],
    description: "Supporting families through challenges and strengthening relationships between family members.",
  },
  {
    category: "Parenting Support",
    items: [
      "Parenting Coaching",
      "Behavioral Management Strategies",
      "Supporting Children with Special Needs",
      "Adolescent Parenting Challenges",
    ],
    description: "Guidance and support for parents navigating the challenges of raising children and teens.",
  },
  {
    category: "Divorce Recovery & Support",
    items: [
      "Coping with Divorce",
      "Co-parenting Support",
      "Children's Adjustment to Divorce",
      "Rebuilding After Divorce",
    ],
    description: "Compassionate support for individuals and families navigating the challenges of separation and divorce.",
  },
  {
    category: "Grief Counseling",
    items: [
      "Loss of a Loved One",
      "Loss of a Relationship",
      "Life Transitions",
      "Anticipatory Grief",
    ],
    description: "Support during times of loss and transition, helping you process grief and find meaning.",
  },
  {
    category: "Work & Career Issues",
    items: [
      "Work-Related Stress",
      "Burnout",
      "Work-Life Balance",
      "Career Transitions",
      "Workplace Conflict",
    ],
    description: "Addressing stress, burnout, and work-life balance challenges to help you thrive professionally and personally.",
  },
  {
    category: "Mental Skills Training",
    items: [
      "Performance Anxiety",
      "Focus & Concentration",
      "Goal Setting",
      "Confidence Building",
    ],
    description: "Enhancing mental performance for athletes and performers through specialized training techniques.",
  },
  {
    category: "Stress Management",
    items: [
      "Coping Strategies",
      "Relaxation Techniques",
      "Time Management",
      "Mindfulness Practices",
    ],
    description: "Learning effective strategies to manage stress and improve your overall well-being.",
  },
  {
    category: "Addiction & Recovery",
    items: [
      "Substance Use Disorders",
      "Behavioral Addictions",
      "Recovery Support",
      "Relapse Prevention",
    ],
    description: "Comprehensive support for individuals and families affected by addiction.",
  },
  {
    category: "Conflict Resolution",
    items: [
      "Anger Management",
      "Communication Skills",
      "Negotiation Strategies",
      "Mediation Support",
    ],
    description: "Developing skills to resolve conflicts constructively in personal and professional relationships.",
  },
  {
    category: "Psychological Testing",
    items: [
      "Intelligence Testing (IQ Tests)",
      "ADHD Assessments (Children & Adults)",
      "Learning Disability Evaluations",
      "Personality Assessments",
      "Cognitive Functioning Evaluations",
    ],
    description: "Comprehensive psychological testing and assessments to better understand cognitive functioning, learning needs, and diagnostic clarity.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-50 max-w-3xl">
            We provide a wide range of counseling services for individuals, couples, and families. Our therapists are experienced in addressing many emotional and behavioral issues, from everyday stress to complex mental health conditions.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              In every service we offer, our therapists tailor their approach to your individual needs, helping you gain insight and develop skills to overcome challenges. We work with clients of all ages and backgrounds, ensuring that many client needs can be met under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-[#4a90a4] mb-3">{service.category}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#4a90a4] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Approach to Services</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4">
                Whatever your concern, our therapy approach is personalized and collaborative. We believe that you are the expert on your own life, and our role is to provide professional guidance, support, and evidence-based techniques to help you achieve your goals.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're seeking help for anxiety, depression, relationship issues, or any other concern, we're here to support you on your journey toward a more fulfilling and meaningful life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Serving Oak Brook & Orland Park</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Oak Brook Office</h3>
                <p className="text-gray-700 mb-4">
                  We offer anxiety and depression therapy for Oak Brook, Hinsdale, Downers Grove, Glen Ellyn, Elmhurst, Lombard, and surrounding areas in DuPage County.
                </p>
                <Link href="/locations/oak-brook" className="text-[#4a90a4] font-semibold hover:underline">
                  Learn more about our Oak Brook location →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#4a90a4] mb-3">Orland Park Office</h3>
                <p className="text-gray-700 mb-4">
                  Providing comprehensive counseling services for residents of Orland Park, Tinley Park, New Lenox, Frankfort, Lockport, and surrounding communities in Will County.
                </p>
                <Link href="/locations/orland-park" className="text-[#4a90a4] font-semibold hover:underline">
                  Learn more about our Orland Park location →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#4a90a4] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Contact us today to learn more about our services or to schedule a consultation.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#4a90a4] hover:bg-blue-50 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

