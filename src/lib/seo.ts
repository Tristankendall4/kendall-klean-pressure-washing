import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: 'website' | 'article';
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = 'https://kendallklean.com/og-image.png',
    url,
    type = 'website',
  } = config;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function generateLocalBusinessSchema(
  name: string,
  address: string,
  phone: string,
  email: string,
  latitude: number,
  longitude: number,
  areaServed: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    image: 'https://kendallklean.com/logo.png',
    description: 'Professional pressure washing services in Central Illinois',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.split(',')[0],
      addressLocality: 'Peoria',
      addressRegion: 'IL',
      postalCode: '61602',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    telephone: phone,
    email,
    url: 'https://kendallklean.com',
    priceRange: '$$',
    areaServed,
    sameAs: [
      'https://www.facebook.com/kendallklean',
      'https://www.google.com/maps/place/kendallklean',
    ],
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  provider: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
    },
  };
}
