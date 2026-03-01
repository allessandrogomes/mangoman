import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';
import { IProduct } from '@/app/hooks/use-get-products';

interface OurVarietiesProps {
  products: IProduct[] | undefined | null;
  raw: {
    title: string,
    subtitle: string,
  } | undefined | null;
}

export const OurVarieties = forwardRef<HTMLElement, OurVarietiesProps>(
  ({ raw, products }, ref) => {

    if (!products || !products.length) return null;

    return (
      <SectionLayout id="varieties" ref={ref}>
        <HeaderSection
          title={raw?.title ?? 'Our varieties'}
          titleColor="tertiary"
          subtitle={
            raw?.subtitle ??
            'Selected mangoes, carefully grown and certified for export'
          }
        />

        <div
          className="
                bg-gradient-to-br 
                from-tertiary 
                to-red-500
                w-auto flex flex-col md:grid md:grid-cols-[300px_300px] lg:grid-cols-[300px_300px_300px] justify-center gap-10 xl:gap-20 p-10 xl:p-20 -mx-5 xl:-mx-20 py-10 xl:py-20"
        >
          {products.map(({ imagem, nome, descricao }, index) => (
            <Card
              key={index}
              src={imagem.url}
              altImage={nome}
              title={nome}
              description={descricao}
            />
          ))}
        </div>
      </SectionLayout>
    );
  },
);

OurVarieties.displayName = 'OurVarieties';
