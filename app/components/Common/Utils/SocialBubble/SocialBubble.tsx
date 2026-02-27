"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SocialBubble = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap rounded-full items-center gap-2 overflow-hidden bg-(--color-primary) px-3 outline-2 outline-offset-0 outline-(--color-secondary) transition-all duration-700 hover:w-55 hover:rounded-sm md:hover:rounded-md hover:bg-(--color-foreground) hover:px-4 hover:text-(--color-primary) hover:shadow-[0_0_10px_5px_var(--color-shadow)] hover:outline-offset-3 focus:w-55 md:rounded-4xl"
        href="/"
      >
        <Icon className="shrink-0" fontSize={25} icon="mdi:github" />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Léo Thomelin-Tual
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--color-primary) px-3 outline-2 outline-offset-0 outline-(--color-secondary) transition-all duration-700 hover:w-55 hover:rounded-md hover:bg-(--color-foreground) hover:px-4 hover:text-(--color-primary) hover:shadow-[0_0_10px_5px_var(--color-shadow)] hover:outline-offset-3 focus:w-55"
        href="/"
      >
        <Icon
          className="shrink-0"
          fontSize={25}
          icon="devicon-plain:linkedin"
        />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Léo Thomelin-Tual
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--color-primary) px-3 outline-2 outline-offset-0 outline-(--color-secondary) transition-all duration-700 hover:w-33 hover:rounded-md hover:bg-(--color-foreground) hover:px-4 hover:text-(--color-primary) hover:shadow-[0_0_10px_5px_var(--color-shadow)] hover:outline-offset-3 focus:w-33"
        href="/"
      >
        <Icon className="shrink-0" fontSize={25} icon="mdi:discord" />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Discord
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--color-primary) px-3 outline-2 outline-offset-0 outline-(--color-secondary) transition-all duration-700 hover:w-80 hover:rounded-md hover:bg-(--color-foreground) hover:px-4 hover:text-(--color-primary) hover:shadow-[0_0_10px_5px_var(--color-shadow)] hover:outline-offset-3 focus:w-80"
        href="/"
      >
        <Icon className="shrink-0" fontSize={25} icon="mdi:email" />
        <p className="ease opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          leo.thomelintual@gmail.com
        </p>
      </Link>
    </div>
  );
};

export default SocialBubble;
