import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing in East Peoria, IL | Kendall Klean',
  description:
    'Professional pressure washing services in East Peoria, IL. House washing, driveway cleaning & more. Free same-day quotes.',
};

export default function EastPeoriaPage() {
  return (
    <>
      <HeroSection
        title="Pressure Washing in East Peoria, IL"
        subtitle="Professional exterior cleaning for your East Peoria home or business"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
        phoneNumber="+1-309-555-0100"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Trusted Pressure Washing for East Peoria Residents
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kendall Klean serves East Peoria with the same professional, high-quality
                pressure washing services that have earned us over 500 five-star reviews.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Services Available:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>House washing & soft wash services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Driveway & patio cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Roof soft washing & algae removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Deck & fence restoration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Gutter cleaning & maintenance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Commercial cleaning services</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free Estimate
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">East Peoria Service Highlights</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Same-Day Service</h4>
                  <p className="text-gray-700">Free estimates available same day in most cases</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Fully Insured</h4>
                  <p className="text-gray-700">Licensed and certified professionals</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Guarantee Included</h4>
                  <p className="text-gray-700">30-day satisfaction guarantee on all work</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Quick Quote</h4>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Team</h3>
              <p className="text-gray-600">
                Experienced, courteous professionals who treat your property with care
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">
                We use safe, pet-friendly cleaning solutions that protect your landscape
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick scheduling and often same-day or next-day service available
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your East Peoria Pressure Washing Done Right"
        description="Call now for a free, no-obligation estimate"
        primaryCta={{
          text: 'Call: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
