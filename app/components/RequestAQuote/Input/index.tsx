interface IInput {
  id: string;
  label: string;
  type?: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

export function Input({
  id,
  label,
  type = 'text',
  value = '',
  name,
  onChange,
}: IInput) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="border border-primary rounded-lg p-2 text-sm outline-none"
        required
      />
    </div>
  );
}
