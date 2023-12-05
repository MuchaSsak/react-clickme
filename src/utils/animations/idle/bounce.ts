import { StylesOptions } from "temporary-test-package-2";

export default function bounce(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    "@keyframes bounce": {
      "0%, 6.6%, 17.49%, 33%": {
        transform: "translate3d(0, 0, 0)",
      },
      "13.2%, 14.19%": {
        transform: "translate3d(0, -0.5rem, 0) scaleY(1.05)",
      },
      "23.1%": {
        transform: "translate3d(0, -0.375rem, 0) scaleY(1.025)",
      },
      "26.4%": {
        transform: "translate3d(0, 0, 0) scaleY(0.95)",
      },
      "30%": {
        transform: "translate3d(0, -0.25rem, 0) scaleY(1.02)",
      },
    },
    clickme: {
      ...defaultStyles,

      "&:not(&:disabled)": {
        animationName: "$bounce",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
