export default function wobble(
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>
) {
  buttonRef.current?.animate(
    [
      { transform: "translate3d(0,0,0)", offset: 0 },
      {
        transform: "translate3d(-12.5%,0,0) rotate3d(0,0,1,-4deg)",
        offset: 0.15,
      },
      {
        transform: "translate3d(10%,0,0) rotate3d(0,0,1,2deg)",
        offset: 0.3,
      },
      {
        transform: "translate3d(-7.5%, 0, 0) rotate3d(0, 0, 1, -2deg)",
        offset: 0.45,
      },
      {
        transform: "translate3d(5%, 0, 0) rotate3d(0, 0, 1, 1deg)",
        offset: 0.6,
      },
      {
        transform: "translate3d(-2.5%, 0, 0) rotate3d(0, 0, 1, 0deg)",
        offset: 0.75,
      },
      { transform: "translate3d(0,0,0)", offset: 1 },
    ],
    { duration: 1000, iterations: 1 }
  );
}
