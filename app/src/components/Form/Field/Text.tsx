import React from "react";

export type TextFieldProps = {
  name: string;
  label?: string;
  value: string;
  required?: boolean;
  onChange: (name: string, value: string) => void;
};

export function TextField({ 
  name, 
  label = "",
  value, 
  required = false, 
  onChange 
}: TextFieldProps) {
  return (
    <div>
      {!!label &&
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      }
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)}
        required={required}
        className="mt-1 block w-full border border-gray-300 bg-white rounded px-3 py-2"
      />
    </div>
  );
}
