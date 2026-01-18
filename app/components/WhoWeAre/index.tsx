/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

export const WhoWeAre = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout id="who" ref={ref}>
      <HeaderSection
        title="Who We Are"
        subtitle="A company specialized in the export of Brazilian mangoes, committed to quality, traceability, and global service"
      />

      <div className="w-auto flex items-center justify-center bg-gradient-to-br from-primary to-green-700 -mx-5 xl:-mx-20 py-10 xl:py-20">
        <div className="w-full max-w-[1000px] flex flex-col sm:items-center gap-6 xl:gap-10 bg-secondary rounded-lg shadow-lg p-5 sm:p-10 mx-5 xl:mx-20">
          <h3 className="w-max text-3xl text-center self-center uppercase border-b pb-1 font-bold">
            MangoMan
          </h3>
          <div className="max-w-[800px] flex flex-col sm:flex-row gap-5 border border-[#CCCCCC] p-5 rounded-lg bg-secondary shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div className="w-full sm:w-[350px] h-full min-h-[300px] flex-1 bg-[url(/ceo.jpg)] bg-cover bg-no-repeat rounded-lg"></div>
            <p className="flex-1 text-justify text-sm text-black opacity-90">
              MangoMan is a reference in the export of high-quality mangoes,
              offering an experience that goes beyond the fruit. We build
              long-term partnerships with small, medium, and large local
              producers, ensuring freshness, flavor, and honoring the dedication
              of those who cultivate the land. Our commitment is to bring the
              taste of Brazilian mangoes to the world with transparency,
              quality, and personalized service, delivering a complete journey
              from the field to the table.
            </p>
          </div>

          <div className="max-w-[800px] flex flex-col justify-between gap-6 xl:gap-5.5 text-secondary border-1 border-[#CCCCCC] rounded-lg p-5 bg-secondary shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Our Story{' '}
                <img
                  src="./mango-icon.png"
                  alt="Ícone de manga"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Mango Man was created to bring the freshest and most flavorful
                mangoes from Brazil to the world. We work with fruit from the
                São Francisco Valley, with 80% of our production coming from
                Bahia, where fertile soil and ideal climate conditions ensure
                superior-quality mangoes with a distinctive flavor and vibrant
                red coloration. Our commitment to sustainability and long-term
                partnerships reflects our constant pursuit of excellence at
                every stage of the process, from harvest to delivery.
              </p>
            </div>
            <div className="h-[1px] w-full bg-primary opacity-20"></div>
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Our Mission{' '}
                <img
                  src="./coconut-icon.png"
                  alt="Ícone de côco"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Our mission at Mango Man is to deliver mangoes of the highest
                quality, meeting the strictest food safety and sustainability
                standards to serve the global demand for fresh and nutritious
                products. We strive to be the leading choice for mango exports
                among our international clients, offering a unique experience
                with every fruit while promoting responsible agricultural
                practices and contributing to the development of the communities
                we work with.
              </p>
            </div>
            <div className="h-[1px] w-full bg-primary opacity-20"></div>
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Our Commitment to Quality{' '}
                <img
                  src="./lemon-icon.png"
                  alt="Ícone de limão"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Mango Man is driven by an unwavering commitment to quality. We
                carefully select our mangoes, applying best agricultural
                practices to ensure that each fruit meets the highest standards.
                From cultivation to transportation, we monitor every stage of
                the process to guarantee that our mangoes reach the final
                customer with the exceptional freshness and flavor for which we
                are known. Our commitment to quality goes beyond the final
                product, extending to service, transparency, and a constant
                pursuit of improvement—always focused on exceeding our clients’
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
});

WhoWeAre.displayName = 'WhoWeAre';
