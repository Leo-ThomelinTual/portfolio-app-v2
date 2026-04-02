"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Cursor = () => {
  useGSAP(() => {
    gsap.set(".cursor", {
      xPercent: -50,
      yPercent: -50,
      scale: 0.1,
      backgroundColor: `var(--color-tertiary)`,
    });

    const xTo = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    const targets = gsap.utils.toArray([".target", ".card"]) as HTMLElement[];

    const scaleAnim = gsap.timeline({ paused: true });

    scaleAnim.to(
      ".cursor",
      {
        scale: 1,
        duration: 0.5,
        backgroundColor: `var(--color-tertiary)`,
      },
      0,
    );

    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        scaleAnim.play();
      });

      target.addEventListener("mouseleave", () => {
        scaleAnim.reverse();
      });
    });
  });

  return (
    <div className="cursor pointer-events-none fixed top-0 left-0 -z-1 h-15 w-15 rounded-full blur-2xl" />
  );
};

export default Cursor;
