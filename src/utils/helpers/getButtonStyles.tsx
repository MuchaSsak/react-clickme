import { createUseStyles } from "react-jss";
import { StylesOptions } from "temporary-test-package-2";

import * as hoverAnimations from "../imports/hoverAnimations";
import * as idleAnimations from "../imports/idleAnimations";

export default function getButtonStyles(options: StylesOptions) {
   const { style, hoverType, idleType, primaryBgColor, primaryTextColor } =
      options;

   const defaultStyles: React.CSSProperties = {
      backgroundColor: primaryBgColor,
      color: primaryTextColor,
      paddingBlock: "0.5rem",
      paddingInline: "1.5rem",
      borderRadius: "0.5rem",
      fontFamily: "sans-serif",
      fontSize: "clamp(0.75rem, 5vw, 1rem)",
      outline: "none",
      border: "none",
      cursor: "pointer",
      transition: "all 0.25s ease",
      animation: "3s cubic-bezier(.69,-0.19,.39,1.2) infinite",
      ...style,
   };

   let buttonStyles: string[] = [];

   // create a className using JSS for hover animation
   buttonStyles = [
      ...buttonStyles,
      // @ts-expect-error Works perfectly fine
      createUseStyles(hoverAnimations[hoverType]?.(options, defaultStyles))()
         .clickme,
   ];

   // append a className using JSS for idle animation
   buttonStyles = [
      ...buttonStyles,
      // @ts-expect-error Works perfectly fine
      createUseStyles(idleAnimations[idleType]?.(options, defaultStyles))()
         .clickme,
   ];

   if (!hoverType && !idleType)
      return createUseStyles({
         clickme: {
            ...defaultStyles,
            "&:disabled": { cursor: "not-allowed", filter: "brightness(50%)" },
         },
      })().clickme;

   return buttonStyles.join(" ");
}
