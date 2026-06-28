import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'House Washing | Soft Wash Cleaning | Kendall Klean',
  description:
    'Professional house washing and soft wash cleaning for Peoria homes. Safe, effective exterior cleaning. Free estimates.',
};

export default function HouseWashingPage() {
  return (
    <>
      <HeroSection
        title="Professional House Washing"
        subtitle="Soft wash exterior cleaning that reveals your home's beauty"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our House Washing Service</h2>

              <p className="text-lg text-gray-600 mb-6">
                Our professional house washing service uses soft wash techniques to safely clean
                your home's exterior without damaging siding, paint, or delicate surfaces.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Soft wash siding & exterior cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Gutter and trim cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Downspout cleaning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Safe for all exterior materials</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Removes dirt, algae, mildew & stains</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Extends paint and material life</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>30-day satisfaction guarantee</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free House Washing Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
              <QuoteForm />

              <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                <p className="text-3xl font-bold text-blue-600">$199 - $399</p>
                <p className="text-sm text-gray-600 mt-2">
                  Price depends on home size and condition. Free estimate provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Soft Wash?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Safe for All Materials</h3>
              <p className="text-gray-600">
                Soft wash is gentle enough for vinyl, wood, brick, stucco, and painted surfaces
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Effective Cleaning</h3>
              <p className="text-gray-600">
                Removes stubborn stains, algae, mildew, and dirt that pressure washing can't touch
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold text-gray-900 mb-2">Long-Lasting Results</h3>
              <p className="text-gray-600">
                Cleaner stays cleaner longer with soft wash. Extends the life of your paint and siding
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">The Soft Wash Difference</h2>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Traditional Pressure Washing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ Can damage paint & siding</li>
                  <li>❌ Forces water into cracks</li>
                  <li>❌ Strips protective coatings</li>
                  <li>❌ Results don't last long</li>
                  <li>❌ Not safe for all surfaces</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Kendall Klean Soft Wash</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Safe for all exterior materials</li>
                  <li>✓ Gentle on your home</li>
                  <li>✓ Preserves protective coatings</li>
                  <li>✓ Results last much longer</li>
                  <li>✓ Eco-friendly solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="See Your Home Like New Again"
        description="Professional soft wash cleaning - safe, effective, guaranteed"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
