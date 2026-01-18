import { Cpu, MapPinned, Package, TreeDeciduous, Truck } from 'lucide-react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';
import { forwardRef } from 'react';

export const GuaranteedQuality = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout id="quality" className="mb-[200px]" ref={ref}>
      <HeaderSection
        title="Guaranteed quality"
        subtitle="From harvest to shipment, we follow rigorous standards to ensure freshness, safety, and global compliance"
        titleColor="primary"
      />

      <div className="flex flex-wrap gap-10 justify-center xl:justify-between">
        <Card
          title="Selection and Harvesting"
          icon={<TreeDeciduous className="w-full h-full" />}
          description="Fruits harvested at the right time and carefully selected by hand"
        />
        <Card
          title="Packaging and Storage"
          icon={<Package className="w-full h-full" />}
          description="Proper protection to preserve freshness and quality"
        />
        <Card
          title="International Logistics"
          icon={<Truck className="w-full h-full" />}
          description="Safe and efficient transportation to global markets"
        />
        <Card
          title="Traceability"
          icon={<MapPinned className="w-full h-full" />}
          description="Complete tracking of each batch"
        />
        <Card
          title="Technology and Quality"
          icon={<Cpu className="w-full h-full" />}
          description="Modern processes to ensure high standards"
        />
      </div>
    </SectionLayout>
  );
});

GuaranteedQuality.displayName = 'GuaranteedQuality';
