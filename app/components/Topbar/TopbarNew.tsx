import React from "react";
import Link from "next/link";
import Social from "./Social";
const TopbarNew = () => {
  return (
    <header className="ease xs:left-2 fixed top-2 z-50 flex h-12.5 w-max items-center justify-between gap-10 rounded-full border-0 border-(--color-border-muted) bg-(--transparency-background) px-3 shadow-[inset_0px_-10px_10px] shadow-white/20 backdrop-blur-md transition-shadow duration-300 hover:border-(--color-border) hover:shadow-[inset_5px_5px_10px] md:right-2">
      <Link href="/" className="flex gap-3 text-xl">
        Léo Thomelin-Tual
      </Link>
      <Social />
    </header>
  );
};

export default TopbarNew;
