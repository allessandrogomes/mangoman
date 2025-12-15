import { forwardRef } from "react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";

const certifications = [
    {
        src: "gap-certificate.png",
        alt: "Certificado Global GAP"
    },
    {
        src: "grasp-certificate.png",
        alt: "Certificado GRASP"
    },
    {
        src: "coc-certificate.png",
        alt: "Certificado COC"
    },
    {
        src: "smeta-certificate.png",
        alt: "Certificado SMETA"
    }
]

export const Certifications = forwardRef<HTMLElement>((_, ref) => {
    return (
        <SectionLayout className="mb-[200px]" ref={ref}>
            <HeaderSection
                title="Certificações"
                subtitle="Atendemos aos principais padrões internacionais para exportação de frutas"
                titleColor="quaternary"
                alignCenter
            />
            <div className="flex justify-center flex-wrap items-center mt-5">
                {certifications.map((props, index) => (
                    <div key={index} className="w-[300px] h-[200px]">
                        <img {...props} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </SectionLayout>
    )
})

Certifications.displayName = 'Certifications'