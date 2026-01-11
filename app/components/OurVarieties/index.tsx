import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';

export const OurVarieties = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout ref={ref}>
      <HeaderSection
        title="Our varieties"
        titleColor="tertiary"
        subtitle="Selected mangoes, carefully grown and certified for export"
      />

      <div
        className="
                bg-gradient-to-br 
                from-tertiary 
                to-red-500
                w-auto flex flex-col md:grid md:grid-cols-[300px_300px] lg:grid-cols-[300px_300px_300px] justify-center gap-10 xl:gap-20 p-10 xl:p-20 -mx-5 xl:-mx-20 py-10 xl:py-20"
      >
        <Card
          src="./manga-keitt.png"
          altImage="Manga Keitt"
          title="Keitt"
          description="Keitt is a mango with firm flesh and a mild flavor, low fiber content, and excellent shelf life. Its resistance to handling and consistent quality make it one of the most sought-after varieties for export."
        />
        <Card
          src="./manga-kent.png"
          altImage="Manga Kent"
          title="Kent"
          description="Kent stands out for its soft, sweet flesh with a hint of acidity, offering a well-balanced flavor experience. Its high keeping quality and resistance to transportation make it ideal for international markets"
        />
        <Card
          src="./manga-palmer.png"
          altImage="Manga Palmer"
          title="Palmer"
          description="Palmer is a mango with firm, sweet flesh and low fiber content, excellent for fresh consumption and processing. Its long shelf life and resistance to transportation ensure its presence in global markets"
        />
        <Card
          src="./manga-tommy.png"
          altImage="Manga Tommy"
          title="Tommy Atkins"
          description="Tommy Atkins is a robust mango with thick skin and firm flesh. Its sweet, slightly acidic flavor, combined with its resistance to transportation, makes it one of the most widely exported varieties worldwide"
        />
        <Card
          src="./coconut.png"
          altImage="Fresh Coconut"
          title="Fresh Coconut"
          description="Fresh Coconut offers high-quality flesh with a sweet and refreshing flavor. Rich in nutrients and with strong potential for the beverage and derivative markets, it is an excellent option for export"
        />
        <Card
          src="./lemon.png"
          altImage="Lemon"
          title="Lemon"
          description="Lime is a citrus fruit with a distinctive, refreshing acidity, widely used in the food market. Its versatility and high quality make it a popular choice for a wide range of industrial and commercial applications"
        />
      </div>
    </SectionLayout>
  );
});

OurVarieties.displayName = 'OurVarieties';
