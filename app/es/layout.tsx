import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Exportador Premium de Frutas Tropicales - MangoMan',
  description:
    'MangoMan es un exportador confiable de frutas tropicales premium, suministrando mangos, cocos y limones frescos a mercados internacionales con calidad y fiabilidad.',
  authors: [{ name: 'MangoMan', url: 'https://mangoman.com.br' }],
  publisher: 'MangoMan',
  alternates: {
    canonical: 'https://www.mangoman.com.br',
  },
  keywords: [
    'exportador de frutas tropicales',
    'exportador de mango',
    'exportador de coco',
    'exportador de limón',
    'mangos frescos',
    'cocos frescos',
    'limones frescos',
    'empresa exportadora de frutas',
    'proveedor internacional de frutas',
    'frutas tropicales premium',
    'exportador brasileño de frutas',
    'exportación de frutas frescas',
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
    locale: 'es_ES',
    siteName: 'MangoMan',
    type: 'website',
    title: 'Exportador Premium de Frutas Tropicales - MangoMan',
    description:
      'Exportador global de frutas tropicales premium, incluyendo mangos, cocos y limones, cumpliendo con estándares internacionales de calidad.',
    url: 'https://mangoman.com.br',
    images: 'https://mangoman.com.br/opengraph-image.png',
    countryName: 'Brasil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exportador Premium de Frutas Tropicales - MangoMan',
    description:
      'Exportador confiable de mangos, cocos y limones frescos para mercados internacionales.',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
