/* eslint-disable @next/next/no-img-element */

interface ICard {
    src: string
    altImage: string
    title: string
    description: string
    premium?: boolean
}

export function Card({ src, altImage, title, description, premium = false }: ICard) {
    return (
        <div className="relative group">
            <div
                className="relative sm:w-[350px] h-full sm:h-[450px] flex flex-col gap-5 xl:gap-0 p-10 items-center justify-between 
            text-center text-tertiary cursor-pointer bg-secondary rounded-lg shadow-xl
            transition-transform duration-300 hover:scale-105 group overflow-hidden"
            >
                {premium && (
                    <span className="absolute top-4 left-[-25px] rotate-[-35deg] 
                    bg-primary text-white font-bold px-10 py-1 shadow-md"> Premium </span>
                )}
                <div className="max-w-[175px] rounded-full p-2 border border-b border-tertiary ribbon transition-transform duration-2000 group-hover:scale-115">
                    <img src={src} alt={altImage} className="transition-transform duration-2000 group-hover:rotate-360" />
                </div>
                <h3 className="text-3xl font-bold border-b border-tertiary p-2 bg-gradient-to-br from-tertiary to-red-500 bg-clip-text text-transparent">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}