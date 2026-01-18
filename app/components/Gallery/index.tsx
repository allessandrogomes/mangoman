'use client';

import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import Masonry from './Mansory';

interface IGallery {
  gallery: {
    title: string;
    subtitle: string;
    images: {
      id: string;
      img: string;
      url: string;
      height: number;
    }[];
  };
}

export const Gallery = forwardRef<HTMLElement, IGallery>(({ gallery }, ref) => {
  return (
    <SectionLayout id="gallery" className="relative" ref={ref}>
      <HeaderSection
        title={gallery.title ?? 'Photo gallery'}
        subtitle={
          gallery.subtitle ??
          'Get to know our production, facilities, and quality up close'
        }
        titleColor="tertiary"
        subtitleColor="quaternary"
      />

      <div className="mt-5 relative">
        <Masonry
          items={gallery.images}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </SectionLayout>
  );
});

Gallery.displayName = 'Gallery';
