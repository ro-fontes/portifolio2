import { Widget } from "@/components/widget";
import AboutMe from "@/assets/About me.svg";
import Notebook from "@/assets/Notebook.svg";
import Bookshelf from "@/assets/Bookshelf.svg";
import TechStack from "@/assets/Tech Stack.svg";

export default function Home() {
  return (
    <main className="text-white px-4 lg:px-60">
      <section className="mt-40 flex flex-col gap-12">
        <div className="text-BASIC_ONYX dark:text-BASIC_WHITE text-7xl font-bold">
          <span className="text-BASIC_DARK_GRAY">I’m </span>
          Rodrigo Fontes
        </div>

        <span className="text-BASIC_DARK_GRAY font-medium text-2xl">
          A front-end engineer and UI/UX designer helping startups turn their
          visions into a digital reality. I specialize in designing and building
          modern mobile and web-based apps.
        </span>

        <div className="flex flex-col lg:flex-row gap-2">
          <button className="font-medium text-lg rounded-lg px-8 py-4 bg-gradient-to-b from-[#1a1a1a] to-[#131313]">
            See my resume
          </button>

          <button className="font-medium text-lg rounded-lg px-8 py-4 bg-gradient-to-b from-[#1a1a1a] to-[#131313]">
            Get in touch
          </button>
        </div>
      </section>

      <section className="mt-96">
        <h1 className="text-5xl font-bold mb-8">Selected Work</h1>
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-BASIC_ONYX h-[564px] border border-DARK_CARD_BORDER flex p-14">
            <div className="flex-1 flex flex-col">
              <span>StackLogo</span>

              <h2 className="text-3xl font-extrabold">React Documentation</h2>
              <span className="mt-4 text-base text-BASIC_DARK_GRAY">
                With the release of the new React website on March 16, there was
                a need for localization to make the documentation accessible to
                Arabic-speaking developers. I contributed to translating several
                documentation, worked with great developers, Improved my ability
                to write better PR requests, and as a side effect, I now know
                more about the Arabic grammar.
              </span>
            </div>

            <div className="flex-1">Imagem</div>
          </div>

          <div className="rounded-3xl bg-BASIC_ONYX h-[564px] border border-DARK_CARD_BORDER flex p-14">
            <div className="flex-1 flex flex-col">
              <span>StackLogo</span>

              <h2 className="text-3xl font-extrabold">React Documentation</h2>
              <span className="mt-4 text-base text-BASIC_DARK_GRAY">
                With the release of the new React website on March 16, there was
                a need for localization to make the documentation accessible to
                Arabic-speaking developers. I contributed to translating several
                documentation, worked with great developers, Improved my ability
                to write better PR requests, and as a side effect, I now know
                more about the Arabic grammar.
              </span>
            </div>

            <div className="flex-1">Imagem</div>
          </div>

          <div className="rounded-3xl bg-BASIC_ONYX h-[564px] border border-DARK_CARD_BORDER flex p-14">
            <div className="flex-1 flex flex-col">
              <span>StackLogo</span>

              <h2 className="text-3xl font-extrabold">React Documentation</h2>
              <span className="mt-4 text-base text-BASIC_DARK_GRAY">
                With the release of the new React website on March 16, there was
                a need for localization to make the documentation accessible to
                Arabic-speaking developers. I contributed to translating several
                documentation, worked with great developers, Improved my ability
                to write better PR requests, and as a side effect, I now know
                more about the Arabic grammar.
              </span>
            </div>

            <div className="flex-1">Imagem</div>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h1 className="text-5xl font-bold mb-8">Get to know me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-3">
          <Widget
            title="About me"
            description="Who I am and what I do"
            image={AboutMe}
          />

          <Widget
            title="Notebook"
            description="My thoughts, insights, and reflections"
            image={Notebook}
          />

          <Widget
            title="Bookshelf"
            description="Books and pieces of wisdom I’ve enjoyed reading"
            image={Bookshelf}
          />

          <Widget
            title="Tech Stack"
            description="The dev tools, apps, devices, and games I use and play."
            image={TechStack}
          />

          <Widget
            title="Projects"
            description="The dev tools, apps, devices, and games I use and play."
            image={TechStack}
          />

          <Widget
            title="My Vscode Config."
            description="The dev tools, apps, devices, and games I use and play."
            image={TechStack}
          />
        </div>
      </section>

      <section className="mt-36 mb-28 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold mb-2">Let’s work together</h1>
          <span className="text-xl text-BASIC_MEDIUM_GRAY">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </span>
        </div>

        <button className="font-medium text-lg rounded-lg px-8 py-4 bg-gradient-to-b from-[#1a1a1a] to-[#131313]">
          Get in touch
        </button>
      </section>
    </main>
  );
}
