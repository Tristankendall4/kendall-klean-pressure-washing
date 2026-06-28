'use client';

import Link from 'next/link';

interface FooterProps {
  phoneNumber: string;
  businessEmail: string;
}

export default function Footer({ phoneNumber, businessEmail }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Kendall Klean</h3>
            <p className="text-sm text-gray-400 mb-6">
              Professional pressure washing services serving Peoria and surrounding areas.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${phoneNumber}`} className="text-blue-400 hover:text-blue-300">
                {phoneNumber}
              </a>
              <a href={`mailto:${businessEmail}`} className="block text-blue-400 hover:text-blue-300">
                {businessEmail}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/house-washing" className="hover:text-blue-400 transition">
                  House Washing
                </Link>
              </li>
              <li>
                <Link href="/services/driveway-cleaning" className="hover:text-blue-400 transition">
                  Driveway Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/roof-cleaning" className="hover:text-blue-400 transition">
                  Roof Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deck-fence" className="hover:text-blue-400 transition">
                  Deck & Fence
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/service-areas/peoria" className="hover:text-blue-400 transition">
                  Peoria, IL
                </Link>
              </li>
              <li>
                <Link href="/service-areas/east-peoria" className="hover:text-blue-400 transition">
                  East Peoria, IL
                </Link>
              </li>
              <li>
                <Link href="/service-areas/pekin" className="hover:text-blue-400 transition">
                  Pekin, IL
                </Link>
              </li>
              <li>
                <Link href="/service-areas/morton" className="hover:text-blue-400 transition">
                  Morton, IL
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Kendall Klean Pressure Washing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition">
              <span className="sr-only">Google</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.742v3.48h5.445c-0.029,1.511-1.098,4.545-5.445,4.545c-3.291,0-5.973-2.682-5.973-5.973 c0-3.291,2.682-5.973,5.973-5.973c1.875,0,3.129,0.799,3.945,1.487l2.758-2.758C15.268,2.735,13.636,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10c5.76,0,9.592-4.049,9.592-9.75c0-0.656-0.066-1.149-0.15-1.643H12.545z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
