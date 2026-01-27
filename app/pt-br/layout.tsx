import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Exportadora Premium de Frutas Tropicais - MangoMan',
  description:
    'A MangoMan é uma exportadora confiável de frutas tropicais premium, fornecendo mangas, cocos e limões frescos para mercados internacionais com qualidade e confiabilidade.',
  authors: [{ name: 'MangoMan', url: 'https://mangoman.com.br' }],
  publisher: 'MangoMan',
  alternates: {
    canonical: 'https://www.mangoman.com.br',
  },
  keywords: [
    'exportadora de frutas tropicais',
    'exportadora de manga',
    'exportadora de coco',
    'exportadora de limão',
    'mangas frescas',
    'cocos frescos',
    'limões frescos',
    'empresa exportadora de frutas',
    'fornecedor internacional de frutas',
    'frutas tropicais premium',
    'exportadora brasileira de frutas',
    'exportação de frutas frescas',
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
    locale: 'pt_BR',
    siteName: 'MangoMan',
    type: 'website',
    title: 'Exportadora Premium de Frutas Tropicais - MangoMan',
    description:
      'Exportadora global de frutas tropicais premium, incluindo mangas, cocos e limões, atendendo aos padrões internacionais de qualidade.',
    url: 'https://mangoman.com.br',
    images: 'https://mangoman.com.br/opengraph-image.png',
    countryName: 'Brasil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exportadora Premium de Frutas Tropicais - MangoMan',
    description:
      'Exportadora confiável de mangas, cocos e limões frescos para mercados internacionais.',
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
