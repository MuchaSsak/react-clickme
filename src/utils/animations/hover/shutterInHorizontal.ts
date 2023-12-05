import { StylesOptions } from "temporary-test-package-2";

export default function hoverShutterInHorizontal(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryBgColor, secondaryTextColor, primaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      backgroundImage: `linear-gradient(${primaryBgColor}, ${primaryBgColor}), linear-gradient(${secondaryBgColor}, ${secondaryBgColor})`,
      backgroundSize: "100% 100%, auto",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        color: secondaryTextColor,
        backgroundSize: "0 100%, auto",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
