"use client";
import React from "react";

interface Props {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  className?: string;
  background?: string;
  color?: string;
}
const Button: React.FC<Props> = ({
  children,
  text,
  onClick = () => {},
  className,
  background,
  color,
}) => {
  return (
    <button
      type="button"
      className={` px-4 py-2 h-[50px] rounded-md bg-secondary ${className} ${background}`}
      onClick={onClick}
    >
      {text ? (
        <span className={` font-semibold ${color} `}>{text}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
