import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Pressure Washing | Kendall Klean',
  description:
    'Professional commercial pressure washing for storefronts, parking lots, and business properties. After-hours service available.',
};

export default function CommercialPage() {
  return (
    <>
      <HeroSection
        title="Commercial Pressure Washing"
        subtitle="Professional exterior cleaning for businesses of all sizes"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Commercial Cleaning Solutions</h2>

              <p className="text-lg text-gray-600 mb-6">
                A clean business exterior builds customer confidence and maintains your property value.
                We provide professional commercial pressure washing for storefronts, parking lots,
                loading docks, and more.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Services Available:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Storefront window and entrance cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Parking lot pressure washing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Building exterior washing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Loading dock cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Sidewalk and entrance cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Graffiti removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Recurring maintenance contracts</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Commercial Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Benefits</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">📅 Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">After-hours service available</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">📊 Monthly Contracts</h4>
                  <p className="text-gray-600 text-sm">Recurring service plans available</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🛡️ Full Insurance</h4>
                  <p className="text-gray-600 text-sm">Comprehensive commercial coverage</p>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">💼 Dedicated Account Manager</h4>
                  <p className="text-gray-600 text-sm">Personal service coordinator</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded">
                <h4 className="font-bold text-gray-900 mb-4">Get Your Quote</h4>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Kendall Klean for Commercial?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Professional team that shows up on time, every time
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Competitive rates for regular maintenance contracts
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Results</h3>
              <p className="text-gray-600">
                Professional equipment and trained technicians
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Retail Storefronts',
              'Office Buildings',
              'Shopping Centers',
              'Restaurants & Cafes',
              'Banks & Financial',
              'Medical Offices',
              'Hotels & Motels',
              'Manufacturing Plants',
              'Warehouses',
            ].map((industry) => (
              <div key={industry} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-900">✓ {industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Keep Your Business Looking Professional"
        description="Custom commercial cleaning solutions"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
