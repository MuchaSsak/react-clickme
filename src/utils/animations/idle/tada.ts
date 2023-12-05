import { StylesOptions } from "temporary-test-package-2";

export default function tada(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes tada": {
      "0%, 50%": {
        transform: "scale3d(1, 1, 1)",
      },
      "5%, 10%": {
        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
      },
      "15%, 25%, 35%, 45%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
      },
      "20%, 30%, 40%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
      },
    },
    clickme: {
      ...defaultStyles,

      "&:not(&:disabled)": {
        animationName: "$tada",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
