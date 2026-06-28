import { HeroSection, BeforeAfterGallery, CTASection } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After Gallery | Kendall Klean Pressure Washing',
  description:
    'See the dramatic transformations Kendall Klean delivers. Before and after photos of pressure washing projects in Peoria, IL.',
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Before & After Gallery"
        subtitle="See the dramatic transformations we deliver to Peoria homes and businesses"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />

      <BeforeAfterGallery />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Results from Real Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 font-semibold">Satisfied Customers</p>
              <p className="text-gray-500 text-sm mt-1">All 5-star reviews</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600 font-semibold">Years of Experience</p>
              <p className="text-gray-500 text-sm mt-1">Professional service</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">7</div>
              <p className="text-gray-600 font-semibold">Services Offered</p>
              <p className="text-gray-500 text-sm mt-1">All exterior cleaning needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Tom & Linda',
                service: 'House Washing',
                quote:
                  'Our house looks brand new! The transformation was incredible. Professional, punctual, and fair pricing.',
              },
              {
                name: 'Michael',
                service: 'Roof Cleaning',
                quote:
                  "Best roof cleaning service we've found. They were safe, thorough, and left the yard spotless.",
              },
              {
                name: 'Sarah',
                service: 'Driveway Cleaning',
                quote:
                  'Our driveway went from looking 10 years old to like-new. Best investment in curb appeal we made.',
              },
              {
                name: 'Robert',
                service: 'Deck Cleaning',
                quote:
                  "Can't believe how good our deck looks. They did an amazing job and were super professional.",
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.quote}"</p>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Property Today"
        description="Free estimates, same-day service available"
        primaryCta={{
          text: 'Get Free Estimate',
          href: '/contact',
        }}
      />
    </>
  );
}
