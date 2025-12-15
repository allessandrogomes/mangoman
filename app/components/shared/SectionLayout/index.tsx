import { ReactNode, forwardRef } from "react";

interface ISectionLayout {
  children: ReactNode;
  className?: string;
}

export const SectionLayout = forwardRef<HTMLElement, ISectionLayout>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={`pt-10 xl:pt-20 px-10 xl:px-20 flex flex-col gap-8 ${className ?? ""}`}
      >
        {children}
      </section>
    );
  }
);

SectionLayout.displayName = "SectionLayout";