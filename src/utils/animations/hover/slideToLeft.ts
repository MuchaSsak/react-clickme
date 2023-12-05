import { StylesOptions } from "temporary-test-package-2";

export default function hoverSlideToLeft(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryTextColor, secondaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      position: "relative",
      overflow: "hidden",
      zIndex: "1",

      "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        top: "0",
        right: "0",
        width: "100%",
        height: "100%",
        transform: "scaleX(0)",
        transformOrigin: "0% 0%",
        background: secondaryBgColor,
        zIndex: "-1",
        transition: defaultStyles.transition,
        transitionProperty: "transform",
      },

      "&:hover:not(&:disabled):before, &:focus-visible:not(&:disabled):before":
        {
          transformOrigin: "100% 100%",
          transform: "scaleX(1)",
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
