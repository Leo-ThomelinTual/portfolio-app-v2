import React from "react";
import Image from "next/image";
import Link from "next/link";
const Social = () => {
  return (
    <div className="flex h-max w-max gap-5 rounded-full border-2 border-(--color-border-muted) px-5 py-1.5">
      {/* TODO Fix image invisible in white theme */}
      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Image src="/github_dark.svg" alt="" width={25} height={25} />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Image src="/LinkedIn_icon.svg" alt="" width={25} height={25} />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Image src="/github_dark.svg" alt="" width={25} height={25} />
      </Link>
    </div>
  );
};

export default Social;
