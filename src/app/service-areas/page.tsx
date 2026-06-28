import { HeroSection, ServiceAreaCard, CTASection } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Kendall Klean Pressure Washing',
  description:
    'Pressure washing services in Peoria, East Peoria, Pekin, Morton, Washington & Tazewell County, IL',
};

export default function ServiceAreasPage() {
  return (
    <>
      <HeroSection
        title="Service Areas"
        subtitle="Professional pressure washing throughout Central Illinois"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Kendall Klean proudly serves residents and businesses throughout the Peoria area and
              surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceAreaCard
              name="Peoria"
              description="Our primary service area serving Peoria residents and businesses with all pressure washing services."
              href="/service-areas/peoria"
              population="~115,000"
            />

            <ServiceAreaCard
              name="East Peoria"
              description="Full service coverage for East Peoria. Free same-day estimates available for most requests."
              href="/service-areas/east-peoria"
              population="~24,000"
            />

            <ServiceAreaCard
              name="Pekin, Morton & Washington"
              description="Professional pressure washing serving Pekin, Morton, Washington and surrounding Tazewell County."
              href="/service-areas/pekin"
              population="~35,000+"
            />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <div>✓ Tazewell County</div>
              <div>✓ Fond du Lac</div>
              <div>✓ Chillicothe</div>
              <div>✓ Germantown Hills</div>
              <div>✓ Kingston Mines</div>
              <div>✓ Trivoli</div>
              <div>✓ Forest City</div>
              <div>✓ Other areas by request</div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Don't see your area listed? Give us a call at +1-309-555-0100. We may be able to
              service your location!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Service Includes All These Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Map</h3>
              <p className="text-gray-600 mb-6">
                Kendall Klean maintains service routes throughout the entire Peoria metropolitan
                area, allowing us to provide efficient scheduling and reliable service.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-900 mb-4">Primary Service Zone</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Peoria city and surrounding areas</li>
                  <li>• East Peoria</li>
                  <li>• Pekin & Morton</li>
                  <li>• Washington</li>
                  <li>• Tazewell County</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">⏱️ Response Time</p>
                  <p className="text-gray-600 text-sm">Usually within 2 hours for quote requests</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900">📅 Scheduling</p>
                  <p className="text-gray-600 text-sm">Same-day or next-day service often available</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900">💰 Pricing</p>
                  <p className="text-gray-600 text-sm">Competitive local pricing with no hidden fees</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900">🎯 Quality</p>
                  <p className="text-gray-600 text-sm">Consistent, professional service every time</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900">🛡️ Guarantee</p>
                  <p className="text-gray-600 text-sm">100% satisfaction guarantee on all work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Schedule Service in Your Area?"
        description="No matter where you are in Central Illinois, we're here to help"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
        secondaryCta={{
          text: 'Request Online Quote',
          href: '/contact',
        }}
      />
    </>
  );
}
