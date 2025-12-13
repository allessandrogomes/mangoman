import { ReactNode } from "react"

interface ICard {
    title: string
    icon: ReactNode
    description: string
}

export function Card({ title, icon, description}: ICard) {
    return (
        <div>
            <div className="flex flex-col items-center justify-between 
                py-6 px-3 bg-primary bg-gradient-to-t from-primary to-green-700 
                text-center text-secondary w-[220px] h-[300px] rounded-lg shadow-xl
                cursor-pointer transition-transform duration-300 hover:scale-105
                "
            >
                <h3 className="text-lg font-bold">{title}</h3>
                <div className="w-[90px] h-[90px]">{icon}</div>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}