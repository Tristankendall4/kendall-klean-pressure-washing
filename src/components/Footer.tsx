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
            <a 
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition"
              title="Follow us on Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-400 transition"
              title="Follow us on Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition"
              title="Follow us on TikTok"
            >
              <span className="sr-only">TikTok</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.498 3h-3.496v11.256a2.996 2.996 0 11-4.713-2.6c.937 0 1.797.347 2.468.91V7.04a5.288 5.288 0 00-2.748-.75c-2.883 0-5.217 2.334-5.217 5.207 0 2.874 2.334 5.209 5.217 5.209a5.275 5.275 0 002.612-.634v-4.172a8.575 8.575 0 005.756 2.332h.046c0-3.289 2.693-5.982 5.981-5.982 3.288 0 5.982 2.693 5.982 5.981S22.787 21 19.499 21c-3.288 0-5.981-2.692-5.981-5.981V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
