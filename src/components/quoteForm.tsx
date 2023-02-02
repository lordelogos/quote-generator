import { FC } from "react";

interface LabelledInputProps {
  label?: string;
  name?: string;
}

interface LabelledSelectProps extends LabelledInputProps {
  options: { value: string; label: string }[];
}

const LabelledInput: FC<LabelledInputProps> = ({ label, name }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input type="text" name={name} />
    </label>
  );
};

const LabelledSelect: FC<LabelledSelectProps> = ({ label, name, options }) => {
  return (
    <label htmlFor={name}>
      {label}
      <select name={name}>
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
};
export const QuoteForm = () => {
  return (
    <form>
      <LabelledInput label="Starting country" name="startingCountry" />
      <LabelledInput label="Destination country" name="" />
      <LabelledInput label="Quote price" name="" />
      <LabelledSelect label="Shipping channel" name="" options={[]} />
      <button>Create quote</button>
    </form>
  );
};
