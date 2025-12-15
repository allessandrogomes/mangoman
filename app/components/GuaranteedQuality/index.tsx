import { Cpu, MapPinned, Package, TreeDeciduous, Truck } from "lucide-react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";
import { Card } from "./Card";
import { forwardRef } from "react";


export const GuaranteedQuality = forwardRef<HTMLElement>((_, ref) => {
    return (
        <SectionLayout className="mb-[200px]" ref={ref}>
            <HeaderSection
                title="Qualidade garantida"
                subtitle="Da colheita ao embarque, seguimos padrões rigorosos para assegurar frescor, segurança e conformidade global"
                titleColor="primary"
            />

            <div className="flex flex-wrap gap-10 justify-center xl:justify-between">
                <Card
                    title="Seleção e Colheita"
                    icon={<TreeDeciduous className="w-full h-full" />}
                    description="Frutas colhidas no ponto certo e selecionadas manualmente"
                />
                <Card
                    title="Embalagem e Armazenamento"
                    icon={<Package className="w-full h-full" />}
                    description="Proteção adequada para manter frescor e qualidade"
                />
                <Card
                    title="Logística Internacional"
                    icon={<Truck className="w-full h-full" />}
                    description="Transporte seguro e ágil para mercados globais"
                />
                <Card
                    title="Rastreabilidade"
                    icon={<MapPinned className="w-full h-full" />}
                    description="Acompanhamento completo de cada lote"
                />
                <Card
                    title="Tecnologia e Qualidade"
                    icon={<Cpu className="w-full h-full" />}
                    description="Processos modernos para garantir padrões elevados"
                />
            </div>
        </SectionLayout>
    )
})

GuaranteedQuality.displayName = 'GuaranteedQuality'