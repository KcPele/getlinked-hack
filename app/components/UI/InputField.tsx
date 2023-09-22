import React, { FC } from "react";

interface InputFieldProps {
  type: string;
  label?: string;
  customClassName?: string;
  error?: string;
  placeholder: string;
  value?: string | number;
  name?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: FC<InputFieldProps> = ({
  type,
  label,
  customClassName,
  error,
  placeholder,
  handleChange,
  value,
  name,
}) => {
  return (
    <div className="grid gap-3">
      {label && <label className=" text-p-white">{label}</label>}
      <div>
        <input
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          className={`${customClassName} w-full border-[1px] ${
            error ? "border-rose-500" : "border-p-white"
          }  bg-transparent  pl-6 rounded-md px-4 py-3 text-p-white`}
          placeholder={placeholder}
        />
        {error && <p className="text-rose-500">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
