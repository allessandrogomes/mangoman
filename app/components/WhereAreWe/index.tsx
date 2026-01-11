import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

export const WhereAreWe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout className="mb-[200px]" ref={ref}>
      <HeaderSection
        title="Where are we"
        subtitle="Head office, facilitating access and customer service"
        titleColor="primary"
      />

      <div>
        <h3 className="text-lg mb-2">
          Empresarial Trade Center - R. Joaquim Nabuco, 9° Floor - Center,
          Petrolina - PE, 56304-040
        </h3>
        <iframe
          className="rounded-lg shadow-2xl h-[300px] md:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2764849255645!2d-40.5024498249766!3d-9.397115590679645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77371aa683cf161%3A0xe2ca620979038959!2sEmpresarial%20Trade%20Center%20Dom%20Campelo!5e0!3m2!1spt-BR!2sbr!4v1768095305557!5m2!1spt-BR!2sbr"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </SectionLayout>
  );
});

WhereAreWe.displayName = 'WhereAreWe';
