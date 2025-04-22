import React from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

interface buttonType {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
  type?: "primary" | "outline";
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  size?: "lg" | "sm";
}
const Button: React.FC<buttonType> = ({
  children,
  onClick,
  to,
  type = "primary",
  buttonType = "submit",
  size = "lg",
  disabled,
  loading,
  className,
  target,
}) => {
  const sizes = {
    lg: "h-[40px] lg:h-[52px]",
    sm: "h-[40px]",
  };
  const base = `${sizes[size]} mx-auto outline-none flex items-center justify-center gap-2  py-[10px] px-6 lg:py-4 lg:px-5 rounded-[12px] transation-all ease-in-out duration-300 cursor-pointer font-[500] text-sm `;
  const styles = {
    primary: `${base} bg-primary/75 text-white disabled:bg-grey disabled:text-black/75  `,
    outline: `${base} border border-[#E6E6E6] text-primary/75 hover:border-primary/10 hover:bg-primary/10 disabled:border-[#E6E6E6] disabled:bg-white disabled:text-black/75 disabled:cursor-not-allowed `,
  };
  if (to)
    return (
      <Link to={to} target={target} className={`${styles[type]} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      type={buttonType}
      className={`${styles[type]} ${className}  `}
    >
      {children}
      {loading && <Spinner />}
    </button>
  );
};

export default Button;
