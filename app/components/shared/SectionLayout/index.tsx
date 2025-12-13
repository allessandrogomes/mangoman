import { ReactNode } from "react";

interface ISectionLayout {
    children: ReactNode
    className?: string
}

export function SectionLayout({ children, className }: ISectionLayout) {
    return (
        <section className={`pt-10 xl:pt-20 px-10 xl:px-20 flex flex-col gap-8 ${className && className}`}>
            {children}
        </section>
    )
}