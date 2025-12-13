interface IHeaderSection {
    title: string
    titleColor?: "primary" | "secondary" | "tertiary" | "quaternary"
    subtitleColor?: "primary" | "secondary" | "tertiary" | "quaternary"
    subtitle: string
    alignCenter?: boolean
}

const colors = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  quaternary: "text-black"
}

export function HeaderSection({ title, titleColor = "primary", subtitle, subtitleColor = "quaternary", alignCenter = false}: IHeaderSection) {
    return (
        <div className={`flex flex-col gap-2 max-w-4xl ${alignCenter && "self-center text-center"}`}>
            <h2 className={`text-2xl xl:text-5xl font-bold uppercase ${colors[titleColor]}`}>{title}</h2>
            <h3 className={`text-sm xl:text-base opacity-90 ${colors[subtitleColor]}`}>{subtitle}</h3>
        </div>
    )
}