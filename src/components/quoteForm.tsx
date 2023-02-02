import {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { createQuoteProps } from "../App";
import { channelType } from "./generatedQuote";
import "./quoteForm.css";

interface InputProps {
  label?: string;
  name?: string;
  value?: string;
}

interface LabelledInputProps extends InputProps {
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface LabelledSelectProps extends InputProps {
  options: { value: string; label: string }[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface QuoteFormProps {
  createQuoteFn: (data: createQuoteProps) => void;
}

const LabelledInput: FC<LabelledInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <label htmlFor={name} className="input__elem">
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

const LabelledSelect: FC<LabelledSelectProps> = ({
  label,
  name,
  options,
  onChange,
}) => {
  return (
    <label htmlFor={name} className="select__elem">
      {label}
      <select name={name} onChange={onChange}>
        {options.map((o, index) => (
          <option key={index} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export const QuoteForm: FC<QuoteFormProps> = ({ createQuoteFn }) => {
  const [formData, setFormData] = useState<createQuoteProps>({
    destinationCountry: "",
    quotePrice: 0,
    shippingChannel: "air",
    startingCountry: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createQuoteFn(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <LabelledInput
        value={formData.startingCountry}
        onChange={(e) =>
          setFormData({ ...formData, startingCountry: e.target.value })
        }
        label="Starting country"
        name="startingCountry"
      />
      <LabelledInput
        value={formData.destinationCountry}
        onChange={(e) =>
          setFormData({ ...formData, destinationCountry: e.target.value })
        }
        label="Destination country"
        name="destinationCountry"
      />
      <LabelledInput
        value={`${formData.quotePrice}`}
        onChange={(e) =>
          setFormData({ ...formData, quotePrice: parseInt(e.target.value) })
        }
        type="number"
        label="Quote price"
        name="quotePrice"
      />
      <LabelledSelect
        onChange={(e) =>
          setFormData({
            ...formData,
            shippingChannel: e.target.value as channelType,
          })
        }
        label="Shipping channel"
        name=""
        options={[
          { label: "Ocean", value: "ocean" },
          { label: "Air", value: "air" },
        ]}
      />
      <button className="btn" type="submit">
        Create quote
      </button>
    </form>
  );
};
