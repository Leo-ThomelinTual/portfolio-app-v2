"use client";
import { useEffect, useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);

      setShow(winScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={"fixed top-0 z-50 md:top-25 transition-opacity-right ease duration-500" + " " + (show ? "right-2 opacity-100" : "right-0 opacity-0")}>
      <div className="md:flex gap-5 items-end hidden">
        <ButtonPrimary
          icon="mdi:arrow-up"
          iconPosition="right"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          <p>Remonter</p>
        </ButtonPrimary>

        <div className="relative h-36 w-3 rounded-full border-2 border-(--color-border) bg-(--color-background)">
        <div
          className="w-full bg-(--color-secondary) shadow-[0px_0px_10px_5px_var(--color-secondary)] transition-all duration-75 ease-out"
          style={{ height: `${scroll}%` }}
        />
        </div>
      </div>
      <div className="fixed left-0 h-1 w-full rounded-full md:hidden">
        <ButtonPrimary
          className={`fixed rounded-full! p-4 text-2xl bottom-25 right-5 ${show ? "opacity-100" : "opacity-0"}`}
          icon="mdi:arrow-up"
          iconPosition="left"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        <div
          className="h-full bg-(--color-secondary) shadow-[0px_0px_10px_5px_var(--color-secondary)] transition-all duration-75 ease-out"
          style={{ width: `${scroll}%` }}
        />
        </div>

    </div>
  );
};

export default ScrollIndicator;
