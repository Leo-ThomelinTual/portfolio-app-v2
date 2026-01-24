import React from "react";
import Link from "next/link";
import Social from "./Social";
const TopbarNew = () => {
  return (
    <header className="transition-border ease xs:left-2 fixed top-2 z-50 flex h-12.5 w-max items-center justify-between gap-10 rounded-full border-2 border-(--color-border-muted) bg-(--transparency-background) px-3 shadow-[inset_0px_-10px_10px] shadow-white/20 backdrop-blur-md duration-300 hover:border-(--color-border) md:right-2">
      <Link href="/" className="flex gap-3 text-xl">
        Léo Thomelin-Tual
      </Link>
      <Social />
    </header>
  );
};

export default TopbarNew;
