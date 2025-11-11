import { useState } from "react";
import PatientPortalLink from "./PatientPortalLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#4F8FE6]">
              Life to the Fullest
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#4F8FE6] transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-[#4F8FE6] transition-colors">
              About Us
            </a>
            <a href="/services" className="text-gray-700 hover:text-[#4F8FE6] transition-colors">
              Services
            </a>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-[#4F8FE6] transition-colors flex items-center"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Locations menu"
              >
                Locations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu">
                <a href="/locations/oak-brook" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded-t-lg" role="menuitem">
                  Oak Brook
                </a>
                <a href="/locations/orland-park" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded-b-lg" role="menuitem">
                  Orland Park
                </a>
              </div>
            </div>
            <a href="/resources" className="text-gray-700 hover:text-[#4F8FE6] transition-colors">
              Resources
            </a>
            <a href="/contact" className="text-gray-700 hover:text-[#4F8FE6] transition-colors">
              Contact
            </a>
            <PatientPortalLink variant="button" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Home
            </a>
            <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              About Us
            </a>
            <a href="/services" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Services
            </a>
            <a href="/locations/oak-brook" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Oak Brook
            </a>
            <a href="/locations/orland-park" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Orland Park
            </a>
            <a href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Resources
            </a>
            <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-[#f0f7f9] rounded">
              Contact
            </a>
            <PatientPortalLink variant="link" className="block px-4 py-2 text-center" />
          </div>
        )}
      </nav>
    </header>
  );
}

