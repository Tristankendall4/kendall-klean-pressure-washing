'use client';

export default function PricingSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Pricing</h2>
          <p className="text-xl text-gray-600">
            Quality pressure washing doesn't have to break the bank. Free estimates on all services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Service Pricing Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">House Washing</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$199 - $399</p>
            <p className="text-gray-600 text-sm mb-4">
              Soft wash exterior cleaning. Includes gutters and trim.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Includes all exterior surfaces</li>
              <li>✓ Soft wash (roof safe)</li>
              <li>✓ Gutter cleaning included</li>
              <li>✓ Free touch-ups for 30 days</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Driveway & Patio</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$149 - $299</p>
            <p className="text-gray-600 text-sm mb-4">
              Professional concrete cleaning. Oil removal included.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Concrete & asphalt</li>
              <li>✓ Oil stain removal</li>
              <li>✓ Weed removal</li>
              <li>✓ Pet-friendly solutions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Roof Soft Wash</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$249 - $449</p>
            <p className="text-gray-600 text-sm mb-4">
              Safe, professional roof cleaning. No pressure damage.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Soft wash method</li>
              <li>✓ Moss & algae removal</li>
              <li>✓ Extends roof life</li>
              <li>✓ Insured & certified</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Deck Cleaning</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$199 - $349</p>
            <p className="text-gray-600 text-sm mb-4">
              Restore your deck's natural beauty safely.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Wood & composite decks</li>
              <li>✓ Stain removal</li>
              <li>✓ Protective sealant available</li>
              <li>✓ Fence cleaning included</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Gutter Cleaning</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">$99 - $199</p>
            <p className="text-gray-600 text-sm mb-4">
              Keep your gutters flowing freely. Debris removal.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ All debris removed</li>
              <li>✓ Downspout cleaning</li>
              <li>✓ Gutter guards available</li>
              <li>✓ Multi-story homes OK</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Services</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">Custom Quote</p>
            <p className="text-gray-600 text-sm mb-4">
              Storefronts, parking lots, fleet washing & more.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Custom pricing</li>
              <li>✓ After-hours available</li>
              <li>✓ Monthly contracts</li>
              <li>✓ Full insurance coverage</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">All Prices Include:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>✓ Free Estimate</div>
            <div>✓ Fully Insured</div>
            <div>✓ 100% Guarantee</div>
            <div>✓ Same-Day Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
