import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driveway Cleaning & Pressure Washing | Kendall Klean',
  description:
    'Professional driveway and patio cleaning. Oil stain removal, weed elimination. Peoria, IL. Free estimates.',
};

export default function DrivewayCleaningPage() {
  return (
    <>
      <HeroSection
        title="Professional Driveway Cleaning"
        subtitle="Transform dirty driveways and patios back to like-new condition"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Driveway Cleaning Service</h2>

              <p className="text-lg text-gray-600 mb-6">
                Over time, driveways accumulate dirt, oil stains, mildew, and grime that make
                your home look neglected. Our professional cleaning restores your driveway to
                its original appearance.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Clean:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Concrete driveways</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Asphalt driveways</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Patio and sidewalk cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Oil stain removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Rust stain removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Weed and moss removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Protective sealing (optional)</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free Driveway Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
              <QuoteForm />

              <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                <p className="text-3xl font-bold text-blue-600">$149 - $299</p>
                <p className="text-sm text-gray-600 mt-2">
                  Standard driveway cleaning. Size and condition may affect final price.
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded text-sm">
                <p className="font-semibold text-green-800 mb-1">✓ Pet-Friendly Solutions</p>
                <p className="text-green-700">Safe for your family and pets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Is Driveway Cleaning Important?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-bold text-gray-900 mb-2">Curb Appeal</h3>
              <p className="text-gray-600 text-sm">
                A clean driveway dramatically improves your home's appearance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Property Value</h3>
              <p className="text-gray-600 text-sm">
                Clean exteriors increase home value and buyer interest
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">
                Remove slippery algae and mold that create fall hazards
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Regular cleaning extends your driveway's lifespan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">About Oil Stains</h2>

          <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700 mb-4">
              Oil stains are one of the toughest driveway cleaning challenges. Leaking engines and
              transmission fluid penetrate deep into concrete, making them difficult to remove with
              standard pressure washing.
            </p>

            <p className="text-gray-700 mb-4">
              Our specialized oil stain removal process uses eco-friendly degreasers and professional
              techniques to safely lift oil without damaging your driveway surface.
            </p>

            <div className="bg-white p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-3">Our Process:</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Inspect stain depth and composition</li>
                <li>Apply targeted degreaser solution</li>
                <li>Allow time for chemical penetration</li>
                <li>Professional pressure washing</li>
                <li>Optional sealing for protection</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Driveway Looking Brand New"
        description="Professional cleaning removes oil, dirt, and grime"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
