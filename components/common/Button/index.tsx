import { Size, Variant, VariantButton } from "@/components/interface/globalInterface";
import React from "react";

interface ButtonProps {
  variant?: Variant;
  backgroundColor?: string;
  size?: Size;
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = VariantButton.Primary,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const variantStyle =
    variant === VariantButton.Primary
      ? `bg-primary-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 border-primary-600`
      : variant === VariantButton.Secondary
        ? `px-12 py-3 text-sm font-medium text-primary-600 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring active:bg-primary-500`
        : "";

  return (
    <button
      type="button"
      className={["inline-block rounded border", variantStyle].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
