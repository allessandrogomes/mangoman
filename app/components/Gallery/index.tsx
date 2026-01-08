'use client';

import { forwardRef } from 'react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';
import Masonry from './Mansory';

const items = [
  {
    id: '1',
    img: '/gallery/1.jpg',
    url: 'https://example.com/one',
    height: 350,
  },
  {
    id: '2',
    img: '/gallery/2.jpg',
    url: 'https://example.com/two',
    height: 450,
  },
  {
    id: '3',
    img: '/gallery/3.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '4',
    img: '/gallery/4.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '5',
    img: '/gallery/5.jpg',
    url: 'https://example.com/three',
    height: 250,
  },
  {
    id: '6',
    img: '/gallery/6.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
  {
    id: '7',
    img: '/gallery/7.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '8',
    img: '/gallery/8.jpg',
    url: 'https://example.com/three',
    height: 450,
  },
  {
    id: '9',
    img: '/gallery/9.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '10',
    img: '/gallery/10.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '11',
    img: '/gallery/11.jpg',
    url: 'https://example.com/one',
    height: 300,
  },
  {
    id: '12',
    img: '/gallery/12.jpg',
    url: 'https://example.com/two',
    height: 500,
  },
  {
    id: '13',
    img: '/gallery/13.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '14',
    img: '/gallery/14.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
  {
    id: '15',
    img: '/gallery/15.jpg',
    url: 'https://example.com/three',
    height: 250,
  },
  {
    id: '16',
    img: '/gallery/16.jpg',
    url: 'https://example.com/three',
    height: 450,
  },
  {
    id: '17',
    img: '/gallery/17.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '18',
    img: '/gallery/18.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
];

export const Gallery = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout className="relative" ref={ref}>
      <HeaderSection
        title="Galeria"
        subtitle="Conheça nossa produção, estrutura e qualidade de perto"
        titleColor="tertiary"
        subtitleColor="quaternary"
      />

      <div className="mt-5 relative">
        <Masonry
          items={items}
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
