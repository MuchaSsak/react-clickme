import { StylesOptions } from "temporary-test-package-2";

export default function hoverSweepToBottom(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryTextColor, secondaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      transform: "translateZ(0)",
      position: "relative",

      "&:before": {
        content: '""',
        position: "absolute",
        zIndex: "-1",
        inset: "0",
        backgroundColor: secondaryBgColor,
        transform: "scaleY(0)",
        transformOrigin: "50% 0%",
        transition: defaultStyles.transition,
        borderRadius: defaultStyles.borderRadius,
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
