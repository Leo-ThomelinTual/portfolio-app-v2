import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type tempProps = {
  children: React.ReactNode;
  href: string;
  icon: string;
};

const temp = ({ children, href, icon }: tempProps) => {
  return (
    <Link
      href={href}
      className="ease flex w-max flex-nowrap items-center gap-1 rounded-md border-2 bg-(--color-background) border-(--color-secondary) p-2 uppercase shadow-[5px_5px_0px_var(--color-secondary)] transition-shadow duration-200 hover:shadow-[3px_3px_0px_var(--color-secondary)]"
    >
      <Icon className="skrink-0" fontSize={24} icon={icon} />
      {children}
    </Link>
  );
};

export default temp;
