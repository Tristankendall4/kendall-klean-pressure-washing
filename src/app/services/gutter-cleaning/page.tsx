import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Services | Kendall Klean',
  description:
    'Professional gutter and downspout cleaning. Keep your gutters flowing freely. Peoria, IL.',
};

export default function GutterCleaningPage() {
  return (
    <>
      <HeroSection
        title="Professional Gutter Cleaning"
        subtitle="Keep your gutters flowing freely and protect your home's foundation"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Gutter & Downspout Cleaning</h2>

              <p className="text-lg text-gray-600 mb-6">
                Clean gutters are essential for protecting your home. Clogged gutters cause water
                damage, foundation problems, and pest infestations. Our professionals clear all
                debris and ensure proper water flow.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Includes:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Complete debris removal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Downspout cleaning & clearing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Safe for multi-story homes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Final inspection & flushing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Gutter guard recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Preventative maintenance tips</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free Gutter Cleaning Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
              <QuoteForm />

              <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                <p className="text-3xl font-bold text-blue-600">$99 - $199</p>
                <p className="text-sm text-gray-600 mt-2">
                  Standard home gutter cleaning. Multi-story or complex homes may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Professional Gutter Cleaning?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-bold text-gray-900 mb-2">Foundation Protection</h3>
              <p className="text-gray-600">
                Proper water drainage prevents costly foundation damage
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Pest Prevention</h3>
              <p className="text-gray-600">
                Remove debris that attracts mosquitoes and other pests
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Roof Protection</h3>
              <p className="text-gray-600">
                Prevent water backup that damages roof and attic
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Signs Your Gutters Need Cleaning</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">⚠️ Warning Signs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Water overflowing during rain</li>
                  <li>• Sagging gutters</li>
                  <li>• Visible leaves and debris</li>
                  <li>• Water stains on siding</li>
                  <li>• Gutters pulling away from house</li>
                  <li>• Pest activity near gutters</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">📅 Cleaning Schedule:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fall cleanup (after leaves drop)</li>
                  <li>• Spring cleanup (pollen & debris)</li>
                  <li>• After storms (if heavy debris)</li>
                  <li>• Twice yearly minimum recommended</li>
                  <li>• More often if near trees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Gutter Guard Options</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6 text-center">
              Reduce future cleaning needs with professional gutter guards. We recommend and install quality
              systems that minimize debris buildup.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900">Standard Guards</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Basic mesh guards reduce large debris
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900">Reverse Curve</h4>
                <p className="text-sm text-gray-600 mt-2">
                  More effective water flow management
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900">Leaf Screens</h4>
                <p className="text-sm text-gray-600 mt-2">
                  High-performance debris blocking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Home with Clean Gutters"
        description="Professional gutter cleaning and maintenance"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
