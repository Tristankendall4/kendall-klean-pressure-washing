'use client';

import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full">
        <div className="text-4xl text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
