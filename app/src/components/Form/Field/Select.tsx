import React from "react";

export type SelectFieldProps = {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
  onChange: (name: string, value: string) => void;
};

export function SelectField({ name, label, options, required, onChange }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(name, e.target.value)}
        className="mt-1 block w-full border border-gray-300 bg-white rounded px-3 py-2"
      >
        {options.map(option => (
          <option key={option.label} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
