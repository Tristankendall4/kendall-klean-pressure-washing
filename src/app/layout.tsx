import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Kendall Klean Pressure Washing';
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+1-309-555-0100';
const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@kendallklean.com';
const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '123 Main St, Peoria, IL 61602';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: `${businessName} | Pressure Washing Peoria IL`,
    template: `%s | ${businessName}`,
  },
  description:
    'Professional pressure washing services in Peoria, IL. House washing, driveway cleaning, roof soft washing & more. Same-day quotes available.',
  keywords: [
    'pressure washing peoria il',
    'house washing peoria',
    'driveway cleaning peoria',
    'soft wash roof cleaning',
    'exterior cleaning illinois',
    'pressure washing near me',
  ],
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kendallklean.com',
    siteName: businessName,
    title: `${businessName} | Pressure Washing Peoria IL`,
    description:
      'Professional pressure washing services in Peoria, IL. House washing, driveway cleaning, roof soft washing & more.',
    images: [
      {
        url: 'https://kendallklean.com/og-image.png',
        width: 1200,
        height: 630,
        alt: businessName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessName} | Pressure Washing Peoria IL`,
    description:
      'Professional pressure washing services in Peoria, IL.',
    images: ['https://kendallklean.com/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  metadataBase: new URL('https://kendallklean.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: businessName,
              image: 'https://kendallklean.com/logo.png',
              description:
                'Professional pressure washing services in Peoria, IL and surrounding areas.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: businessAddress.split(',')[0],
                addressLocality: 'Peoria',
                addressRegion: 'IL',
                postalCode: '61602',
                addressCountry: 'US',
              },
              telephone: phoneNumber,
              email: businessEmail,
              url: 'https://kendallklean.com',
              priceRange: '$$',
              areaServed: [
                'Peoria, IL',
                'East Peoria, IL',
                'Pekin, IL',
                'Morton, IL',
                'Washington, IL',
                'Tazewell County, IL',
              ],
              sameAs: [
                'https://www.facebook.com/kendallklean',
                'https://www.google.com/maps/place/kendallklean',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header phoneNumber={phoneNumber} businessName={businessName} />
        <main>{children}</main>
        <Footer phoneNumber={phoneNumber} businessEmail={businessEmail} />
        <MobileCallButton phoneNumber={phoneNumber} />
      </body>
    </html>
  );
}
