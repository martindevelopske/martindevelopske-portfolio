import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import { ProjectsData } from "../data/projectsdata";
import { FaArrowLeft } from "react-icons/fa6";
function ProjectsPage() {
  // const slicedArray = ProjectsData.slice(0, 4);
  return (
    <div
      id="projects"
      className="mt-[100px] h-auto text-black bg-greyish dark:bg-gradient-to-b from-1e to-black w-full flex flex-col items-center justify-between dark:text-white"
      data-name="projects"
    >
      <div className="flex justify-between items-center h-64 w-full px-3 fixed top-0 mt-[100px] left-0 z-50 bg-white dark:bg-blackbg">
        <Link
          to="/"
          className=" text-lg text-green-500 flex items-center justify-center gap-2"
        >
          {" "}
          <FaArrowLeft />
          Back
        </Link>
        <div>All Projects</div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap w-3/4 p-2 items-center justify-center md:w-full gap-6 mt-32">
        {ProjectsData.map((item) => {
          const {
            name,
            id,
            img,
            category,
            link,
            github,
            headline,
            title,
            featured,
          } = item;

          return (
            <ProjectCard
              name={name}
              image={img}
              link={link}
              category={category}
              github={github}
              key={id}
              headline={headline}
              featured={featured}
              title={title}
              inProgress={item.inProgress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
