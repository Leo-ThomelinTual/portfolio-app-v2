import Link from "next/link";
import { House, Info, Target, CircleCheckBig, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 z-50 flex h-20 w-full flex-row justify-center border-t-2 border-(--color-border-muted) bg-(--transparency-background) backdrop-blur-md">
      <div className="flex items-center gap-0 md:gap-3">
        <Link
          href="/"
          className="group ease transition-mb relative z-1 flex flex-col items-center gap-1 rounded-md p-1.5 text-nowrap duration-300 hover:mb-2.5 hover:text-(--color-secondary)"
        >
          <Info />
          A propos
          <div className="ease absolute -bottom-10 z-0 h-15 w-15 rounded-md bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href="/"
          className="group ease transition-mb relative z-1 flex flex-col items-center gap-1 rounded-md p-1.5 text-nowrap duration-300 hover:mb-2.5 hover:text-(--color-secondary)"
        >
          <Target />
          Projets
          <div className="ease absolute -bottom-10 z-0 h-15 w-15 rounded-md bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>

        {/* Center */}
        <Link
          href="/"
          className="group ease transition-mb relative -top-5 flex flex-col items-center rounded-full border-2 border-(--color-border-muted) bg-(--color-background) p-5 duration-300 hover:mb-2.5 hover:border-(--color-border) hover:text-(--color-secondary)"
        >
          <House />
          Accueil
          <div className="ease absolute -bottom-10 z-0 h-15 w-15 rounded-md bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>

        <Link
          href="/"
          className="group ease transition-mb relative z-1 flex flex-col items-center gap-1 rounded-md p-1.5 text-nowrap duration-300 hover:mb-2.5 hover:text-(--color-secondary)"
        >
          <CircleCheckBig />
          Compétences
          <div className="ease absolute -bottom-10 z-0 h-15 w-15 rounded-md bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href=""
          className="group ease transition-mb relative z-1 flex flex-col items-center gap-1 rounded-md p-1.5 text-nowrap duration-300 hover:mb-2.5 hover:text-(--color-secondary)"
        >
          <User />
          Contact
          <div className="ease absolute -bottom-10 z-0 h-15 w-15 rounded-md bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
