/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

export const WhoWeAre = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout ref={ref}>
      <HeaderSection
        title="Quem somos"
        subtitle="Uma empresa especializada na exportação de manga brasileira,
                    com compromisso em qualidade, rastreabilidade e atendimento global."
      />

      <div className="w-auto flex items-center justify-center bg-gradient-to-br from-primary to-green-700 -mx-5 xl:-mx-20 py-10 xl:py-20">
        <div className="flex flex-col xl:flex-row sm:items-center gap-6 xl:gap-10 bg-secondary rounded-lg shadow-lg p-5 sm:p-10 mx-5 xl:mx-20">
          <div className="w-full sm:w-[350px]">
            <img
              src="./ceo.jpg"
              alt="Foto de Willian Aislan"
              className="rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)]"
            />
          </div>
          <div className="max-w-[600px] flex flex-col justify-between gap-6 xl:gap-5.5 text-secondary border-2 border-primary rounded-lg p-5 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Nossa História{' '}
                <img
                  src="./mango-icon.png"
                  alt="Ícone de manga"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Surgimos no coração do Vale do São Francisco, região reconhecida
                mundialmente pela produção de manga. Unimos experiência no
                campo, cuidado artesanal e processos modernos para levar ao
                exterior uma fruta que representa a força da nossa agricultura.
              </p>
            </div>
            <div className="h-[1px] w-full bg-primary opacity-20"></div>
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Nossa Missão{' '}
                <img
                  src="./coconut-icon.png"
                  alt="Ícone de côco"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Entregar mangas frescas, seguras e saborosas, mantendo práticas
                sustentáveis em cada etapa — do cultivo à exportação — e
                valorizando os profissionais que fazem parte da nossa jornada.
              </p>
            </div>
            <div className="h-[1px] w-full bg-primary opacity-20"></div>
            <div>
              <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">
                Nosso Compromisso com a Qualidade{' '}
                <img
                  src="./lemon-icon.png"
                  alt="Ícone de limão"
                  className="relative bottom-1 w-[30px] h-[30px]"
                />
              </h4>
              <p className="text-justify text-black text-xs xl:text-sm opacity-90">
                Trabalhamos com padrões rigorosos de seleção, colheita e
                pós-colheita, garantindo frutas com excelente aparência,
                maturação ideal e rastreabilidade completa. O foco é oferecer um
                produto confiável, consistente e pronto para atender às
                exigências do mercado internacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
});

WhoWeAre.displayName = 'WhoWeAre';
