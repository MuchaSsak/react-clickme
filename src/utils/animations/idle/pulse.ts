import { StylesOptions } from "temporary-test-package-2";

export default function pulse(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes pulse": {
      "0%, 20%, 100%": {
        transform: "scale(100%)",
      },
      "10%": {
        transform: "scale(110%)",
      },
    },
    clickme: {
      ...defaultStyles,

      "&:not(&:disabled)": {
        animationName: "$pulse",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
