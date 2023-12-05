import { StylesOptions } from "temporary-test-package-2";

export default function hoverInvert(
  // @ts-expect-error Always passing in the options for scalability
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  return {
    clickme: {
      ...defaultStyles,

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        filter: "invert(1)",
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
