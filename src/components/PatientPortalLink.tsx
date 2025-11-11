import { useState } from "react";

interface PatientPortalLinkProps {
  variant?: "button" | "link";
  className?: string;
}

export default function PatientPortalLink({ variant = "button", className = "" }: PatientPortalLinkProps) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMessage(true);
    // Auto-hide after 5 seconds
    setTimeout(() => setShowMessage(false), 5000);
  };

  const baseClasses = variant === "button" 
    ? "btn-primary" 
    : "block px-4 py-2 btn-primary text-center";

  return (
    <>
      <a
        href="#patient-portal"
        className={`${baseClasses} ${className}`}
        onClick={handleClick}
        aria-label="Access patient portal - contact us for information"
      >
        Patient Portal
      </a>
      {showMessage && (
        <div 
          className="fixed bottom-4 right-4 bg-[#4F8FE6] text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm transform transition-all duration-300 ease-out"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold mb-1">Patient Portal Access</p>
          <p className="text-sm">
            Please contact us at <a href="tel:630-294-0288" className="underline font-medium">(630) 294-0288</a> or <a href="mailto:info@lifetothefullestllc.com" className="underline font-medium">info@lifetothefullestllc.com</a> for patient portal access information.
          </p>
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200"
            aria-label="Close message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

