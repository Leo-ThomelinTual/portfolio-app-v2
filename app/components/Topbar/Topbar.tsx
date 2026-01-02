import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="fixed top-0 z-50 flex h-12.5 w-full items-center justify-between border-b-2 border-gray-500 bg-(--background-transparent) px-3 backdrop-blur-md">
      <Link href="/" className="flex gap-3 text-xl">
        <Image src="/globe.svg" alt="" width={25} height={25} />
        Léo
      </Link>
      <div className="flex h-10 w-max gap-5 rounded-full border-2 border-gray-500 px-5 py-1.5">
        {/* TODO Fix image invisible in white theme */}
        <Link
          className="transition-scale ease duration-300 hover:scale-110"
          href="/"
        >
          <Image src="/github_dark.svg" alt="" width={25} height={25} />
        </Link>

        <Link
          className="transition-scale ease duration-300 hover:scale-110"
          href="/"
        >
          <Image src="/LinkedIn_icon.svg" alt="" width={25} height={25} />
        </Link>

        <Link
          className="transition-scale ease duration-300 hover:scale-110"
          href="/"
        >
          <Image src="/github_dark.svg" alt="" width={25} height={25} />
        </Link>
      </div>
    </header>
  );
};

export default Topbar;
