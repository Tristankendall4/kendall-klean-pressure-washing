import { HeroSection, ServiceCard, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing in Peoria, IL | Kendall Klean',
  description:
    'Professional pressure washing services in Peoria, IL. House washing, driveway cleaning, roof soft washing & more. Local, trusted, same-day quotes.',
  keywords: ['pressure washing peoria il', 'house washing peoria', 'driveway cleaning peoria'],
};

export default function PeoriaPage() {
  return (
    <>
      <HeroSection
        title="Pressure Washing in Peoria, IL"
        subtitle="Local, trusted pressure washing services for your home or business"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
        phoneNumber="+1-309-555-0100"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pressure Washing Services for Peoria Homes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kendall Klean has been serving Peoria homeowners and businesses since 2015.
                We're proud to be your trusted local pressure washing company.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Residential Services</h4>
                    <p className="text-gray-600">
                      House washing, driveways, decks, gutters & more
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Commercial Services</h4>
                    <p className="text-gray-600">
                      Storefronts, parking lots, fleet washing
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Emergency Cleanup</h4>
                    <p className="text-gray-600">Storm damage, urgency requests</p>
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn-primary inline-block">
                Call for Your Free Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Estimate Request
              </h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services Available in Peoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="🏠"
              title="House Washing"
              description="Soft wash exterior cleaning"
              href="/services/house-washing"
            />
            <ServiceCard
              icon="🛣️"
              title="Driveway Cleaning"
              description="Oil stain removal & restoration"
              href="/services/driveway-cleaning"
            />
            <ServiceCard
              icon="🏘️"
              title="Roof Soft Washing"
              description="Safe professional roof cleaning"
              href="/services/roof-cleaning"
            />
            <ServiceCard
              icon="🛝"
              title="Deck & Fence"
              description="Wood & composite restoration"
              href="/services/deck-fence"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Peoria Residents Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">500+ Reviews</h3>
              <p className="text-gray-600">
                Trusted by hundreds of satisfied Peoria customers with 5-star ratings
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">Locally Owned</h3>
              <p className="text-gray-600">
                Supporting our Peoria community since 2015 with professional service
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="font-bold text-gray-900 mb-2">100% Guaranteed</h3>
              <p className="text-gray-600">
                Satisfaction guarantee with 30-day touch-up included on all services
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Peoria Property?"
        description="Same-day free estimates available for most requests"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
