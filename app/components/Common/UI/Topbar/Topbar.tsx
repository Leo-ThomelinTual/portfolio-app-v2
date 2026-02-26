import Link from "next/link";
import Social from "./Social";

const Topbar = () => {
  return (
    <header className="ease xs:left-2 fixed z-50 flex h-12.5 w-full items-center justify-between gap-10 bg-(--transparency-background) px-3 text-nowrap shadow-white/20 backdrop-blur-md transition-shadow duration-300 hover:shadow-[inset_5px_5px_10px] md:top-2 md:right-2 md:w-max md:rounded-full md:shadow-[inset_0px_-10px_10px]">
      <Link href="/" className="flex gap-3 text-xl">
        Léo Thomelin-Tual
      </Link>
      <Social />
    </header>
  );
};

export default Topbar;
