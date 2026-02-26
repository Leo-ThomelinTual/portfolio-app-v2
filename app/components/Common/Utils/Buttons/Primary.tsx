"use client";
import Link from "next/link";
import React from "react";

type PrimaryProps = {
  href: string;
  children: React.ReactNode;
};

const Primary = ({ href, children }: PrimaryProps) => {
  return (
    <Link
      href={href}
      className="ease flex h-10 w-max items-center gap-1 rounded-md bg-(--color-primary) px-3 text-(--color-foreground) outline-2 outline-(--color-outline) transition-all duration-500 hover:gap-2 hover:bg-(--color-foreground) hover:text-(--color-primary) hover:shadow-[0px_0px_10px_5px_var(--color-shadow)] hover:outline-offset-3"
    >
      {children}
    </Link>
  );
};
export default Primary;
