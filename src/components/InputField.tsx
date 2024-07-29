"use client";
import React from "react";

interface Props {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (e: any) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
}
const InputField: React.FC<Props> = ({
  label,
  name,
  placeholder = "Search...",
  type,
  onChange = () => {},
  value,
  defaultValue,
  className,
}) => {
  return (
    <div className={`flex flex-col h-full w-full ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        className=" h-full px-3  border outline-none border-light rounded-sm"
      />
    </div>
  );
};

export default InputField;
