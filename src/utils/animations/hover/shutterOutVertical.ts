import { StylesOptions } from "temporary-test-package-2";

export default function hoverShutterOutVertical(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryBgColor, secondaryTextColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      position: "relative",
      transform: "perspective(1px) translateZ(0)",
      overflow: "hidden",

      "&:before": {
        content: "''",
        position: "absolute",
        inset: "0",
        transform: "scaleY(0)",
        transformOrigin: "50%",
        zIndex: "-1",
        backgroundColor: secondaryBgColor,
        transition: defaultStyles.transition,
      },

      "&:hover:not(&:disabled):before, &:focus-visible:not(&:disabled):before":
        {
          transform: "scaleY(1)",
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
