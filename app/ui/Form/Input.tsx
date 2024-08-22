import { useField } from "@rvf/remix";
import React from "react";

// Extend InputProps to include all standard input attributes
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...props }: InputProps) => {
  const { error, getInputProps } = useField(name);

  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}: {""}
      </label>
      <input
        {...getInputProps({ id: name })}
        {...props} // Spread all additional props here
        className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
      />
      {error && (
        <p className="mt-1 text-start text-sm text-[red]/80">{error()}</p>
      )}
    </>
  );
};
