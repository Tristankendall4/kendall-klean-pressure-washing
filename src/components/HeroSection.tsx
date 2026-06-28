'use client';

import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  phoneNumber?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  phoneNumber,
}: HeroSectionProps) {
  return (
    <section
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href={primaryCta.href}
            className="btn-primary bg-blue-600 hover:bg-blue-700 text-white"
          >
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>

        {/* Phone CTA */}
        {phoneNumber && (
          <div className="text-center">
            <p className="text-gray-200 mb-2">Or call for immediate assistance:</p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-block text-3xl font-bold text-yellow-300 hover:text-yellow-200 transition"
            >
              {phoneNumber}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
