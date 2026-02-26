"use client";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  Flip,
  ScrollTrigger,
  SplitText,
  ScrollSmoother,
  ScrollToPlugin,
} from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText,
);

const GsapTest = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(container.current, {
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container },
  );

  return (
    <div>
      <div ref={container}>
        <div className="box w-max bg-green-500 p-20">
          <p className="text">test</p>
        </div>
      </div>
      <div className="box w-max bg-green-500 p-20">
        <p className="text">test</p>
      </div>
    </div>
  );
};

export default GsapTest;
