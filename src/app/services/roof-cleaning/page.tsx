import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Soft Washing | Safe Cleaning | Kendall Klean',
  description:
    'Professional roof soft washing removes moss, algae & stains safely. No pressure damage. Extends roof life.',
};

export default function RoofCleaningPage() {
  return (
    <>
      <HeroSection
        title="Professional Roof Soft Washing"
        subtitle="Safe cleaning that extends your roof's life without pressure damage"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Soft Wash Your Roof?</h2>

              <p className="text-lg text-gray-600 mb-6">
                Roofs accumulate moss, algae, lichen, and dirt that not only look bad but can
                damage shingles and reduce your roof's lifespan. Pressure washing is too aggressive
                and can cause permanent damage. Our soft wash method safely removes these damaging
                growths without harming your roof.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Includes:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Soft wash method - no pressure damage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Removes moss, algae, and lichen</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Kills organisms at the root</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Extends roof lifespan significantly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Improves attic ventilation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Fully certified & insured team</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Eco-friendly cleaning solutions</span>
                </li>
              </ul>

              <a href="/contact" className="btn-primary">
                Request Free Roof Cleaning Quote
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
              <QuoteForm />

              <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Pricing</h4>
                <p className="text-3xl font-bold text-blue-600">$249 - $449</p>
                <p className="text-sm text-gray-600 mt-2">
                  Average residential roof. Price depends on roof size and pitch.
                </p>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
                <p className="font-semibold text-yellow-800 mb-1">💡 Industry Tip</p>
                <p className="text-yellow-700">
                  Roof cleaning should be done every 2-3 years to prevent damage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Soft Wash vs. Pressure Washing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">❌ Pressure Washing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Forces water under shingles</li>
                <li>• Damages granule coating</li>
                <li>• Creates roof leaks</li>
                <li>• Voids roof warranties</li>
                <li>• Shortens roof life</li>
                <li>• Doesn't stop regrowth</li>
                <li>• Very risky method</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">✓ Kendall Klean Soft Wash</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• No pressure damage</li>
                <li>• Preserves shingle coating</li>
                <li>• No roof leaks</li>
                <li>• Maintains roof warranties</li>
                <li>• Extends roof life 3-5 years</li>
                <li>• Prevents regrowth (12+ months)</li>
                <li>• Completely safe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Signs Your Roof Needs Cleaning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🟢', title: 'Green Algae', desc: 'Dark green streaks on roof surface' },
              { icon: '🌱', title: 'Moss Growth', desc: 'Moss growing between shingles' },
              { icon: '🍂', title: 'Debris Buildup', desc: 'Leaves, dirt, and branches accumulating' },
              { icon: '🌧️', title: 'Poor Drainage', desc: 'Water backing up in gutters' },
              { icon: '✨', title: 'Dull Appearance', desc: 'Roof looks old and weathered' },
              { icon: '⚠️', title: 'Slippery Surface', desc: 'Dangerous algae and moss' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Roof Investment Today"
        description="Professional soft wash roof cleaning - safe, effective, guaranteed"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
