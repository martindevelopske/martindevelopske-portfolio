import { Link } from "react-router-dom";
import { IconsData } from "../data/Iconsdata";
import ScrollToElement from "../helpers/Sroller";
export default function Footer() {
  return (
    <div className="w-full h-100 py-4 flex items-center justify-center dark:bg-blackbg dark:text-white text-black bg-white">
      <div className="w-5/6 h-full flex gap-3 flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center">
          <ul className="flex text-sm md:text-md gap-2">
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => ScrollToElement("hero")}
            >
              home
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => ScrollToElement("about")}
            >
              about
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => ScrollToElement("projects")}
            >
              projects
            </li>
            <Link to="/resume" className="cursor-pointer hover:text-green-600">
              resume
            </Link>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => ScrollToElement("contact")}
            >
              contact
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center justify-center">
          {IconsData.map((image) => {
            return (
              <a href={image.href} target="_blank" key={image.id}>
                <img
                  src={image.link}
                  alt={image.name}
                  className="rounded-lg h-25 w-6"
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
