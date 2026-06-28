'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  phoneNumber: string;
  businessName: string;
}

export default function Header({ phoneNumber, businessName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">KK</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-gray-900">Kendall Klean</h1>
              <p className="text-xs text-gray-600">Pressure Washing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Gallery
            </Link>
            <Link href="/service-areas" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Service Areas
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${phoneNumber}`}
              className="btn-call text-sm md:text-base"
            >
              Call Now: {phoneNumber}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/service-areas"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="block btn-call text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Call Now: {phoneNumber}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
