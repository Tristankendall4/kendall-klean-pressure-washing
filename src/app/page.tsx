import {
  HeroSection,
  EmergencyBanner,
  ServiceCard,
  BeforeAfterGallery,
  PricingSection,
  ReviewsSection,
  CTASection,
  QuoteForm,
} from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Peoria IL | Kendall Klean | Free Estimates',
  description:
    'Professional pressure washing in Peoria, IL. House washing, driveway cleaning, roof soft washing & more. 500+ 5-star reviews. Same-day free quotes available.',
  keywords: [
    'pressure washing peoria il',
    'house washing peoria',
    'driveway cleaning peoria',
    'soft wash roof cleaning',
    'pressure washing central illinois',
    'exterior cleaning',
  ],
  openGraph: {
    title: 'Pressure Washing Peoria IL | Kendall Klean',
    description:
      'Professional pressure washing services. House washing, driveway cleaning, roof soft washing & more.',
    url: 'https://kendallklean.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Pressure Washing in Peoria, IL"
        subtitle="Transform Your Home or Business. Same-Day Free Estimates. 500+ 5-Star Reviews."
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/gallery',
        }}
        phoneNumber="+1-309-555-0100"
      />

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Pressure Washing Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional exterior cleaning for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="🏠"
              title="House Washing"
              description="Soft wash exterior cleaning that removes dirt, algae, and mildew safely."
              href="/services/house-washing"
            />
            <ServiceCard
              icon="🛣️"
              title="Driveway Cleaning"
              description="Remove oil stains, dirt, and grime from concrete and asphalt surfaces."
              href="/services/driveway-cleaning"
            />
            <ServiceCard
              icon="🏘️"
              title="Roof Soft Washing"
              description="Safe professional cleaning that extends roof life without pressure damage."
              href="/services/roof-cleaning"
            />
            <ServiceCard
              icon="🛝"
              title="Deck & Fence"
              description="Restore wooden and composite decks and fences to their natural beauty."
              href="/services/deck-fence"
            />
            <ServiceCard
              icon="🌧️"
              title="Gutter Cleaning"
              description="Complete debris removal and downspout cleaning for proper drainage."
              href="/services/gutter-cleaning"
            />
            <ServiceCard
              icon="🏪"
              title="Commercial Storefront"
              description="Professional cleaning for storefronts, parking lots, and commercial properties."
              href="/services/commercial"
            />
            <ServiceCard
              icon="🚗"
              title="Fleet Washing"
              description="Eco-friendly cleaning solutions for vehicle fleets and commercial vehicles."
              href="/services/fleet-washing"
            />
            <ServiceCard
              icon="⚠️"
              title="Emergency Cleanup"
              description="Storm damage cleanup and emergency pressure washing services available."
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <BeforeAfterGallery />

      {/* Quick Quote Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Free Estimate
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Fill out our quick form and we'll respond within 2 hours with a no-obligation quote.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>No commitment required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Same-day response available</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Fast, professional service</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Licensed and fully insured</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Central Illinois
            </h2>
            <p className="text-xl text-gray-600">
              Professional pressure washing in Peoria and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Peoria</h3>
              <p className="text-gray-700 mb-4">
                Serving the greater Peoria area with professional pressure washing.
              </p>
              <a href="/service-areas/peoria" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">East Peoria</h3>
              <p className="text-gray-700 mb-4">
                East Peoria residents trust us for quality pressure washing.
              </p>
              <a href="/service-areas/east-peoria" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pekin & Morton</h3>
              <p className="text-gray-700 mb-4">
                Professional cleaning services for Pekin, Morton & Washington.
              </p>
              <a href="/service-areas/pekin" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        title="Don't Wait - Get Your Free Estimate Today"
        description="Limited availability this month. No cost, no obligation. Same-day response available for most requests."
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
        secondaryCta={{
          text: 'Request Quote Online',
          href: '/contact',
        }}
      />
    </>
  );
}
