import Image from "next/image";
import footerGradient from "@/assets/footer-gradient.svg";
import logo from "@/assets/Logo.svg";
import { LinkPage } from "./link-page";

export function Footer() {
  return (
    <>
      <footer className="border-t border-DARK_WHITE_10 h-80 select-none flex justify-between px-4 lg:px-[26.25rem] pt-16 text-BASIC_MEDIUM_GRAY">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-5">
            <Image src={logo} alt="logo" />
            Thanks for stopping by{" "}
          </div>

          <div>
            <span>© 2024 Rodrigo Fontes. All Rights Reserved.</span>
          </div>
        </div>

        <div className="flex gap-28">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-BASIC_WHITE">Links</p>

            <nav className="flex flex-col gap-4">
              <LinkPage href="#">About</LinkPage>
              <LinkPage href="#">Work</LinkPage>
              <LinkPage href="#">Tech Stack</LinkPage>
              <LinkPage href="#">Contact</LinkPage>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold text-BASIC_WHITE">Elsewhere</p>

            <nav className="flex flex-col gap-4">
              <LinkPage href="#">Email</LinkPage>
              <LinkPage href="#">Linkedin</LinkPage>
              <LinkPage href="#">Github</LinkPage>
              <LinkPage href="#">Twitter</LinkPage>
              <LinkPage href="#">Discord</LinkPage>
            </nav>
          </div>
        </div>
      </footer>

      <Image
        className="w-full absolute bottom-0 -mb-20 -z-20"
        src={footerGradient}
        alt="blur header"
      />
    </>
  );
}
