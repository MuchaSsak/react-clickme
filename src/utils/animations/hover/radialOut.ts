import { StylesOptions } from "temporary-test-package-2";

export default function hoverRadialOut(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryTextColor, secondaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,
      position: "relative",
      zIndex: "1",
      overflow: "hidden",

      "&:before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "50%",
        borderRadius: "50%",
        width: "100%",
        aspectRatio: "1/1",
        transform: "translate3d(-50%,-50%,0) scale3d(0,0,0)",
        backgroundColor: secondaryBgColor,
        opacity: "0",
        zIndex: "-1",
        transition: defaultStyles.transition,
      },

      "&:hover:not(&:disabled):before, &:focus-visible:not(&:disabled):before":
        {
          opacity: "1",
          transform: "translate3d(-50%,-50%,0) scale3d(1.2,1.2,1.2)",
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
