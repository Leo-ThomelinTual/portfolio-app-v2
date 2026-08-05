import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type ButtonPrimaryProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
};

const ButtonPrimary = ({ children, href, icon, onClick, className, iconPosition }: ButtonPrimaryProps) => {
  return (
    <Link
      onClick={onClick}
      href={href ? href : ""}
      className={"flex w-max h-max flex-nowrap items-center p-2 gap-1 rounded-md border-2 bg-(--color-background) border-(--color-secondary) uppercase ease shadow-[5px_5px_0px_var(--color-secondary)] transition-shadow-opacity duration-200 hover:shadow-[3px_3px_0px_var(--color-secondary)]" + " " + `${className}`}
    >
      {icon ? iconPosition === "left" ? <Icon className="skrink-0" fontSize={24} icon={icon} /> : null : null}
      {children}
      {icon ? iconPosition === "right" ? <Icon className="skrink-0" fontSize={24} icon={icon} /> : null : null}
    </Link>
  );
};

export default ButtonPrimary;
