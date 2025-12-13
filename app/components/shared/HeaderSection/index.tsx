interface IHeaderSection {
    title: string
    titleColor?: "primary" | "secondary" | "tertiary"
    subtitle: string
}

const colors = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
}

export function HeaderSection({ title, titleColor = "primary", subtitle}: IHeaderSection) {
    return (
        <div className="flex flex-col gap-2 max-w-4xl">
            <h2 className={`text-2xl xl:text-5xl font-bold uppercase ${colors[titleColor]}`}>{title}</h2>
            <h3 className="text-sm xl:text-base text-black opacity-90">{subtitle}</h3>
        </div>
    )
}