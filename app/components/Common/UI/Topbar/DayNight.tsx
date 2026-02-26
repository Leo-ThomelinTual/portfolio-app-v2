"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

const DayNight = () => {
  // const storageKey = "theme-preference";

  // const getColorPreference = () => {
  //   if (localStorage.getItem(storageKey))
  //     return localStorage.getItem(storageKey);
  //   else
  //     return window.matchMedia("(prefers-color-scheme: dark").matches
  //       ? "dark"
  //       : "light";
  // };

  // const setPreference = () => {
  //   localStorage.setItem(storageKey, theme.value);
  //   reflectPreference();
  // };

  // const reflectPreference = () => {
  //   document.firstElementChild?.setAttribute("data-theme", theme.value);

  //   document
  //     .querySelector("#theme-toggle")
  //     ?.setAttribute("aria-label", theme.value);
  // };

  // reflectPreference();
  // function handleThemeChange(name: string) {
  //   const changeState = document.getElementById("sun-moon-indicator");
  //   const body = document.body;
  //   if (name === "day") {
  //     changeState?.classList.remove("left-[52%]");
  //     changeState?.classList.add("left-[0%]");
  //     if (body.classList.contains("night")) {
  //       body.classList.remove("night");
  //       body.classList.add("day");
  //     }
  //   } else if (name === "night") {
  //     changeState?.classList.remove("left-[0%]");
  //     changeState?.classList.add("left-[52%]");
  //     if (body.classList.contains("day")) {
  //       body.classList.remove("day");
  //       body.classList.add("night");
  //     }
  //   }
  // }
  return (
    <div className="relative ml-auto overflow-hidden rounded-full border-2 border-(--border) p-2">
      <div
        id="sun-moon-indicator"
        className="ease absolute top-0 left-[0%] -z-1 h-full w-10 rounded-full bg-(--secondary) transition-all duration-200"
      />
      <div className="z-0 flex gap-5">
        <button
          // onClick={() => {
          //   theme.value = theme.value === "light" ? "dark" : "light";
          //   setPreference();
          // }}
          className="cursor-pointer rounded-full"
        >
          <Sun />
        </button>
        <button
          // onClick={() => {
          //   theme.value = theme.value === "light" ? "dark" : "light";
          //   setPreference();
          // }}
          className="cursor-pointer rounded-full"
        >
          <Moon />
        </button>
      </div>
    </div>
  );
};

export default DayNight;
