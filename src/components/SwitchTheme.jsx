"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export function SwitchTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const localTheme = localStorage.getItem("theme");
      return localTheme ? localTheme : "light";
    }
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="hover:opacity-50 hover:cursor-pointer"
      onClick={() => handleTheme()}
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6 text-sky-300" />
      )}
    </button>
  );
}
