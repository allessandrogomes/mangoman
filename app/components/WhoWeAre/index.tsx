/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react';
import { Newspaper } from 'lucide-react';
import { HeaderSection } from '../shared/HeaderSection';
import { SectionLayout } from '../shared/SectionLayout';

interface IWhoWeAre {
  about: {
    title: string;
    subtitle: string;
    introduction: string;
    our_story: {
      title: string;
      paragraph: string;
    };
    our_mission: {
      title: string;
      paragraph: string;
    };
    our_commitment_to_quality: {
      title: string;
      paragraph: string;
    };
    stats: {
      value: string;
      label: string;
    }[];
    media_highlight: string;
  };
}

const pillarIcons = ['/mango-icon.png', '/coconut-icon.png', '/lemon-icon.png'];

export const WhoWeAre = forwardRef<HTMLElement, IWhoWeAre>(({ about }, ref) => {
  const pillars = [
    about.our_story,
    about.our_mission,
    about.our_commitment_to_quality,
  ];

  return (
    <SectionLayout id="who" ref={ref}>
      <HeaderSection
        title={about.title ?? 'Who We Are'}
        subtitle={
          about.subtitle ??
          'A company specialized in the export of Brazilian mangoes, committed to quality, traceability, and global service'
        }
      />

      <div className="w-auto flex flex-col items-center bg-gradient-to-br from-primary to-green-700 -mx-5 xl:-mx-20 py-10 xl:py-20 gap-10 xl:gap-14">
        {/* Introduction Card — CEO photo + text */}
        <div className="w-full max-w-[1000px] px-5 xl:px-0">
          <div className="flex flex-col sm:flex-row gap-0 bg-secondary rounded-xl shadow-lg overflow-hidden border-l-4 border-tertiary">
            <div className="w-full sm:w-[320px] min-h-[280px] sm:min-h-[320px] flex-shrink-0 bg-[url(/ceo.jpg)] bg-cover bg-center" />
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center gap-4">
              <h3 className="text-2xl xl:text-3xl font-bold text-primary uppercase tracking-wide">
                MangoMan
              </h3>
              <div className="relative">
                <span className="absolute -top-3 -left-2 text-5xl text-tertiary/30 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-sm xl:text-base text-black/80 leading-relaxed pl-4">
                  {about.introduction ??
                    'MangoMan is a reference in the export of high-quality mangoes, offering an experience that goes beyond the fruit.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar — 4 impact metrics */}
        {about.stats && about.stats.length > 0 && (
          <div className="w-full max-w-[1000px] px-5 xl:px-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
              {about.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center py-6 px-4 text-center gap-1 ${index < about.stats.length - 1
                    ? 'lg:border-r lg:border-white/20'
                    : ''
                    } ${index % 2 === 0 && index < 2 ? 'border-r border-white/20 lg:border-r' : ''} ${index < 2 ? 'border-b border-white/20 lg:border-b-0' : ''
                    }`}
                >
                  <span className="text-3xl xl:text-4xl font-bold text-secondary">
                    {stat.value}
                  </span>
                  <span className="text-xs xl:text-sm text-white/90 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Three Pillars — Grid cards */}
        <div className="w-full max-w-[1000px] px-5 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-green-600" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Icon */}
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src={pillarIcons[index]}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-base xl:text-lg uppercase font-bold text-primary leading-tight">
                    {pillar.title}
                  </h4>

                  {/* Text */}
                  <p className="text-xs xl:text-sm text-black/80 leading-relaxed flex-1">
                    {pillar.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Highlight — Interview card */}
        <div className="w-full max-w-[1000px] px-5 xl:px-0">
          <div className="bg-secondary rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-5 pb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {about.media_highlight ?? 'Featured in media'}
              </span>
            </div>
            <div className="px-6 pb-6 flex">
              <a
                target="_blank"
                href="https://www.freshplaza.com/north-america/article/9794347/brazilian-mango-needs-to-strengthen-planning-to-ensure-stability-in-future-seasons/"
                className="block rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src="/interview.png"
                  alt="MangoMan interview image post"
                  className="w-full max-h-[300px] object-contain object-top rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
});

WhoWeAre.displayName = 'WhoWeAre';
