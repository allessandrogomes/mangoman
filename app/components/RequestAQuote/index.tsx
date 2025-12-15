import { forwardRef } from "react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";
import { Input } from "./Input";
import { Select } from "./Select";

const countries = [
    { label: "Brasil", value: "BR" },
    { label: "Estados Unidos", value: "US" },
    { label: "Canadá", value: "CA" },
    { label: "México", value: "MX" },

    { label: "Argentina", value: "AR" },
    { label: "Chile", value: "CL" },
    { label: "Colômbia", value: "CO" },
    { label: "Peru", value: "PE" },
    { label: "Uruguai", value: "UY" },
    { label: "Paraguai", value: "PY" },

    { label: "Portugal", value: "PT" },
    { label: "Espanha", value: "ES" },
    { label: "França", value: "FR" },
    { label: "Alemanha", value: "DE" },
    { label: "Itália", value: "IT" },
    { label: "Reino Unido", value: "GB" },
    { label: "Holanda", value: "NL" },
    { label: "Bélgica", value: "BE" },
    { label: "Suíça", value: "CH" },

    { label: "China", value: "CN" },
    { label: "Japão", value: "JP" },
    { label: "Coreia do Sul", value: "KR" },
    { label: "Índia", value: "IN" },

    { label: "Austrália", value: "AU" },
    { label: "Nova Zelândia", value: "NZ" },

    { label: "África do Sul", value: "ZA" },
    { label: "Egito", value: "EG" },

    { label: "Emirados Árabes Unidos", value: "AE" },
    { label: "Arábia Saudita", value: "SA" },
];

const interests = [
    { label: "Compra de mangas", value: "purchase" },
    { label: "Parceria comercial", value: "partnership" },
    { label: "Distribuição internacional", value: "distribution" },
    { label: "Informações sobre exportação", value: "export_info" },
    { label: "Outros assuntos", value: "other" },
];

export const RequestAQuote = forwardRef<HTMLElement>((_, ref) => {
    return (
        <SectionLayout className="bg-gradient-to-b from-primary to-green-900 pb-20" ref={ref}>
            <HeaderSection
                title="Solicite uma cotação"
                subtitle="Fale com nossa equipe sobre exportações, parcerias e disponibilidade de produtos"
                titleColor="secondary"
                subtitleColor="secondary"
            />

            <div className="flex flex-wrap w-full">
                <form className="flex flex-1 flex-col bg-secondary rounded-lg p-10 w-full">
                    <div className="flex flex-col md:flex-row items-stretch gap-5 md:gap-10 w-full">
                        <div className="w-full lg:flex-1 flex flex-col gap-5">
                            <Input id="name" label="Nome" />
                            <Input id="enterprise" label="Empresa" />
                            <Select options={countries} label="País" />
                            <Input id="email" label="Email" type="email" />
                            <Input id="phone" label="Telefone" />
                        </div>
                        <div className="w-full lg:flex-1 flex flex-col gap-5">
                            <Select options={interests} label="Interesse" />
                            <div className="flex flex-col">
                                <label>Mensagem</label>
                                <textarea className="w-full min-h-[200px] md:min-h-[285px] border border-primary rounded-lg p-2 text-sm outline-none resize-none" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="cursor-pointer bg-primary text-secondary h-10 w-20 mt-5 rounded-lg hover:opacity-90 self-center">Enviar</button>
                </form>

                <div className="hidden lg:block flex-1 max-h-[500px]">
                    <img
                        src="/manga-form.png"
                        className="w-full h-full object-contain scale-60"
                    />
                </div>
            </div>
        </SectionLayout>
    )
})

RequestAQuote.displayName = 'RequestAQuote'