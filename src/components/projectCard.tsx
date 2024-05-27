import { GoArrowUpRight } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";
interface cardInput {
  name: string;
  image: string;
  link: string;
  github: string;
  inProgress: boolean;
  headline: string;
  featured: boolean;
  category: string[];
  title: string;
  stack?: string[];
}
export default function ProjectCard({
  name,
  image,
  category,
  link,
  github,
  title,
  featured,
  headline,
  inProgress,
}: cardInput) {
  return (
    <>
      <div
        className={`relative flex flex-col w-full border md:w-2/3 lg:w-1/3  items-start gap-2 hover:scale-105 rounded-lg p-3 md:p-2 shadow-2xl border-greyish dark:border-line text-md bg-white dark:bg-1e font-sans h-auto ${
          !featured ? "" : ""
        }`}
      >
        {inProgress && (
          <div className="absolute rounded-md top-0 right-0 bg-green-500 text-white p-2">
            in Progress
          </div>
        )}
        <div className="w-full h-64 p-2 flex gap-3 ">
          <button className="px-3 py-1 h-35 flex items-center justify-center dark:bg-lightgreen bg-verylightgreen text-green-500 text-md rounded-lg">
            {title}
          </button>
          {category.map((cat) => {
            return (
              <button className="px-3 py-1 h-35 flex items-center justify-center dark:bg-lightgreen bg-verylightgreen text-green-500 text-md rounded-lg">
                {cat}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 text-md h-auto p-2">
          <div className="font-bold">{name}</div>
          <div className="font-light opacity-80 text-sm lg:text-md h-auto w-full">
            {headline}
          </div>
        </div>
        <div className="dark:bg-cardbg w-full h-160 flex items-center justify-center rounded-md ">
          <img
            src={image}
            className=" w-full h-160 shadow-2xl object-cover rounded-lg"
          ></img>
        </div>
        <div className="w-full p-2 flex flex-row justify-between">
          <a
            href={link}
            target="_blank"
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
            target="_blank"
            className="mr-5 text-green-600 flex gap-2 hover:scale-105"
          >
            {github && (
              <div className="flex gap-2">
                <div>View Code</div>
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
