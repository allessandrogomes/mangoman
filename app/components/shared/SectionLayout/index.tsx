import { ReactNode } from "react";


export function SectionLayout({ children }: { children: ReactNode }) {
    return (
        <section className="pt-10 xl:pt-20 px-10 xl:px-20 flex flex-col gap-8">
            {children}
        </section>
    )
}