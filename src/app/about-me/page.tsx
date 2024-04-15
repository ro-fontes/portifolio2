import { Question } from "./components/question";

export default function AboutMe() {
  return (
    <div className="mt-44 divide-y divide-DARK_WHITE_10">
      <div className="flex flex-col gap-3 px-4 lg:px-60 mb-16">
        <h1 className="text-7xl font-bold text-BASIC_ONYX dark:text-BASIC_WHITE">
          A little bit about me
        </h1>
        <h3 className="text-BASIC_MEDIUM_GRAY text-2xl">
          Who I am and what I do.
        </h3>
      </div>

      <div className="flex flex-col px-4 lg:px-60 gap-4 py-14">
        <Question
          question="Who I am"
          answer="I’m Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end
          engineer and UI/UX designer based in Rabat, Morocco 🇲🇦."
        />

        <Question
          question="What I Do"
          answer="With two years of invaluable experience in my role at Harmony
            Technology –– a tech company based here in Rabat, I have honed my
            skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing
            me to craft seamless and interactive user experiences. During my
            time at Harmony Technology, I had the privilege of collaborating on
            projects for esteemed clients such as the Ministry of Health,
            Ministry of Education, and Ministry of Justice. It was an incredibly
            rewarding experience to develop applications that directly impact
            the lives of Moroccan citizens."
        />
      </div>
    </div>
  );
}
