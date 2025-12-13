
interface ISelect {
    options: {
        label: string
        value: string
    }[]
    label: string
}

export function Select({ options, label }: ISelect) {
    return (
        <div className="flex flex-col w-full">
            <label>{label}</label>
        <select className="border border-primary rounded-lg p-2 text-sm outline-none">
            {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
        </div>
    )
}