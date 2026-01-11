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
  {
    id: '19',
    img: '/gallery/19.jpg',
    url: 'https://example.com/one',
    height: 350,
  },
  {
    id: '20',
    img: '/gallery/20.jpg',
    url: 'https://example.com/two',
    height: 450,
  },
  {
    id: '21',
    img: '/gallery/21.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '22',
    img: '/gallery/22.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '23',
    img: '/gallery/23.jpg',
    url: 'https://example.com/three',
    height: 250,
  },
  {
    id: '24',
    img: '/gallery/24.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
  {
    id: '25',
    img: '/gallery/25.jpg',
    url: 'https://example.com/three',
    height: 450,
  },
  {
    id: '26',
    img: '/gallery/26.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '27',
    img: '/gallery/27.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '28',
    img: '/gallery/28.jpg',
    url: 'https://example.com/one',
    height: 300,
  },
  {
    id: '29',
    img: '/gallery/29.jpg',
    url: 'https://example.com/two',
    height: 500,
  },
  {
    id: '30',
    img: '/gallery/30.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '31',
    img: '/gallery/31.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
  {
    id: '32',
    img: '/gallery/32.jpg',
    url: 'https://example.com/three',
    height: 250,
  },
  {
    id: '33',
    img: '/gallery/33.jpg',
    url: 'https://example.com/three',
    height: 450,
  },
  {
    id: '34',
    img: '/gallery/34.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '35',
    img: '/gallery/35.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '36',
    img: '/gallery/36.jpg',
    url: 'https://example.com/one',
    height: 350,
  },
  {
    id: '37',
    img: '/gallery/37.jpg',
    url: 'https://example.com/two',
    height: 450,
  },
  {
    id: '38',
    img: '/gallery/38.jpg',
    url: 'https://example.com/three',
    height: 300,
  },
  {
    id: '39',
    img: '/gallery/39.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '40',
    img: '/gallery/40.jpg',
    url: 'https://example.com/three',
    height: 250,
  },
  {
    id: '41',
    img: '/gallery/41.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
  {
    id: '42',
    img: '/gallery/42.jpg',
    url: 'https://example.com/three',
    height: 450,
  },
  {
    id: '43',
    img: '/gallery/43.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '44',
    img: '/gallery/44.jpg',
    url: 'https://example.com/three',
    height: 500,
  },
  {
    id: '45',
    img: '/gallery/45.jpg',
    url: 'https://example.com/one',
    height: 300,
  },
  {
    id: '46',
    img: '/gallery/46.jpg',
    url: 'https://example.com/two',
    height: 500,
  },
  {
    id: '47',
    img: '/gallery/47.jpg',
    url: 'https://example.com/three',
    height: 350,
  },
  {
    id: '48',
    img: '/gallery/48.jpg',
    url: 'https://example.com/three',
    height: 400,
  },
];

export const Gallery = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionLayout className="relative" ref={ref}>
      <HeaderSection
        title="Photo gallery"
        subtitle="Get to know our production, facilities, and quality up close"
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
