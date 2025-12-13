/* eslint-disable @next/next/no-img-element */

import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";



export function WhoWeAre() {
    return (
        <SectionLayout>
            <HeaderSection
                title="Quem somos"
                subtitle="Uma empresa especializada na exportação de manga brasileira,
                    com compromisso em qualidade, rastreabilidade e atendimento global."
            />

            <div className="bg-gradient-to-br from-primary to-green-700 -mx-10 xl:-mx-20 py-10 xl:py-20 w-auto flex items-center">
                <div className="flex flex-col xl:flex-row border border-white p-5 mx-10 xl:mx-20 justify-between items-center xl:items-start gap-6 xl:gap-0">
                    <div>
                        <img src="./quem-somos.png" alt="Imagem de uma fazenda de mangas" />
                    </div>
                    <div className="text-secondary bg-secondary rounded-lg shadow-xl p-5 border-box w-full xl:w-1/2 flex flex-col justify-between gap-6 xl:gap-5.5">
                        <div>
                            <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">Nossa História <img src="./mango-icon.png" alt="Ícone de manga" className="relative bottom-1 w-[30px] h-[30px]" /></h4>
                            <p className="text-justify text-primary text-xs xl:text-sm">Surgimos no coração do Vale do São Francisco, região reconhecida
                                mundialmente pela produção de manga. Unimos experiência no campo,
                                cuidado artesanal e processos modernos para levar ao exterior uma
                                fruta que representa a força da nossa agricultura.
                            </p>
                        </div>
                        <div className="h-[1px] w-full bg-primary opacity-20"></div>
                        <div>
                            <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">Nossa Missão <img src="./mango-icon.png" alt="Ícone de manga" className="relative bottom-1 w-[30px] h-[30px]" /></h4>
                            <p className="text-justify text-primary text-xs xl:text-sm">Entregar mangas frescas, seguras e saborosas, mantendo práticas
                                sustentáveis em cada etapa — do cultivo à exportação — e valorizando
                                os profissionais que fazem parte da nossa jornada.
                            </p>
                        </div>
                        <div className="h-[1px] w-full bg-primary opacity-20"></div>
                        <div>
                            <h4 className="flex gap-4 text-primary items-center text-base xl:text-xl uppercase font-bold mb-1">Nosso Compromisso com a Qualidade <img src="./mango-icon.png" alt="Ícone de manga" className="relative bottom-1 w-[30px] h-[30px]" /></h4>
                            <p className="text-justify text-primary text-xs xl:text-sm">Trabalhamos com padrões rigorosos de seleção, colheita e pós-colheita, garantindo
                                frutas com excelente aparência, maturação ideal e rastreabilidade completa.
                                O foco é oferecer um produto confiável, consistente e pronto para atender às exigências
                                do mercado internacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}