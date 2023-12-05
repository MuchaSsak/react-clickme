import { StylesOptions } from "temporary-test-package-2";

export default function hoverRectangleOut(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryBgColor, secondaryTextColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      backgroundImage: `linear-gradient(${secondaryBgColor}, ${secondaryBgColor})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "0% 0%",

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        backgroundSize: "100% 100%",
        color: secondaryTextColor,
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
