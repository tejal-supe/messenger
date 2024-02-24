"use client";
import clsx from "clsx";
import React, { FC } from "react";

interface ButtonProp {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
const Button: FC<ButtonProp> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
    flex justify-center rounded-xl text-sm font-semibold focus-visible:outline focus-visible:outline-2 px-4 py-1  focus-visible:outline-offset-2`,
        disabled && "opacity-45 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-800" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
