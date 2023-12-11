import { GoArrowUpRight } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
interface cardInput {
  name: string;
  image: string;
  link: string;
  github: string;
  inProgress: boolean;
  stack?: string[];
}
export default function ProjectCard({
  name,
  image,
  link,
  github,
  inProgress,
}: cardInput) {
  return (
    <>
      <div className="relative flex flex-col w-full md:w-2/5 items-start gap-4 hover:scale-95">
        {inProgress && (
          <div className="absolute top-0 right-0 bg-green-500 text-white p-2">
            in Progress
          </div>
        )}
        <div className="dark:bg-cardbg bg-greyish w-full h-300 flex items-center justify-center shadow-2xl">
          <img
            src={image}
            className=" w-4/5 h-200 shadow-2xl object-cover"
          ></img>
        </div>
        <div className="text-xl"> {name}</div>
        <div className="flex">
          <a
            href={link}
            target="__blank"
            className="py-3 mr-5 text-green-600 flex gap-2 hover:scale-105"
          >
            <div></div>
            Visit{" "}
            <div>
              <GoArrowUpRight />
            </div>
          </a>
          <a
            href={link}
            className="py-3 mr-5 text-green-600 flex gap-2 hover:scale-105"
          >
            {github && (
              <div className="flex gap-2">
                <div>Github</div>
                <div>
                  <IoLogoGithub />
                </div>
              </div>
            )}
          </a>
        </div>
      </div>
    </>
  );
}
