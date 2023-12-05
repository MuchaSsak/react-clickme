import * as clickAnimations from "../imports/clickAnimations";

export default function animateButtonOnClick(
   clickType: string,
   buttonRef: React.MutableRefObject<HTMLButtonElement | null>
) {
   // @ts-expect-error Works perfectly fine
   return clickAnimations[clickType]?.(buttonRef);
}
