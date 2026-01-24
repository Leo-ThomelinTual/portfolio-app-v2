"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
const Social = () => {
  return (
    <div className="flex h-max w-max gap-5 rounded-full px-3 py-1.5">
      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Icon fontSize={25} icon="mdi:github" />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Icon fontSize={25} icon="devicon:linkedin" />
      </Link>

      <Link
        className="transition-scale ease duration-300 hover:scale-110"
        href="/"
      >
        <Icon fontSize={25} icon="devicon:facebook" />
      </Link>
    </div>
  );
};

export default Social;
