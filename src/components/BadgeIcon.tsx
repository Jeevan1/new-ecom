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

const BadgeIcon: React.FC<Props> = ({
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
      className={` px-4 relative  ${className} bg-${background} `}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
      <span className="absolute -top-1 right-[2px] text-[10px] text-white bg-secondary rounded-full px-1">
        4
      </span>
    </button>
  );
};

export default BadgeIcon;
