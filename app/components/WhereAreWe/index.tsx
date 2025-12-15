import { forwardRef } from "react";
import { HeaderSection } from "../shared/HeaderSection";
import { SectionLayout } from "../shared/SectionLayout";


export const WhereAreWe = forwardRef<HTMLElement>((_, ref) => {
    return (
        <SectionLayout className="mb-[200px]" ref={ref}>
            <HeaderSection 
                title="Onde estamos"
                subtitle="Escritório central, facilitando o acesso e o atendimento aos clientes"
                titleColor="primary"
            />

            <div>
                <h3 className="text-lg mb-2">Rua Joaquim Nabuco, 541 - Centro, Petrolina - PE, 56.302-140</h3>
                <iframe
                    className="rounded-lg shadow-2xl h-[300px] md:h-[600px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.8428998152762!2d-40.49963343974455!3d-9.396642407518637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7737069d13f8a27%3A0x6dbd16376620b17e!2sEmpresarial%20Trade%20Center%20-%20R.%20Joaquim%20Nabuco%2C%20541%20-%20Centro%2C%20Petrolina%20-%20PE%2C%2050010-480!5e0!3m2!1spt-BR!2sbr!4v1765658347845!5m2!1spt-BR!2sbr" 
                    width="100%"   
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
            </div>
        </SectionLayout>
    )
})

WhereAreWe.displayName = 'WhereAreWe'