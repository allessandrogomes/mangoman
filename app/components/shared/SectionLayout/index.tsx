import { ReactNode, forwardRef } from 'react';
import { Section } from '../../Header';

interface ISectionLayout {
  children: ReactNode;
  className?: string;
  id: Section;
}

export const SectionLayout = forwardRef<HTMLElement, ISectionLayout>(
  ({ children, className, id }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`pt-10 xl:pt-20 px-5 xl:px-20 flex flex-col gap-8 ${className ?? ''}`}
      >
        {children}
      </section>
    );
  },
);

SectionLayout.displayName = 'SectionLayout';
