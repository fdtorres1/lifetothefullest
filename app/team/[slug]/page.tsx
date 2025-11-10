import type { Metadata } from "next";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import { getStaffMemberBySlug, getAllStaffSlugs } from "@/lib/staff";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStaffSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getStaffMemberBySlug(slug);
  
  if (!member) {
    return {
      title: "Team Member Not Found | Life to the Fullest LLC",
    };
  }

  return {
    title: `${member.name} | ${member.credentials} | Life to the Fullest LLC`,
    description: `Meet ${member.name}, ${member.credentials} at Life to the Fullest LLC. ${member.bio.substring(0, 150)}...`,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getStaffMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4a90a4] to-[#3a7282] text-white section-padding">
        <div className="container-custom">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-blue-50 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Our Team</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{member.name}</h1>
          <p className="text-xl text-blue-50">{member.credentials}</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto md:mx-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h2>
                <p className="text-lg text-[#4a90a4] mb-6">{member.credentials}</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
              {member.bio}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work with {member.name.split(' ')[0]}?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today to schedule a consultation and learn more about how we can help you on your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/about" className="btn-secondary">
                View All Team Members
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

