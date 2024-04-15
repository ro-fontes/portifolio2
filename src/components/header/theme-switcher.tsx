"use client";
import Image from "next/image";
import sun from "@/assets/Sun.svg";
import { useTheme } from "next-themes";
import { Sun } from "@/assets/Sun";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  return (
    <button onClick={handleSwitchTheme}>
      <Sun />
    </button>
  );
}
