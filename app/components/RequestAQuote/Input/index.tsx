
interface IInput {
    id: string
    label: string
    type?: string
}

export function Input({ id, label, type = "text" }: IInput) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} className="border border-primary rounded-lg p-2 text-sm outline-none" />
        </div>
    )
}