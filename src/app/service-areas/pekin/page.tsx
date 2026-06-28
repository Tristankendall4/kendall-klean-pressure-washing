import { HeroSection, CTASection, QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing in Pekin & Morton, IL | Kendall Klean',
  description:
    'Professional pressure washing in Pekin, Morton, and Washington, IL. Quality service, free estimates, 500+ reviews.',
};

export default function PekinPage() {
  return (
    <>
      <HeroSection
        title="Pressure Washing in Pekin, Morton & Washington"
        subtitle="Professional exterior cleaning for Central Illinois residents"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
        phoneNumber="+1-309-555-0100"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Quality Pressure Washing for Pekin, Morton & Washington
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2015, Kendall Klean has been proudly serving residents and businesses
                throughout Pekin, Morton, Washington, and surrounding areas with professional
                pressure washing services.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Service Coverage:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Pekin, IL</p>
                    <p className="text-sm text-gray-600">Full service coverage</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Morton, IL</p>
                    <p className="text-sm text-gray-600">Full service coverage</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Washington, IL</p>
                    <p className="text-sm text-gray-600">Full service coverage</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Tazewell County</p>
                    <p className="text-sm text-gray-600">Surrounding areas</p>
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn-primary">
                Request Your Free Quote Today
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">All Our Services</h3>

              <div className="space-y-3 mb-8">
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">House Washing</p>
                    <p className="text-sm text-gray-600">$199-$399</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">Driveway Cleaning</p>
                    <p className="text-sm text-gray-600">$149-$299</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">Roof Soft Wash</p>
                    <p className="text-sm text-gray-600">$249-$449</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">Deck & Fence</p>
                    <p className="text-sm text-gray-600">$199-$349</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">Gutter Cleaning</p>
                    <p className="text-sm text-gray-600">$99-$199</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-gray-900">Commercial Services</p>
                    <p className="text-sm text-gray-600">Custom pricing</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Fast Estimate</h4>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kendall Klean?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ 500+ Five-Star Reviews</h3>
              <p className="text-gray-600">
                Trusted by hundreds of satisfied customers in Pekin, Morton, and Washington for
                quality workmanship and professional service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Same-Day Service</h3>
              <p className="text-gray-600">
                Free estimates available same day in most cases. Quick scheduling and fast
                turnaround on your service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Fully Licensed & Insured</h3>
              <p className="text-gray-600">
                Professional team with proper certifications and insurance coverage. Safe,
                quality workmanship every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ 100% Guarantee</h3>
              <p className="text-gray-600">
                Satisfaction guarantee on all services with 30-day touch-up included. We stand
                behind our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Pekin, Morton or Washington Property"
        description="Free estimates, no obligation. Call today for same-day quote."
        primaryCta={{
          text: 'Call: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
