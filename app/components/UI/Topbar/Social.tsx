"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
const Social = () => {
  return (
    <div className="flex h-max w-max gap-5 rounded-full px-3 py-1.5">
      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="https://github.com/Leo-ThomelinTual"
      >
        <Icon className="shrink-0" fontSize={25} icon="mdi:github" />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="https://www.linkedin.com/in/leo-thomelintual/"
      >
        <Icon
          className="shrink-0"
          fontSize={25}
          icon="devicon-plain:linkedin"
        />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="https://www.facebook.com/profile.php?id=61564035716349"
      >
        <Icon className="shrink-0" fontSize={25} icon="mdi:facebook" />
      </Link>
    </div>
  );
};

export default Social;
