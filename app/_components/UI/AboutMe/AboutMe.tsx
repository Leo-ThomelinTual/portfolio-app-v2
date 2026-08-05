"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";

type AboutMeProps = {
  children: React.ReactNode;
  className?: string;
};

const AboutMe = ({ children, className }: AboutMeProps) => {
  // const aboutmeContainer = useRef(null)

  // useGSAP(() => {
  //   gsap.set(".cursorbox", {
  //     xPercent: -50,
  //     yPercent: -50,
  //     scale: 0.2,
  //     backgroundColor: `var(--color-tertiary)`,
  //   });

  //   const xTo = gsap.quickTo(".cursorbox", "x", { duration: 0.6, ease: "power3" }),
  //     yTo = gsap.quickTo(".cursorbox", "y", { duration: 0.6, ease: "power3" });

  //   window.addEventListener("mousemove", (e) => {
  //     xTo(e.clientX);
  //     yTo(e.clientY);
  //   });
  // }, { scope: aboutmeContainer });

  return (
    <article className={"overflow-hidden rounded-md border-2 border-(--color-border) bg-(--color-background) w-full p-3 md:p-5" + " " + className}>
      {children}
    </article>
  );
};

export default AboutMe;
