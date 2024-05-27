import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import { ProjectsData } from "../data/projectsdata";

function Projects() {
  return (
    <div
      id="projects"
      className="h-auto text-black bg-greyish dark:bg-gradient-to-b from-1e to-black w-full flex flex-col items-center justify-between dark:text-white"
      data-name="projects"
    >
      <div className="flex justify-between items-center my-5 w-full px-5">
        <div className=" text-lg md:text-2xl">Featured Projects</div>
        <Link to="/projects">
          <button className="border border-green-600 rounded-3xl p-2 hover:scale-90 text-green-600">
            view All
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap w-3/4 p-2 items-center justify-center md:w-full gap-5">
        {ProjectsData.map((item) => {
          const { name, id, img, link, github, headline, title, featured } =
            item;
          return (
            featured && (
              <ProjectCard
                name={name}
                image={img}
                link={link}
                github={github}
                key={id}
                headline={headline}
                title={title}
                featured={featured}
                inProgress={item.inProgress}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
