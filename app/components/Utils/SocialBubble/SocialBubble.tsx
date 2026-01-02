import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialBubble = () => {
  return (
    <div className="absolute flex flex-wrap gap-3">
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--primary) px-3 outline-2 outline-offset-0 outline-(--secondary) transition-all duration-700 hover:w-50 hover:rounded-md hover:bg-white hover:px-4 hover:text-black hover:shadow-[0_0_10px_5px_white] hover:outline-offset-3 focus:w-50"
        href="/"
      >
        <Image
          className="shrink-0"
          src="./github_dark.svg"
          alt=""
          width={25}
          height={25}
        />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Léo Thomelin-Tual
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--primary) px-3 outline-2 outline-(--secondary) transition-all duration-700 hover:w-50 hover:rounded-md hover:bg-white hover:px-4 hover:text-black hover:shadow-[0_0_10px_5px_white] focus:w-50"
        href="/"
      >
        <Image src="./LinkedIn_icon.svg" alt="" width={25} height={25} />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Léo Thomelin-Tual
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--primary) px-3 outline-2 outline-(--secondary) transition-all duration-700 hover:w-31 hover:rounded-md hover:bg-white hover:px-4 hover:text-black hover:shadow-[0_0_10px_5px_white] focus:w-31"
        href="/"
      >
        <Image src="./Discord.svg" alt="" width={25} height={25} />
        <p className="ease text-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          Discord
        </p>
      </Link>
      <Link
        className="group ease flex h-[3em] w-12.5 flex-nowrap items-center gap-2 overflow-hidden rounded-4xl bg-(--primary) px-3 outline-2 outline-(--secondary) transition-all duration-700 hover:w-67 hover:rounded-md hover:bg-white hover:px-4 hover:text-black hover:shadow-[0_0_10px_5px_white] focus:w-67"
        href="/"
      >
        <Image src="./Mail.svg" alt="" width={25} height={25} />
        <p className="ease opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
          leo.thomelintual@gmail.com
        </p>
      </Link>
    </div>
  );
};

export default SocialBubble;
