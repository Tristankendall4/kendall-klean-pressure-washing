import { HeroSection, QuoteForm, CTASection } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kendall Klean | Pressure Washing Peoria',
  description:
    'Contact Kendall Klean for a free pressure washing quote. Call, email, or fill out our online form. Same-day response available.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Kendall Klean"
        subtitle="Get your free pressure washing estimate today"
        primaryCta={{
          text: 'Call Now: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
                    <a
                      href="tel:+1-309-555-0100"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      +1-309-555-0100
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Available 7am - 8pm, Mon-Sat. Same-day quotes available.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@kendallklean.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      info@kendallklean.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      We respond to all emails within 2 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Service Area</h3>
                    <p className="text-gray-700 font-semibold">
                      Peoria, East Peoria, Pekin, Morton, Washington & Tazewell County
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Free estimates for all service areas
                    </p>
                  </div>
                </div>

                {/* Text Option */}
                <div className="flex gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Text Us</h3>
                    <p className="text-gray-700 font-semibold">+1-309-555-0100</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Quick quotes via SMS - usually responds in 10 minutes
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Free, no-obligation estimate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Same-day response available</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>No high-pressure sales tactics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Fully licensed and insured</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Your Free Estimate
                </h3>
                <QuoteForm />

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                  <p className="font-semibold mb-1">✓ We respond quickly</p>
                  <p>Most quotes within 2 hours during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Central Illinois Proudly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Peoria County</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Peoria</li>
                <li>✓ East Peoria</li>
                <li>✓ Pekin</li>
                <li>✓ Morton</li>
                <li>✓ Washington</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Surrounding Areas</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Tazewell County</li>
                <li>✓ Fond du Lac</li>
                <li>✓ Chillicothe</li>
                <li>✓ Germantown Hills</li>
                <li>✓ Other areas by request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't Delay - Call Today!"
        description="Available 7am-8pm, Monday-Saturday. Same-day quotes in most cases."
        primaryCta={{
          text: 'Call: +1-309-555-0100',
          href: 'tel:+1-309-555-0100',
        }}
      />
    </>
  );
}
