import type { Opcoes } from "../types";

interface SelectProps {
  label: string;
  placeholder: string;
  helpText?: string;
  opcoes: Opcoes[];
}

export default function Select({
  label,
  placeholder,
  helpText,
  opcoes,
}: SelectProps) {
  return (
    <fieldset className="fieldset  w-full">
      <legend className="fieldset-legend">{label}</legend>
      <select defaultValue="Pick a browser" className="select w-full" required>
        <option disabled={false}>{placeholder}</option>
        {opcoes?.map((opcao) => (
          <option key={opcao.id}>{opcao.name}</option>
        ))}
      </select>
      <span className="label">{helpText}</span>
    </fieldset>
  );
}
