"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

type ButtonProps = {
  icon: string;
  href: string;
  name: string;
};

function NavbarBtn({ href, icon, name }: ButtonProps) {
  return (
    <Link
      href={href}
      className="group ease transition-mb group/text-leading hover:mb-2. relative flex flex-col items-center gap-1 rounded-md text-nowrap duration-300 hover:text-(--color-secondary) active:mb-2 active:text-(--color-secondary)"
    >
      <Icon className="z-1" fontSize={30} icon={icon} />
      <p className="transition-text ease z-1 leading-0 text-transparent duration-300 group-hover:text-(--color-secondary) group-hover/gap:leading-3 group-hover/gap:text-white group-hover/text-leading:leading-4">
        {name}
      </p>

      <div className="ease rounded-1/2 absolute -bottom-10 z-0 h-15 w-10 bg-transparent blur-md transition-all duration-500 group-hover:bg-(--color-primary) group-active:bg-(--color-primary)" />
    </Link>
  );
}

export default NavbarBtn;
