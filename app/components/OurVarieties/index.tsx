import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';
import { IProduct } from '@/app/hooks/use-get-products';
import { Loader2 } from 'lucide-react';

interface OurVarietiesProps {
  products: IProduct[] | undefined | null;
  raw: {
    title: string;
    subtitle: string;
    products: {
      image: string;
      name: string;
      description: string;
    }[];
  } | undefined | null;
  isLoading: boolean;
}

export const OurVarieties = forwardRef<HTMLElement, OurVarietiesProps>(
  ({ raw, products, isLoading }, ref) => {

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
                relative
                min-h-[1060px]
                bg-gradient-to-br 
                from-tertiary 
                to-red-500
                w-auto flex flex-col md:grid md:grid-cols-[300px_300px] lg:grid-cols-[300px_300px_300px] justify-center gap-10 xl:gap-20 p-10 xl:p-20 -mx-5 xl:-mx-20 py-10 xl:py-20"
        >
          {(isLoading || !products || products.length === 0
            ? raw?.products ?? []
            : products.map(({ imagem, nome, descricao }) => ({
              image: imagem.url,
              name: nome,
              description: descricao,
            }))
          ).map(({ image, name, description }, index) => (
            <Card
              key={index}
              src={image}
              altImage={name}
              title={name}
              description={description}
            />
          ))}
        </div>
      </SectionLayout>
    );
  },
);

OurVarieties.displayName = 'OurVarieties';
