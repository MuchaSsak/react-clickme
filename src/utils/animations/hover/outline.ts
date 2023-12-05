import { StylesOptions } from "temporary-test-package-2";

export default function outline(
  options: StylesOptions,
  defaultStyles: React.CSSProperties
) {
  const { secondaryBgColor } = options;

  return {
    clickme: {
      ...defaultStyles,

      "&:hover:not(&:disabled), &:focus-visible:not(&:disabled)": {
        boxShadow: `0 0 0 3px ${secondaryBgColor}`,
      },

      "&:disabled": {
        cursor: "not-allowed",
        filter: "brightness(50%)",
      },
    },
  };
}
