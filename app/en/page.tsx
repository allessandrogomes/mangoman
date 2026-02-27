/* eslint-disable @next/next/no-img-element */
'use client';

import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { WhoWeAre } from '../components/WhoWeAre';
import { OurVarieties } from '../components/OurVarieties';
import { GuaranteedQuality } from '../components/GuaranteedQuality';
import { Certifications } from '../components/Certifications';
import { Gallery } from '../components/Gallery';
import { WhereAreWe } from '../components/WhereAreWe';
import { RequestAQuote } from '../components/RequestAQuote';
import { Footer } from '../components/Footer';
import { useRef } from 'react';
import data from '../../locales/en.json';
import { useGetProducts } from '../hooks/use-get-products';

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const whoWeAreRef = useRef<HTMLElement | null>(null);
  const varietiesRef = useRef<HTMLElement | null>(null);
  const qualityRef = useRef<HTMLElement | null>(null);
  const certificationsRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const whereAreWeRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLElement | null>(null);

  const { data: products } = useGetProducts();

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;

    const HEADER_HEIGHT = 120;

    const top = ref.current.offsetTop - HEADER_HEIGHT;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        header={data.header}
        onHero={() => scrollTo(heroRef)}
        onWhoWeAre={() => scrollTo(whoWeAreRef)}
        onVarieties={() => scrollTo(varietiesRef)}
        onQuality={() => scrollTo(qualityRef)}
        onCertifications={() => scrollTo(certificationsRef)}
        onGallery={() => scrollTo(galleryRef)}
        onWhere={() => scrollTo(whereAreWeRef)}
        onQuote={() => scrollTo(quoteRef)}
      />

      <main className="pt-[120px]">
        <HeroSection home={data.home} ref={heroRef} />
        <WhoWeAre about={data.about} ref={whoWeAreRef} />
        <OurVarieties
          ref={varietiesRef}
          products={products?.data}
          raw={undefined}
        />
        <GuaranteedQuality processes={data.processes} ref={qualityRef} />
        <Certifications
          certifications={data.certifications}
          ref={certificationsRef}
        />
        <Gallery gallery={data.gallery} ref={galleryRef} />
        <WhereAreWe localization={data.localization} ref={whereAreWeRef} />
        <RequestAQuote contact={data.contact} ref={quoteRef} />
        <a
          className="w-15 lg:w-20 h-15 lg:h-20 fixed right-5 bottom-5 z-10 cursor-pointer"
          href="https://wa.me/5574981334117"
          target="_blank"
        >
          <img src="/whatsapp-icon.png" alt="Ícone da Logo do WhatsApp" />
        </a>
      </main>

      <Footer
        footer={data.footer}
        onHero={() => scrollTo(heroRef)}
        onWhoWeAre={() => scrollTo(whoWeAreRef)}
        onVarieties={() => scrollTo(varietiesRef)}
        onQuality={() => scrollTo(qualityRef)}
        onCertifications={() => scrollTo(certificationsRef)}
        onGallery={() => scrollTo(galleryRef)}
        onWhere={() => scrollTo(whereAreWeRef)}
        onQuote={() => scrollTo(quoteRef)}
      />
    </>
  );
}
