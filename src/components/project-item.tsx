import Image from "next/image";

interface ProjectItem {
  title: string;
  subTitle: string;
  stackLogo: any;
  image?: any;
  link: {
    url: string;
    label: string;
  };
}

export function ProjectItem({
  link,
  stackLogo,
  subTitle,
  title,
  image = ""
}: ProjectItem) {
  return (
    <div className="rounded-3xl bg-LIGHT_CARD_BG dark:bg-BASIC_ONYX h-[564px] border border-LIGHT_CARD_BORDER dark:border-DARK_CARD_BORDER flex p-14 overflow-hidden">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <span>{stackLogo}</span>

          <h2 className="text-3xl font-extrabold text-BASIC_ONYX dark:text-BASIC_WHITE">
            {title}
          </h2>
          <span className="mt-4 text-base text-BASIC_DARK_GRAY">
            {subTitle}
          </span>
        </div>

        <div>
          <a href={link.url}>{link.label}</a>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <Image className="w-[500px]" src={image} alt="project item image" />
      </div>
    </div>
  );
}
