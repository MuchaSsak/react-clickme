import { StylesOptions } from "temporary-test-package-2";

export default function hoverRectangleIn(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { primaryBgColor, secondaryBgColor, secondaryTextColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      backgroundColor: secondaryBgColor,
      transform: "scale(1)",
      position: "relative",
      overflow: "hidden",

      "&:before": {
        content: "''",
        position: "absolute",
        inset: "0",
        zIndex: "-1",
        transform: "scale(1)",
        backgroundColor: primaryBgColor,
        transition: defaultStyles.transition,
      },

      "&:hover:not(&:disabled):before, &:focus-visible:not(&:disabled):before":
        {
          transform: "scale(0)",
        },

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        color: secondaryTextColor,
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
