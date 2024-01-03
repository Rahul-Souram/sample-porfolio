/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SlideSide = ({
  children,
  className,
  durationTime,
  delaySec = 0,
  side,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const TitleAnimationPosition = "top-=80 bottom-=170";
    const delayTime = delaySec;
    const element = ref.current;

    gsap.fromTo(
      element,
      { autoAlpha: 0, x: side === "left" ? -100 : 100 },
      {
        duration: durationTime ?? 0.3,
        autoAlpha: 1,
        x: 0,
        delay: delayTime,
        scrollTrigger: {
          trigger: element,
          start: TitleAnimationPosition,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delaySec, durationTime, side]);

  return (
    <div ref={ref} className={className ?? className}>
      {children}
    </div>
  );
};
