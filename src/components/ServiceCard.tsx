import type { ComponentType, SVGProps } from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

export default function ServiceCard({ title, desc, Icon, href }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#4F8FE6]/20 transition-all duration-300 hover:-translate-y-2 group"
      aria-label={`Learn more about ${title}`}
    >
      <div className="mb-6 flex justify-center">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4F8FE6]/10 to-[#FF7B7B]/5 group-hover:from-[#4F8FE6]/20 group-hover:to-[#FF7B7B]/10 transition-all duration-300">
          <Icon 
            className="w-8 h-8 text-[#4F8FE6] group-hover:scale-110 transition-transform duration-300" 
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4F8FE6] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </a>
  );
}

