import { StylesOptions } from "temporary-test-package-2";

export default function shadowPulse(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes shadowPulse": {
      to: {
        boxShadow: "0 0 0 1.5rem rgba(255, 255, 255, 0)",
      },
    },
    clickme: {
      ...defaultStyles,
      boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.1)",

      "&:not(&:disabled)": {
        animationName: "$shadowPulse",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
