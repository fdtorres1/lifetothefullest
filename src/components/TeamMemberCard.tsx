import { User } from "lucide-react";
import type { StaffMember } from "../lib/staff";

interface TeamMemberCardProps {
  member: StaffMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <a
      href={`/team/${member.slug}`}
      className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
      aria-label={`Learn more about ${member.name}`}
    >
      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gray-300 group-hover:ring-2 group-hover:ring-[#4F8FE6] transition-all">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.credentials}`}
            width={128}
            height={128}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: member.imagePosition || 'center 30%' }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-gray-500 group-hover:text-gray-600 transition-colors" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:text-[#4F8FE6] transition-colors">
        {member.name}
      </h3>
      <p className="text-gray-600 text-center mb-4 text-sm">{member.credentials}</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        {member.summary}
      </p>
      <p className="text-[#4F8FE6] font-semibold text-sm mt-4 text-center group-hover:underline">
        Read more →
      </p>
    </a>
  );
}

