/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

const certifications = [
  {
    src: 'gap-certificate.png',
    alt: 'Certificado Global GAP',
  },
  {
    src: 'grasp-certificate.png',
    alt: 'Certificado GRASP',
  },
  {
    src: 'coc-certificate.png',
    alt: 'Certificado COC',
  },
  {
    src: 'smeta-certificate.png',
    alt: 'Certificado SMETA',
  },
];

export const Certifications = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout className="mb-[200px]" ref={ref}>
      <HeaderSection
        title="Certifications"
        subtitle="We comply with the main international standards for fruit exports"
        titleColor="quaternary"
        alignCenter
      />
      <div className="flex justify-center flex-wrap items-center mt-5">
        {certifications.map((props, index) => (
          <div key={index} className="w-[300px] h-[200px]">
            <img
              {...props}
              className="w-full h-full object-contain"
              alt={props.alt}
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
});

Certifications.displayName = 'Certifications';
