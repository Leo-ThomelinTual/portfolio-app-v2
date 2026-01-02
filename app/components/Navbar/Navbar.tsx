import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 z-50 flex h-20 w-full flex-row justify-center border-t-2 border-gray-500 bg-(--background-transparent) backdrop-blur-md">
      <div className="flex items-center gap-0 md:gap-3">
        <Link
          href="/"
          className="ease transition-mb flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-1.5 duration-300 hover:mb-2.5 hover:border-white hover:text-(--secondary)"
        >
          <Image src="/globe.svg" alt="" width={25} height={25} />
          Accueil
        </Link>
        <Link
          href="/"
          className="ease transition-mb flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-1.5 duration-300 hover:mb-2.5 hover:border-white hover:text-(--secondary)"
        >
          <Image src="/globe.svg" alt="" width={25} height={25} />
          Accueil
        </Link>

        {/* Center */}
        <Link
          href="/"
          className="ease transition-mb relative -top-5 flex flex-col items-center rounded-full border-2 border-(--border) bg-(--background) p-5 duration-300 hover:mb-2.5 hover:text-(--secondary)"
        >
          <Image src="/globe.svg" alt="" width={25} height={25} />
          Accueil
        </Link>

        <Link
          href="/"
          className="ease transition-mb flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-1.5 duration-300 hover:mb-2.5 hover:border-white hover:text-(--secondary)"
        >
          <Image src="/globe.svg" alt="" width={25} height={25} />
          Accueil
        </Link>
        <Link
          href=""
          className="ease transition-mb flex flex-col items-center gap-1 rounded-md border-2 border-transparent p-1.5 duration-300 hover:mb-2.5 hover:border-white hover:text-(--secondary)"
        >
          <Image src="/globe.svg" alt="" width={25} height={25} />
          Accueil
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
