interface ISelect {
  options: {
    label: string;
    value: string;
  }[];
  defaultOption: string;
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

export function Select({
  options,
  defaultOption,
  label,
  value = '',
  name,
  onChange,
}: ISelect) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="border border-primary rounded-lg p-2 text-sm outline-none"
        required
      >
        <option value="">{defaultOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
