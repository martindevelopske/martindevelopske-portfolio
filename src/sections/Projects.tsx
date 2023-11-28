import ProjectCard from "../components/projectCard";
import { ProjectsData } from "../data/projectsdata";

function Projects() {
  return (
    <div
      className="h-auto dark:text-white text-black bg-blackbg w-full flex flex-col items-center justify-between"
      data-name="projects"
    >
      <div className="h-full w-full lg:w-5/6 mt-5 p-5">
        <div className="flex justify-between items-center my-5">
          <div className=" text-lg md:text-2xl">Featured Projects</div>
          <div>
            <button className="border p-3 hover:scale-90 text-green-400">
              view All
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-9 md:flex-wrap w-full p-5 items-center justify-center">
          {ProjectsData.map((item) => {
            const { name, id, img, stack, link, github } = item;
            return (
              <ProjectCard
                name={name}
                image={img}
                link={link}
                github={github}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
