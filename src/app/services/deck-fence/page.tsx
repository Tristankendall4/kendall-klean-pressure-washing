import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck & Fence Cleaning | Restoration | Kendall Klean',
  description:
    'Professional deck and fence cleaning. Restore wood and composite decks. Remove stains and mildew safely.',
};

export default function DeckFencePage() {
  return (
    <>
      <HeroSection
        title="Deck & Fence Cleaning"
        subtitle="Restore your wood and composite decks and fences to pristine condition"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Deck & Fence Cleaning</h2>

              <p className="text-lg text-gray-600 mb-6">
                Over time, decks and fences become stained with mildew, algae, dirt, and weathering.
                Our professional cleaning process safely restores wood and composite materials to
                their natural beauty without damage.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Clean:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Pressure-treated wood decks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Composite and PVC decks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Wood privacy fences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Composite fencing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Stain removal (mold, algae, dirt)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Wood restoration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Protective sealant application</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free Deck Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
              <QuoteForm />

              <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                <p className="text-3xl font-bold text-blue-600">$199 - $349</p>
                <p className="text-sm text-gray-600 mt-2">
                  Depends on deck/fence size and condition. Free estimate provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Clean Your Deck & Fence?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-bold text-gray-900 mb-2">Restore Beauty</h3>
              <p className="text-gray-600">
                Reveal the natural wood color hiding under dirt and stains
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Extend Lifespan</h3>
              <p className="text-gray-600">
                Remove damaging mold and mildew that rot wood over time
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">
                Eliminate slippery surfaces that create fall hazards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Wood vs. Composite Decks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🌳 Wood Decks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Soft wash method</li>
                <li>✓ Gentle pressure application</li>
                <li>✓ Removes dirt and stains</li>
                <li>✓ Prepares for staining/sealing</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🏗️ Composite Decks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Special low-pressure process</li>
                <li>✓ Won't damage composite material</li>
                <li>✓ Removes mold & mildew</li>
                <li>✓ Preserves color and finish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Give Your Deck & Fence New Life"
        description="Professional restoration that extends lifespan"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
