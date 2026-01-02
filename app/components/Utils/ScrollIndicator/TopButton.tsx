"use client";
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
      className={`ease flex h-10 w-max items-center gap-5 rounded-md bg-(--primary) px-3 text-white shadow-white outline-2 outline-(--outline) transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      TOP ↑
    </button>
  );
};

export default TopButton;
