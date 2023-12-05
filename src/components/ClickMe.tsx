import { useRef } from "react";

import getButtonStyles from "../utils/helpers/getButtonStyles";
import getOnClickAnimation from "../utils/helpers/getOnClickAnimation";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  onClick?: (...args: unknown[]) => unknown;
  hoverType?: string;
  idleType?: string;
  clickType?: string;
  primaryBgColor?: string;
  primaryTextColor?: string;
  secondaryBgColor?: string;
  secondaryTextColor?: string;
}

export default function ClickMe({
  children,
  disabled = false,
  onClick,
  hoverType = "",
  idleType = "",
  clickType = "",
  primaryBgColor = "#ffffff",
  primaryTextColor = "#000000",
  secondaryBgColor = "#f51abb",
  secondaryTextColor = "#ffffff",
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { style, className } = props;
  const stylesOptions = {
    style,
    hoverType,
    idleType,
    clickType,
    primaryBgColor,
    primaryTextColor,
    secondaryBgColor,
    secondaryTextColor,
  };
  const JssClassName = getButtonStyles(stylesOptions);

  function handleClick() {
    getOnClickAnimation(clickType, buttonRef);

    if (onClick) onClick();
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${JssClassName} ${className}`}
      onClick={handleClick}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}
