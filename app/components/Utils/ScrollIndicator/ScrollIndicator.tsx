"use client";
import { useEffect, useState } from "react";
import TopButton from "./TopButton";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-2 z-50">
      <div className="fixed right-2 h-36 w-3 rounded-full border-2 border-(--color-border) bg-(--color-background)">
        <div
          className="w-full bg-(--color-secondary) shadow-[0px_0px_10px_5px_var(--color-secondary)] transition-all duration-75 ease-out"
          style={{ height: `${scroll}%` }}
        />
      </div>
      <div className="relative top-40 right-0">
        <TopButton />
      </div>
    </div>
  );
};

export default ScrollIndicator;
