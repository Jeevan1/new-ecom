"use client";
import React from "react";
interface Props {
  onClick?: () => void;
  className?: string;
  background?: string;
  ariaLabel?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const IconButton: React.FC<Props> = ({
  onClick = () => {},
  className,
  background,
  ariaLabel,
  disabled = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-full w-fit px-4  ${className} bg-${background} `}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
