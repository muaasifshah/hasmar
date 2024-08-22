import { useField } from "@rvf/remix";
import React from "react";

// Extend SelectProps to include all standard select attributes
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { value: string; label: string }[]; // Define options prop
}

export const Select = ({ name, label, options, ...props }: SelectProps) => {
  const { error, getInputProps } = useField(name);

  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}: {""}
      </label>
      <select
        {...getInputProps({ id: name })}
        {...props} // Spread all additional props here
        className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-start text-sm text-[red]/80">{error()}</p>
      )}
    </>
  );
};
