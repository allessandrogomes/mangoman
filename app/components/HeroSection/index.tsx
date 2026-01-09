import { forwardRef } from 'react';

export const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="h-[calc(100dvh-120px)]" ref={ref}>
      <div className="w-full h-full overflow-hidden relative bg-[url(/background.png)] bg-cover bg-center">
        <div className="mx-5 lg:mx-50 h-full flex flex-col justify-center lg:max-w-[700px] gap-4 pb-5 min-[760px]:text-center min-[1024px]:text-start">
          <h1 className="text-white text-4xl lg:text-6xl uppercase font-bold">
            Manga brasileira com qualidade para o mundo
          </h1>
          <h2 className="text-white lg:text-2xl font-medium">
            Exportação confiável, produção sustentável e entrega segura
          </h2>
        </div>
        {/* <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src="./video.mp4" type="video/mp4" />
                </video> */}
        {/* <div className="absolute inset-0 z-10 bg-black/40"></div> */}
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
