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
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
      }}
      onClick={() => handleTheme()}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonIcon className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
      ) : (
        <SunIcon className="h-4 w-4" style={{ color: "var(--accent)" }} />
      )}
    </button>
  );
}
