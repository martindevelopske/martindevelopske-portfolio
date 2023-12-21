import { GoArrowUpRight } from "react-icons/go";
interface cardInput {
  name: string;
  image: string;
  link: string;
  github: string;
  inProgress: boolean;
  headline: string;
  title: string;
  stack?: string[];
}
export default function ProjectCard({
  name,
  image,
  link,
  title,
  headline,
  inProgress,
}: cardInput) {
  return (
    <>
      <div className="relative flex flex-col w-3/4 md:w-1/3 lg:w-1/4 items-start gap-2 hover:scale-105 rounded-lg p-3 md:p-2 border border-greyish dark:border-line text-md bg-white dark:bg-1e  ">
        {inProgress && (
          <div className="absolute rounded-md top-0 right-0 bg-green-500 text-white p-2">
            in Progress
          </div>
        )}
        <div className="w-full h-64 p-2">
          <button className="p-2 dark:bg-lightgreen bg-verylightgreen text-green-500 text-sm rounded-3xl">
            {title}
          </button>
        </div>
        <div className="flex flex-col gap-1 text-md h-130">
          <div className="font-bold">{name}</div>
          <div className="font-light opacity-80">{headline}</div>
        </div>
        <div className="dark:bg-cardbg w-full h-160 flex items-center justify-center rounded-md ">
          <img
            src={image}
            className=" w-full h-160 shadow-2xl object-cover rounded-lg"
          ></img>
        </div>
        <div className="w-full p-2">
          <a
            href={link}
            target="__blank"
            className="mr-5 text-green-600 flex gap-2 hover:scale-105"
          >
            <div></div>
            Visit{" "}
            <div>
              <GoArrowUpRight />
            </div>
          </a>
          <a
            href={link}
            className="mr-5 text-green-600 flex gap-2 hover:scale-105"
          >
            {/* {github && (
              <div className="flex gap-2">
                <div>Github</div>
                <div>
                  <IoLogoGithub />
                </div>
              </div>
            )} */}
          </a>
        </div>
      </div>
    </>
  );
}
