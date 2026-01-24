import React from "react";
import { Icon } from "@iconify/react";

type TagsProps = {
  icon: string;
  children: React.ReactNode;
};

const Tags = ({ icon, children }: TagsProps) => {
  return (
    <div className="transition-border ease flex h-10 w-max items-center gap-2 rounded-md border-2 border-(--color-border-muted) bg-(--color-background) px-2 text-center duration-300 select-none hover:border-(--color-border)">
      <Icon fontSize={20} icon={icon} />
      <p className="text-(--color-foreground)">{children}</p>
    </div>
  );
};

export default Tags;
