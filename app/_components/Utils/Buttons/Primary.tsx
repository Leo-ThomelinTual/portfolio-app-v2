import React from "react";

type PrimaryProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Primary = ({ children, onClick }: PrimaryProps) => {
  return (
    <button
      onClick={onClick}
      className="ease target flex h-10 w-max items-center gap-1 rounded-md bg-(--color-primary) px-3 text-(--color-foreground) outline-2 outline-(--color-outline) transition-all duration-500 hover:gap-2 hover:bg-(--color-foreground) hover:text-(--color-primary) hover:shadow-[0px_0px_10px_5px_var(--color-shadow)] hover:outline-offset-3"
    >
      {children}
    </button>
  );
};
export default Primary;
