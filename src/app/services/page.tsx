import { HeroSection, ServiceCard, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Pressure Washing Services | Kendall Klean',
  description:
    'Full range of pressure washing services: house washing, driveway cleaning, roof soft wash, deck cleaning & more in Peoria, IL.',
  keywords: [
    'pressure washing services',
    'house washing',
    'driveway cleaning',
    'roof cleaning',
    'deck cleaning',
    'commercial pressure washing',
  ],
};

const services = [
  {
    id: 'house-washing',
    title: 'House Washing',
    description:
      'Professional soft wash exterior cleaning for residential homes. We remove dirt, algae, mildew, and stains without damaging paint or materials.',
    price: '$199 - $399',
    icon: '🏠',
    details: [
      'Soft wash siding cleaning',
      'Gutter and trim cleaning',
      'Downspout cleaning',
      'Safe for all exterior types',
      'Extends paint life',
      '30-day satisfaction guarantee',
    ],
  },
  {
    id: 'driveway-cleaning',
    title: 'Driveway & Patio Cleaning',
    description:
      'Remove oil stains, dirt, and grime from concrete and asphalt. We safely clean without damaging the surface.',
    price: '$149 - $299',
    icon: '🛣️',
    details: [
      'Concrete cleaning',
      'Asphalt cleaning',
      'Oil stain removal',
      'Weed removal',
      'Pet-friendly solutions',
      'Sealing available',
    ],
  },
  {
    id: 'roof-cleaning',
    title: 'Roof Soft Washing',
    description:
      'Professional roof cleaning using soft wash methods. No pressure damage. Extends roof life and removes moss, algae, and stains.',
    price: '$249 - $449',
    icon: '🏘️',
    details: [
      'Soft wash method (no pressure)',
      'Moss and algae removal',
      'Extends roof lifespan',
      'Prevents shingle damage',
      'Fully certified & insured',
      'Safe for all roof types',
    ],
  },
  {
    id: 'deck-fence',
    title: 'Deck & Fence Cleaning',
    description:
      'Restore your deck and fence to pristine condition. We specialize in wood and composite materials with safe, professional cleaning.',
    price: '$199 - $349',
    icon: '🛝',
    details: [
      'Wood deck cleaning',
      'Composite deck cleaning',
      'Fence restoration',
      'Stain removal',
      'Protective sealant available',
      'Extends material life',
    ],
  },
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    description:
      'Keep your gutters flowing freely with professional cleaning and debris removal. Includes downspout cleaning.',
    price: '$99 - $199',
    icon: '🌧️',
    details: [
      'Complete debris removal',
      'Downspout cleaning',
      'Multi-story safe',
      'Gutter guard installation',
      'Preventative maintenance',
      'Same-day service available',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description:
      'Professional pressure washing for storefronts, parking lots, and commercial properties. After-hours service available.',
    price: 'Custom Quote',
    icon: '🏪',
    details: [
      'Storefront cleaning',
      'Parking lot pressure washing',
      'Building exterior cleaning',
      'After-hours service available',
      'Monthly contracts',
      'Full insurance coverage',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Pressure Washing Services"
        subtitle="Complete exterior cleaning solutions for Peoria homes and businesses"
        primaryCta={{
          text: 'Get Free Quote',
          href: '#services',
        }}
        secondaryCta={{
          text: 'View Pricing',
          href: '#pricing',
        }}
      />

      <section className="section-padding" id="services">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-700 mb-6">{service.description}</p>

                <h4 className="font-bold text-gray-900 mb-3">Service Includes:</h4>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-50" id="pricing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Kendall Klean?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h4 className="font-bold text-gray-900">500+ 5-Star Reviews</h4>
                    <p className="text-gray-600">Trusted by hundreds of satisfied customers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Same-Day Service</h4>
                    <p className="text-gray-600">Free estimates, quick turnaround</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">✅</div>
                  <div>
                    <h4 className="font-bold text-gray-900">100% Satisfaction Guarantee</h4>
                    <p className="text-gray-600">30-day touch-up guarantee on all work</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fully Licensed & Insured</h4>
                    <p className="text-gray-600">Professional equipment and certified team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Schedule Your Pressure Washing?"
        description="We offer same-day free estimates for most Peoria-area locations"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
