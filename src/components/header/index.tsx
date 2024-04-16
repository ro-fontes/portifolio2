import headerGradient from "@/assets/header-gradient.svg";
import Image from "next/image";
import { LinkPage } from "../link-page";

import { Github } from "@/assets/Github";
import { Linkedin } from "@/assets/LinkedIn";
import { X } from "@/assets/X";
import { ThemeSwitcher } from "@/components/header/theme-switcher";

export function Header() {
  return (
    <>
      <Image
        className="w-full absolute top-0 select-none -mt-20 -z-20"
        src={headerGradient}
        alt="blur header"
      />

      <header className="mx-4 lg:mx-[26.25rem] h-16 text-white flex items-center justify-between border border-DARK_WHITE_25 dark:border-0 bg-DARK_WHITE_25 dark:bg-BASIC_ONYX/30 rounded-xl p-4 mt-8 backdrop-blur-sm">
        <div className="flex">
          <nav className="flex gap-10 text-base text-BASIC_LIGHT_GRAY">
            <span className="font-bold text-xl">{"< />"}</span>

            <LinkPage href="/about-me">About</LinkPage>
            <LinkPage href="/projects">Projects</LinkPage>
            <LinkPage href="#">Notebook</LinkPage>
            <LinkPage href="#">Contact</LinkPage>
            <LinkPage href="#">More</LinkPage>
          </nav>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/rodrigo-b-s-fontes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <X />
          </a>

          <a
            href="https://github.com/ro-fontes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>

          <div className="border-l border-BASIC_DARK_GRAY dark:border-DARK_WHITE_25" />

          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
}
