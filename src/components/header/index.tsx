import Image from "next/image";
import { LinkPage } from "../link-page";
import linkedin from "@/assets/LinkedIn.svg";
import x from "@/assets/X.svg";
import github from "@/assets/Github.svg";

import { ThemeSwitcher } from "./theme-switcher";
import { Github } from "@/assets/Github";
import { X } from "@/assets/X";
import { Linkedin } from "@/assets/LinkedIn";

export function Header() {
  return (
    <header className="mx-4 lg:mx-60 h-16 text-white flex items-center justify-between border border-DARK_WHITE_25 dark:border-0 bg-DARK_WHITE_25 dark:bg-BASIC_ONYX/30 rounded-xl p-4 mt-8 backdrop-blur-sm">
      <div className="flex">
        <nav className="flex gap-10 text-base text-BASIC_LIGHT_GRAY">
          <span className="font-bold text-xl">{"< />"}</span>

          <LinkPage href="/about-me">About</LinkPage>
          <LinkPage href="#">Work</LinkPage>
          <LinkPage href="#">Notebook</LinkPage>
          <LinkPage href="#">Contact</LinkPage>
          <LinkPage href="#">More</LinkPage>
        </nav>
      </div>

      <div className="flex gap-6">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <X />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>

        <div className="border-l border-BASIC_DARK_GRAY dark:border-DARK_WHITE_25" />

        <ThemeSwitcher />
      </div>
    </header>
  );
}
