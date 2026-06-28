'use client';

interface Review {
  author: string;
  rating: number;
  text: string;
  service: string;
}

const reviews: Review[] = [
  {
    author: 'John M.',
    rating: 5,
    text: 'Kendall Klean transformed our house! The pressure washing revealed our home looked like new again. Highly professional and punctual.',
    service: 'House Washing',
  },
  {
    author: 'Sarah T.',
    rating: 5,
    text: 'Our driveway went from black to looking factory new. Fair pricing and outstanding customer service.',
    service: 'Driveway Cleaning',
  },
  {
    author: 'Mike R.',
    rating: 5,
    text: 'Best roof cleaning service in Peoria. Safe, thorough, and they left the yard cleaner than they found it.',
    service: 'Roof Cleaning',
  },
  {
    author: 'Jennifer L.',
    rating: 5,
    text: 'Booked a free quote and they came out same day. No high pressure sales tactics, just honest work at fair prices.',
    service: 'Deck Cleaning',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Peoria Homeowners</h2>
          <p className="text-xl text-gray-600 mb-6">
            Over 500+ 5-star reviews from satisfied customers
          </p>
          <div className="flex items-center justify-center gap-4">
            <StarRating rating={5} />
            <span className="text-2xl font-bold text-gray-900">{avgRating}</span>
            <span className="text-gray-600">Based on 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <StarRating rating={review.rating} />
              <p className="text-sm text-gray-500 font-semibold mt-2">{review.service}</p>
              <p className="text-gray-700 my-4">"{review.text}"</p>
              <p className="font-semibold text-gray-900">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Why Choose Kendall Klean?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Locally owned & operated since 2015</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Licensed, insured & fully certified</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>100% satisfaction guarantee</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Same-day free estimates available</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Commercial & residential experts</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Eco-friendly cleaning solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
