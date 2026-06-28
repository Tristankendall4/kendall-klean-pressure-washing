'use client';

import Link from 'next/link';

interface ServiceAreaCardProps {
  name: string;
  description: string;
  href: string;
  population?: string;
}

export default function ServiceAreaCard({
  name,
  description,
  href,
  population,
}: ServiceAreaCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition cursor-pointer">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        {population && (
          <p className="text-sm text-gray-500 mb-3">Population: {population}</p>
        )}
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-blue-600 font-semibold hover:text-blue-700">
          View Services in {name} →
        </span>
      </div>
    </Link>
  );
}
