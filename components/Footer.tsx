import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-[#4a90a4] mb-4">Life to the Fullest</h3>
            <p className="text-gray-600 text-sm mb-4">
              Empowering lives in Oak Brook & Orland Park through compassionate, personalized therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#4a90a4] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#4a90a4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#4a90a4] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#4a90a4] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Locations</h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <Link href="/locations/oak-brook" className="font-semibold text-gray-900 hover:text-[#4a90a4] transition-colors block mb-1">
                  Oak Brook Office
                </Link>
                <p>2625 Butterfield Rd., Suite 138S</p>
                <p>Oak Brook, IL 60523</p>
              </div>
              <div>
                <Link href="/locations/orland-park" className="font-semibold text-gray-900 hover:text-[#4a90a4] transition-colors block mb-1">
                  Orland Park Office
                </Link>
                <p>11512 W. 183rd Pl. SE</p>
                <p>Orland Park, IL 60467</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <a href="tel:630-294-0288" className="hover:text-[#4a90a4] transition-colors">
                  (630) 294-0288
                </a>
              </p>
              <p>
                <a href="mailto:info@lifetothefullestllc.com" className="hover:text-[#4a90a4] transition-colors">
                  info@lifetothefullestllc.com
                </a>
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 mb-2">Office Hours</p>
                <p className="text-xs">Mon-Thu: 9am-8pm</p>
                <p className="text-xs">Fri: 9am-7pm</p>
                <p className="text-xs">Sat: 9am-5pm</p>
                <p className="text-xs">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Life to the Fullest LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

