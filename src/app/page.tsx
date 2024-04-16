import AboutMe from "@/assets/About me.svg";
import Bookshelf from "@/assets/Bookshelf.svg";
import { Geist } from "@/assets/geist";
import Notebook from "@/assets/Notebook.svg";
import { Send } from "@/assets/send";
import app from "@/assets/Subbi.png";
import TechStack from "@/assets/Tech Stack.svg";
import { Button } from "@/components/button";
import { ProjectItem } from "@/components/project-item";
import { Widget } from "@/components/widget";

export default function Home() {
  return (
    <main className="text-white mx-4 lg:mx-[26.25rem]">
      <section className="mt-40 flex gap-12">
        <div className="flex flex-col gap-12">
          <div className="text-BASIC_ONYX dark:text-BASIC_WHITE text-6xl font-bold">
            <span className="text-BASIC_DARK_GRAY">I’m </span>
            Rodrigo Fontes
          </div>

          <span className="text-BASIC_DARK_GRAY font-medium text-2xl">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </span>

          <div className="flex flex-col lg:flex-row gap-2">
            <Button>See my resume</Button>
            <Button variant="secondary">Get in touch</Button>
          </div>
        </div>

        <div>
          <Geist />
        </div>
      </section>

      <section className="mt-96">
        <h1 className="text-5xl font-bold mb-8 text-BASIC_ONYX dark:text-BASIC_WHITE">
          Selected Work
        </h1>

        <div className="flex flex-col gap-8">
          <ProjectItem
            title="TTF Alimentos products management and selling"
            subTitle="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            stackLogo={""}
            link={{ label: "Download app", url: "#" }}
            image={app}
          />

          <ProjectItem
            title="Bikestyle for cyclist"
            subTitle="With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar."
            stackLogo={""}
            link={{ label: "Visit Site", url: "#" }}
          />

          <ProjectItem
            title="Storybook Documentation"
            subTitle="This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process."
            stackLogo={""}
            link={{ label: "Visit Site", url: "#" }}
          />
        </div>
      </section>

      <section className="mt-32">
        <h1 className="text-5xl font-bold mb-8 text-BASIC_ONYX dark:text-BASIC_WHITE">
          Get to know me
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-3">
          <Widget
            title="About me"
            description="Who I am and what I do"
            image={AboutMe}
            href="/about-me"
          />

          <Widget
            title="Notebook"
            description="My thoughts, insights, and reflections"
            image={Notebook}
            href="#"
          />

          <Widget
            title="Bookshelf"
            description="Books and pieces of wisdom I’ve enjoyed reading"
            image={Bookshelf}
            href="#"
          />

          <Widget
            title="Tech Stack"
            description="The dev tools, apps, devices, and games I use and play."
            image={TechStack}
            href="#"
          />
        </div>
      </section>

      <section className="mt-36 mb-28 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold mb-2 text-BASIC_ONYX dark:text-BASIC_WHITE">
            Let’s work together
          </h1>
          <span className="text-xl text-BASIC_DARK_GRAY dark:text-BASIC_MEDIUM_GRAY">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </span>
        </div>

        <Button className="gap-3">
          <Send /> Get in touch
        </Button>
      </section>
    </main>
  );
}
