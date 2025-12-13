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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <WhoWeAre />
        <OurVarieties />
        <GuaranteedQuality />
      </main>

      <footer></footer>
    </>
  );
}
