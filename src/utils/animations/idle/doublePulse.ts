import { StylesOptions } from "temporary-test-package-2";

export default function doublePulse(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes doublePulse": {
      "0%, 35%, 100%": {
        transform: "scale(100%)",
      },
      "10%": {
        transform: "scale(110%)",
      },
      "17.5%": {
        transform: "scale(102.5%)",
      },
      "25%": {
        transform: "scale(110%)",
      },
    },
    clickme: {
      ...defaultStyles,

      "&:not(&:disabled)": {
        animationName: "$doublePulse",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
