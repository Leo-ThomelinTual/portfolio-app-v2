"use client";
import Link from "next/link";
import React from "react";

type SecondaryProps = {
  href: string;
  children: React.ReactNode;
};

const Secondary = ({ href, children }: SecondaryProps) => {
  return (
    <Link
      href={href}
      className="ease flex h-10 w-max items-center gap-5 rounded-md bg-transparent px-3 shadow-white outline-2 outline-(--outline) transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3"
    >
      {children}
    </Link>
  );
};

export default Secondary;
