import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium Tropical Fruit Exporter - MangoMan',
  description:
    'MangoMan is a trusted exporter of premium tropical fruits, supplying fresh mangoes, coconuts, and lemons to international markets with quality and reliability.',
  authors: [{ name: 'MangoMan', url: 'https://mangoman.com.br' }],
  publisher: 'MangoMan',
  alternates: {
    canonical: 'https://www.mangoman.com.br',
  },
  keywords: [
    'tropical fruit exporter',
    'mango exporter',
    'coconut exporter',
    'lemon exporter',
    'fresh mangoes',
    'fresh coconuts',
    'fresh lemons',
    'fruit export company',
    'international fruit supplier',
    'premium tropical fruits',
    'Brazilian fruit exporter',
    'fresh fruit export',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    locale: 'en_US',
    siteName: 'MangoMan',
    type: 'website',
    title: 'Premium Tropical Fruit Exporter - MangoMan',
    description:
      'Global exporter of premium tropical fruits, including mangoes, coconuts, and lemons, meeting international quality standards.',
    url: 'https://mangoman.com.br',
    images: 'https://mangoman.com.br/opengraph-image.png',
    countryName: 'Brazil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Tropical Fruit Exporter - MangoMan',
    description:
      'Trusted exporter of fresh mangoes, coconuts, and lemons for international markets.',
    images: 'https://mangoman.com.br/opengraph-image.png',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
