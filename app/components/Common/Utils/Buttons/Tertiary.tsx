"use client";

import Link from "next/link";

type TertiaryProps = {
  href: string;
  children: React.ReactNode;
};

const Tertiary = ({ href, children }: TertiaryProps) => {
  return (
    <Link
      href={href}
      className="ease flex h-10 w-max items-center gap-3 rounded-md bg-transparent px-3 shadow-white outline-2 outline-(--color-foreground) transition-all duration-500 hover:text-(--color-foreground) hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3"
    >
      {children}
    </Link>
  );
};

export default Tertiary;
