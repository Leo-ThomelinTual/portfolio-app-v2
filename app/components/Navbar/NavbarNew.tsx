import Link from "next/link";
import { Icon } from "@iconify/react";

const NavbarNew = () => {
  return (
    <nav className="transition-h-border ease group/gap fixed inset-x-1/2 bottom-2 z-50 flex h-17 w-max -translate-x-1/2 justify-center overflow-hidden rounded-full border-0 border-(--color-border-muted) bg-(--background-transparency) shadow-[inset_0px_-10px_10px] shadow-white/20 backdrop-blur-xs transition-shadow duration-400 hover:h-20 hover:border-(--color-border) hover:shadow-[inset_0px_0px_10px]">
      <div className="transition-gap ease flex items-center gap-0 px-5 duration-300 group-hover/gap:gap-5 md:gap-0">
        <Link
          href="/"
          className="group ease transition-mb group/text-leading hover:mb-2. relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:text-(--color-secondary)"
        >
          <Icon
            className="z-1"
            fontSize={30}
            icon="material-symbols:home-outline-rounded"
          />
          <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover:text-(--color-secondary) group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
            Accueil
          </p>

          <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href="/"
          className="group ease transition-mb group/text-leading relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:mb-2.5"
        >
          <Icon className="z-1" fontSize={30} icon="mdi:info" />
          <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
            A propos
          </p>

          <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href="/"
          className="group ease transition-mb group/text-leading relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:mb-2.5"
        >
          <Icon className="z-1" fontSize={30} icon="mdi:target" />
          <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
            Projets
          </p>

          <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href="/"
          className="group ease transition-mb group/text-leading relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:mb-2.5"
        >
          <Icon className="z-1" fontSize={30} icon="mdi:check" />
          <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
            Compétences
          </p>
          <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
        <Link
          href="/"
          className="group ease transition-mb group/text-leading relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:mb-2.5"
        >
          <Icon className="z-1" fontSize={30} icon="mdi:user" />
          <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
            Contact
          </p>

          <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary)" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarNew;
