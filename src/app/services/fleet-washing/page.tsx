import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet Washing Services | Commercial Vehicle Cleaning',
  description:
    'Professional fleet washing for company vehicles. Eco-friendly solutions. Cost-effective fleet maintenance.',
};

export default function FleetWashingPage() {
  return (
    <>
      <HeroSection
        title="Fleet Washing Services"
        subtitle="Keep your vehicle fleet looking professional and protected"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Fleet Cleaning</h2>

              <p className="text-lg text-gray-600 mb-6">
                Your vehicle fleet reflects your company's professionalism. Regular washing extends
                vehicle lifespan, reduces maintenance costs, and keeps your fleet looking pristine.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Fleet Services Include:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Trucks and commercial vehicles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Cars and SUVs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Heavy equipment washing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Trailers and semi-trailers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Scheduled maintenance contracts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>On-site washing available</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Fleet Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fleet Advantages</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">💼 Bulk Pricing</h4>
                  <p className="text-gray-600 text-sm">Discounts for fleet contracts</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">📅 Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">Work around your operations</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🌿 Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Sustainable cleaning solutions</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">📊 Professional Results</h4>
                  <p className="text-gray-600 text-sm">Consistent quality every time</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded">
                <h4 className="font-bold text-gray-900 mb-4">Quick Quote</h4>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Regular Fleet Washing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Paint Protection</h3>
              <p className="text-gray-600">
                Regular washing removes contaminants that damage paint and clear coat
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-gray-900 mb-2">Extended Vehicle Life</h3>
              <p className="text-gray-600">
                Preventative maintenance reduces rust and deterioration
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold text-gray-900 mb-2">Resale Value</h3>
              <p className="text-gray-600">
                Well-maintained vehicles have higher resale and trade-in values
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Image</h3>
              <p className="text-gray-600">
                Clean fleet reflects positively on your company's professionalism
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Lower Maintenance</h3>
              <p className="text-gray-600">
                Regular cleaning reduces expensive repairs and part replacement
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Environmental</h3>
              <p className="text-gray-600">
                Eco-friendly solutions protect the environment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">
            Vehicle Types We Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Pickup Trucks',
              'Delivery Vans',
              'Box Trucks',
              'Semi-Trailers',
              'Buses',
              'Construction Equipment',
              'Utility Vehicles',
              'Service Vehicles',
              'Company Cars',
            ].map((vehicle) => (
              <div key={vehicle} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-900">✓ {vehicle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Keep Your Fleet Looking Professional"
        description="Competitive rates for ongoing fleet maintenance"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
