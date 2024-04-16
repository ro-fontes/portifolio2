import Image from "next/image";
import AboutMe from "@/assets/About me.svg";
import Link, { LinkProps } from "next/link";
import { Url } from "url";

interface WidgetProps extends LinkProps {
  title: string;
  description: string;
  image: any;
}

export function Widget({ description, title, image, ...rest }: WidgetProps) {
  return (
    <Link {...rest}>
      <div className="h-[31.25rem] bg-BASIC_ONYX hover:bg-BASIC_ONYX/60 transition-colors rounded-3xl justify-between pt-14 items-center flex flex-col gap-14 overflow-hidden">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="font-bold text-3xl text-BASIC_WHITE">{title}</h2>
          <span className="text-BASIC_DARK_GRAY">{description}</span>
        </div>

        <Image src={image} alt="icon widget" />
      </div>
    </Link>
  );
}
