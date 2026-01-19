import React from "react";
import Image from "next/image";
import Link from "next/link";
import Social from "./Social";
const Topbar = () => {
  return (
    <header className="fixed top-0 z-50 flex h-12.5 w-full items-center justify-between gap-3 border-b-2 border-(--color-border-muted) bg-(--transparency-background) px-3 backdrop-blur-md">
      <Link href="/" className="flex gap-3 text-xl">
        <Image src="/globe.svg" alt="" width={25} height={25} />
        Léo
      </Link>
      <Social />
    </header>
  );
};

export default Topbar;
