import React from "react";
import { Icon } from "@iconify/react";

type FooterBoxProps = {
  title: string;
  titleIcon: string;
  children: React.ReactNode;
};

const FooterBox = ({ title, titleIcon, children }: FooterBoxProps) => {
  return (
    <article className="flex w-full flex-col gap-3 rounded-md border-2 p-3 md:w-1/3 lg:w-1/4">
      <h2 className="flex items-center gap-2 self-center text-xl font-bold uppercase">
        {title} <Icon icon={titleIcon} />
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 self-center">
        {children}
      </div>
    </article>
  );
};

export default FooterBox;
