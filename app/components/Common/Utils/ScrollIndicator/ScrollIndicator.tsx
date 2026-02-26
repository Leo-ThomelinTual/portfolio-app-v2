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
    <div className="fixed top-12 right-2 z-50 md:top-25">
      <div className="fixed right-2 hidden h-36 w-3 rounded-full border-2 border-(--color-border) bg-(--color-background) md:flex">
        <div
          className="w-full bg-(--color-secondary) shadow-[0px_0px_10px_5px_var(--color-secondary)] transition-all duration-75 ease-out"
          style={{ height: `${scroll}%` }}
        />
      </div>
      <div className="fixed left-0 h-1 w-full rounded-full md:hidden">
        <div
          className="h-full bg-(--color-secondary) shadow-[0px_0px_10px_5px_var(--color-secondary)] transition-all duration-75 ease-out"
          style={{ width: `${scroll}%` }}
        />
      </div>
      <div className="fixed right-3 bottom-25 md:relative md:top-40 md:right-0 md:bottom-0">
        <TopButton />
      </div>
    </div>
  );
};

export default ScrollIndicator;
