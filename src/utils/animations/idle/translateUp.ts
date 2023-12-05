import { StylesOptions } from "temporary-test-package-2";

export default function translateUp(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes translateUp": {
      "0%, 20%, 100%": {
        transform: "translateY(0%)",
      },
      "10%": {
        transform: "translateY(-10%)",
      },
    },
    clickme: {
      ...defaultStyles,

      "&:not(&:disabled)": {
        animationName: "$translateUp",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
