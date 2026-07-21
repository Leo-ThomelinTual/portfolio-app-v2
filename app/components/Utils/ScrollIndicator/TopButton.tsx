"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Temp from "../Buttons/Temp";

const TopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setShow(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Temp
      href=""
      icon=""
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
      <p className="hidden md:flex">TOP</p> <Icon icon="mdi:arrow-up" />
    </Temp>
  );
};

export default TopButton;
