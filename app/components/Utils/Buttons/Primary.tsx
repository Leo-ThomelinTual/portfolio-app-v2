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
      className="ease flex h-10 w-max items-center gap-1 rounded-md bg-(--primary) px-3 text-white shadow-white outline-2 outline-(--outline) transition-all duration-500 hover:gap-2 hover:bg-white hover:text-(--primary) hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3"
    >
      {children}
    </Link>
  );
};
export default Primary;
