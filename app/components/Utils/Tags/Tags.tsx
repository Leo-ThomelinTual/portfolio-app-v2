import Image from "next/image";
import React from "react";

type TagsProps = {
  src: string;
  children: React.ReactNode;
};

const Tags = ({ src, children }: TagsProps) => {
  return (
    <div className="transition-border ease flex h-10 w-max items-center gap-2 rounded-md border-2 border-(--color-border-muted) bg-(--color-background) px-2 text-center duration-300 select-none hover:border-(--color-border)">
      <Image src={src} alt="" width={25} height={25} />
      <p className="text-white">{children}</p>
    </div>
  );
};

export default Tags;
