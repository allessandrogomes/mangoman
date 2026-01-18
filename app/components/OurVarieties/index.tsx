import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';

interface IOurVarieties {
  products: {
    title: string;
    subtitle: string;
    products: {
      image: string;
      name: string;
      description: string;
    }[];
  };
}

export const OurVarieties = forwardRef<HTMLElement, IOurVarieties>(
  ({ products }, ref) => {
    return (
      <SectionLayout id="varieties" ref={ref}>
        <HeaderSection
          title={products.title ?? 'Our varieties'}
          titleColor="tertiary"
          subtitle={
            products.subtitle ??
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
          {products.products.map((product, index) => (
            <Card
              key={index}
              src={product.image}
              altImage={product.name}
              title={product.name}
              description={product.description}
            />
          ))}
        </div>
      </SectionLayout>
    );
  },
);

OurVarieties.displayName = 'OurVarieties';
