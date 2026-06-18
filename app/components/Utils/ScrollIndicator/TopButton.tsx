"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setShow(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`ease flex h-10 w-max items-center gap-1 rounded-md bg-(--color-primary) px-2 text-(--color-foreground) outline-2 outline-(--color-outline) transition-all duration-500 hover:bg-(--color-foreground) hover:text-(--color-primary) hover:shadow-[0px_0px_10px_5px_var(--color-shadow)] hover:outline-offset-3 md:px-3 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <p className="hidden md:flex">TOP</p> <Icon icon="mdi:arrow-up" />
    </button>
  );
};

export default TopButton;
