/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

interface ICertifications {
  certifications: {
    title: string;
    subtitle: string;
    logos: {
      src: string;
      alt: string;
    }[];
  };
}

export const Certifications = forwardRef<HTMLElement, ICertifications>(
  ({ certifications }, ref) => {
    return (
      <SectionLayout id="certifications" className="mb-[200px]" ref={ref}>
        <HeaderSection
          title={certifications.title ?? 'Certifications'}
          subtitle={
            certifications.subtitle ??
            'We comply with the main international standards for fruit exports'
          }
          titleColor="quaternary"
          alignCenter
        />
        <div className="flex justify-center flex-wrap items-center mt-5">
          {certifications.logos.map((logo, index) => (
            <div key={index} className="w-[300px] h-[200px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    );
  },
);

Certifications.displayName = 'Certifications';
