import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Exportateur Premium de Fruits Tropicaux - MangoMan',
  description:
    'MangoMan est un exportateur fiable de fruits tropicaux premium, fournissant des mangues, des noix de coco et des citrons frais aux marchés internationaux avec qualité et fiabilité.',
  authors: [{ name: 'MangoMan', url: 'https://mangoman.com.br' }],
  publisher: 'MangoMan',
  alternates: {
    canonical: 'https://www.mangoman.com.br',
  },
  keywords: [
    'exportateur de fruits tropicaux',
    'exportateur de mangue',
    'exportateur de noix de coco',
    'exportateur de citron',
    'mangues fraîches',
    'noix de coco fraîches',
    'citrons frais',
    'entreprise exportatrice de fruits',
    'fournisseur international de fruits',
    'fruits tropicaux premium',
    'exportateur brésilien de fruits',
    'exportation de fruits frais',
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
    locale: 'fr_FR',
    siteName: 'MangoMan',
    type: 'website',
    title: 'Exportateur Premium de Fruits Tropicaux - MangoMan',
    description:
      'Exportateur mondial de fruits tropicaux premium, y compris des mangues, des noix de coco et des citrons, répondant aux normes internationales de qualité.',
    url: 'https://mangoman.com.br',
    images: 'https://mangoman.com.br/opengraph-image.png',
    countryName: 'Brésil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exportateur Premium de Fruits Tropicaux - MangoMan',
    description:
      'Exportateur fiable de mangues, de noix de coco et de citrons frais pour les marchés internationaux.',
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
  other: {
    google: 'notranslate',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
