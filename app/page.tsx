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

export default function Home() {
  return (
    <>
      <Header />

      <main className='pt-[120px]'>
        <HeroSection />
        <WhoWeAre />
        <OurVarieties />
        <GuaranteedQuality />
        <Certifications />
        <Gallery />
        <WhereAreWe />
        <RequestAQuote />
      </main>

      <Footer />
    </>
  );
}
