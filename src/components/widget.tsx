import Image from "next/image";
import AboutMe from "@/assets/About me.svg";

interface WidgetProps {
  title: string;
  description: string;
  image: any;
}

export function Widget({ description, title, image }: WidgetProps) {
  return (
    <div className="h-[31.25rem] bg-BASIC_ONYX rounded-3xl justify-between pt-14 items-center flex flex-col gap-14 overflow-hidden">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="font-bold text-3xl text-BASIC_WHITE">{title}</h2>
        <span className="text-BASIC_DARK_GRAY">{description}</span>
      </div>

      <Image src={image} alt="icon widget" />
    </div>
  );
}
