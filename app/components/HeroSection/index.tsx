import Image from 'next/image';
import { forwardRef } from 'react';

interface IHeroSection {
  home: {
    title: string;
    subtitle: string;
  };
}

export const HeroSection = forwardRef<HTMLElement, IHeroSection>(
  ({ home }, ref) => {
    return (
      <section
        id="hero"
        ref={ref}
        className="h-[calc(100dvh-120px)] relative overflow-hidden"
      >
        {/* Imagem LCP */}
        <Image
          src="/background.jpg"
          alt="Brazilian mango export background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />

        {/* Overlay opcional */}
        {/* <div className="absolute inset-0 bg-black/40 z-[1]" /> */}

        {/* Conteúdo */}
        <div className="relative z-[2] w-full h-full">
          <div className="mx-5 lg:mx-50 h-full flex flex-col justify-center lg:max-w-[700px] gap-4 pb-5 min-[760px]:text-center min-[1024px]:text-start">
            <h1 className="text-white text-4xl lg:text-6xl uppercase font-bold">
              {home.title ?? 'From the northeastern soil to the world!'}
            </h1>

            <h2 className="text-white lg:text-2xl font-medium">
              {home.subtitle ??
                'Exporting excellence, sustainability, and the authentic flavor of Brazilian mangoes.'}
            </h2>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = 'HeroSection';
