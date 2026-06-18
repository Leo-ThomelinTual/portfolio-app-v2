"use client";

import Link from "next/link";

type TertiaryProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Tertiary = ({ href, children, className }: TertiaryProps) => {
  return (
    <Link
      onClick={undefined}
      href={href}
      className={`${className} ease flex w-max target items-center gap-3 rounded-md bg-transparent px-3 py-2 shadow-white outline-2 outline-(--color-foreground) transition-all duration-300 hover:text-(--color-foreground) hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3`}
    >
      {children}
    </Link>
  );
};

export default Tertiary;
