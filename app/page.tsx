'use client'

import '@fontsource/poppins';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhoWeAre } from './components/WhoWeAre';
import { OurVarieties } from './components/OurVarieties';
import { GuaranteedQuality } from './components/GuaranteedQuality';
import { Certifications } from './components/Certifications';
import { Gallery } from './components/Gallery';
import { WhereAreWe } from './components/WhereAreWe';
import { RequestAQuote } from './components/RequestAQuote';
import { Footer } from './components/Footer';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const whoWeAreRef = useRef<HTMLElement | null>(null);
  const varietiesRef = useRef<HTMLElement | null>(null);
  const qualityRef = useRef<HTMLElement | null>(null);
  const certificationsRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const whereAreWeRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;

    const HEADER_HEIGHT = 120;

    const top =
      ref.current.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onHero={() => scrollTo(heroRef)}
        onWhoWeAre={() => scrollTo(whoWeAreRef)}
        onVarieties={() => scrollTo(varietiesRef)}
        onQuality={() => scrollTo(qualityRef)}
        onCertifications={() => scrollTo(certificationsRef)}
        onGallery={() => scrollTo(galleryRef)}
        onWhere={() => scrollTo(whereAreWeRef)}
        onQuote={() => scrollTo(quoteRef)}
      />

      <main className='pt-[120px]'>
        <HeroSection ref={heroRef} />
        <WhoWeAre ref={whoWeAreRef} />
        <OurVarieties ref={varietiesRef} />
        <GuaranteedQuality ref={qualityRef} />
        <Certifications ref={certificationsRef} />
        <Gallery ref={galleryRef} />
        <WhereAreWe ref={whereAreWeRef} />
        <RequestAQuote ref={quoteRef} />
      </main>

      <Footer />
    </>
  );
}
