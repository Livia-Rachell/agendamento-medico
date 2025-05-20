interface InputProps {
  label: string;
  placeholder: string;
  helpText?: string;
}

export default function Input({ label, placeholder, helpText }: InputProps) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input type="text" className="input w-full" placeholder={placeholder} />
      <p className="label">{helpText}</p>
    </fieldset>
  );
}
