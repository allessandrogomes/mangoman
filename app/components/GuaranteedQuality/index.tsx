import {
  Cpu,
  LucideIcon,
  MapPinned,
  Package,
  TreeDeciduous,
  Truck,
} from 'lucide-react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import { Card } from './Card';
import { forwardRef } from 'react';

interface IGuaranteedQuality {
  processes: {
    title: string;
    subtitle: string;
    card: {
      icon: string;
      title: string;
      subtitle: string;
    }[];
  };
}

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  MapPinned,
  Package,
  TreeDeciduous,
  Truck,
};

export const GuaranteedQuality = forwardRef<HTMLElement, IGuaranteedQuality>(
  ({ processes }, ref) => {
    return (
      <SectionLayout id="quality" className="mb-[200px]" ref={ref}>
        <HeaderSection
          title={processes.title ?? 'Guaranteed quality'}
          subtitle={
            processes.subtitle ??
            'From harvest to shipment, we follow rigorous standards to ensure freshness, safety, and global compliance'
          }
          titleColor="primary"
        />

        <div className="flex flex-wrap gap-10 justify-center xl:justify-between">
          {processes.card.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Card
                key={index}
                title={item.title}
                icon={<Icon className="w-full h-full" />}
                description={item.subtitle}
              />
            );
          })}
        </div>
      </SectionLayout>
    );
  },
);

GuaranteedQuality.displayName = 'GuaranteedQuality';
