import React from "react";

interface Props {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  className?: string;
  background?: string;
}
const Button: React.FC<Props> = ({
  children,
  text,
  onClick = () => {},
  className,
  background,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${className} ${background} px-4 py-2 rounded-md bg-secondary`}
      onClick={onClick}
      {...props}
    >
      {text ? <span className="text-white">{text}</span> : children}
    </button>
  );
};

export default Button;
