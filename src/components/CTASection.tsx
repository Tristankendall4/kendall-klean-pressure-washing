'use client';

import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  title = 'Ready to Transform Your Property?',
  description = 'Get a free pressure washing quote today. Limited weekly openings available.',
  primaryCta = {
    text: 'Get Free Estimate',
    href: '/contact',
  },
  secondaryCta = {
    text: 'View Gallery',
    href: '/gallery',
  },
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href={primaryCta.href} className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            {primaryCta.text}
          </Link>
          <Link
            href={secondaryCta.href}
            className="btn-secondary border-white text-white hover:bg-blue-500"
          >
            {secondaryCta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
