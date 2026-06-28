import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Let us help you find what you need.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary">
            View Our Services
          </Link>
          <a href="tel:+1-309-555-0100" className="btn-call">
            Call Us Now
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-600 mb-4">
            Need immediate assistance?
          </p>
          <p className="text-2xl font-bold text-gray-900">
            +1-309-555-0100
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Available 7am - 8pm, Monday - Saturday
          </p>
        </div>
      </div>
    </div>
  );
}
