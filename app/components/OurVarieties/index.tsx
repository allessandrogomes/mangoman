
import { forwardRef } from "react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";
import { Card } from "./Card";


export const OurVarieties = forwardRef<HTMLElement>((_, ref) => {
    return (
        <SectionLayout ref={ref}>
            <HeaderSection
                title="Nossas variedades"
                titleColor="tertiary"
                subtitle="Mangas selecionadas, cultivadas com cuidado e certificadas para exportação"
            />

            <div
                className="
                bg-gradient-to-br 
                from-tertiary 
                to-red-500
                w-auto flex flex-col flex-wrap xl:flex-row gap-10 items-center 
                justify-around p-10 xl:p-20 -mx-10 xl:-mx-20 py-10 xl:py-20"
            >
                <Card
                    src="./manga-tommy.png"
                    altImage="Manga Tommy"
                    title="Tommy Atkins"
                    description="Manga de casca avermelhada, resistente ao transporte, 
                    com polpa firme, pouca fibra e sabor equilibrado — uma das mais exportadas do Brasil"
                />
                <Card
                    src="./manga-palmer.png"
                    altImage="Manga Palmer"
                    title="Palmer"
                    description="Fruto grande, alongado e de coloração intensa. Tem polpa macia, 
                    baixa acidez e poucas fibras, oferecendo um sabor mais adocicado e suave"
                />
                <Card
                    src="./manga-kent.png"
                    altImage="Manga Kent"
                    title="Kent"
                    description="Reconhecida pela doçura marcante e textura cremosa. 
                    Praticamente sem fibras, é muito apreciada em mercados que buscam mangas premium"
                    premium
                />
                <Card
                    src="./manga-tommy.png"
                    altImage="Manga Tommy"
                    title="Tommy Atkins"
                    description="Manga de casca avermelhada, resistente ao transporte, 
                    com polpa firme, pouca fibra e sabor equilibrado — uma das mais exportadas do Brasil"
                    premium
                />
                <Card
                    src="./manga-palmer.png"
                    altImage="Manga Palmer"
                    title="Palmer"
                    description="Fruto grande, alongado e de coloração intensa. Tem polpa macia, 
                    baixa acidez e poucas fibras, oferecendo um sabor mais adocicado e suave"
                />
                <Card
                    src="./manga-kent.png"
                    altImage="Manga Kent"
                    title="Kent"
                    description="Reconhecida pela doçura marcante e textura cremosa. 
                    Praticamente sem fibras, é muito apreciada em mercados que buscam mangas premium"
                    premium
                />
            </div>
        </SectionLayout>
    )
})

OurVarieties.displayName = 'OurVarieties'