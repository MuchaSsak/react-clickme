import { StylesOptions } from "temporary-test-package-2";

export default function hoverChangeColor(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryTextColor, secondaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        color: secondaryTextColor,
        backgroundColor: secondaryBgColor,
        outline: "none",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
