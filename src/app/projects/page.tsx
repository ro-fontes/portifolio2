import { Send } from "@/assets/send";
import { Stars } from "@/assets/Stars";
import { Button } from "@/components/button";
import { ProjectItem } from "@/components/project-item";

export default function Projects() {
  return (
    <div className="mt-40 divide-y divide-LIGHT_CARD_BORDER dark:divide-DARK_WHITE_10">
      <div className="flex flex-col gap-3 px-4 lg:px-60 mb-16">
        <h1 className="text-7xl font-bold text-BASIC_ONYX dark:text-BASIC_WHITE">
          Projects
        </h1>
        <h3 className="text-BASIC_MEDIUM_GRAY text-2xl">
          Projects and ideas I’ve worked on
        </h3>
      </div>

      <div className="flex flex-col gap-3 px-4 lg:px-60 py-14">
        <ProjectItem
          title="Subbi –– The free subscriptions manager"
          subTitle="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
          stackLogo={""}
          link={{ label: "Download app", url: "#" }}
        />

        <ProjectItem
          title="React Documentation"
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

        <div className="justify-center items-center rounded-3xl gap-20 bg-LIGHT_CARD_BG dark:bg-DARK_BLACK_50 h-[564px] border border-dashed border-BASIC_MEDIUM_GRAY dark:border-DARK_CARD_BORDER flex flex-col p-14 overflow-hidden">
          <div className="flex flex-col gap-3 text-center text-3xl font-extrabold justify-center items-center">
            <Stars />

            <h2>YOUR PROJECT GOES HERE</h2>

            <span className="text-lg font-normal text-BASIC_DARK_GRAY">
              Let`s turn your idea into a visual reality
            </span>
          </div>

          <Button className="gap-3">
            <Send />
            <span>Get in touch</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
