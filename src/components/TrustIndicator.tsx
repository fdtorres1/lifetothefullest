import type { ComponentType, SVGProps } from "react";

interface TrustIndicatorProps {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function TrustIndicator({ text, Icon }: TrustIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#4F8FE6]/10 to-[#FF7B7B]/5 group-hover:from-[#4F8FE6]/20 group-hover:to-[#FF7B7B]/10 transition-all duration-300">
        <Icon 
          className="w-7 h-7 text-[#4F8FE6]" 
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <span className="font-medium text-gray-800">{text}</span>
    </div>
  );
}

