"use client";

import Link from "next/link";

type SecondaryProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Secondary = ({ href, children, className, onClick }: SecondaryProps) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${className} ease target flex w-max items-center gap-3 rounded-md bg-(--color-background) px-3 py-2 shadow-white outline-2 outline-(--color-foreground) transition-all duration-300 hover:text-(--color-foreground) hover:shadow-[0px_0px_10px_5px] hover:outline-offset-3`}
    >
      {children}
    </Link>
  );
};

export default Secondary;
