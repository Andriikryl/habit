import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import Button from "@mui/material/Button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  value?: string;
  id?: string;
}

export function ButtonComponent({
  children,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  value,
  ...rest
}: ButtonProps) {
  return (
    <Button
      className={clsx(className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      value={value}
      {...rest}
      variant="contained"
    >
      {children}
    </Button>
  );
}
