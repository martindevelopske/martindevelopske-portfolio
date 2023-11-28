import { IconsData } from "../data/Iconsdata";
import { scroller } from "react-scroll";
export default function Footer() {
  const scrollToElement = (el: string) => {
    scroller.scrollTo(el, { smooth: true, offset: -60 });
  };
  return (
    <div className="w-full h-100 py-4 flex items-center justify-center bg-blackbg dark:text-white text-black">
      <div className="w-5/6 h-full flex justify-between items-center">
        <div className="flex items-center justify-center">
          <ul className="flex text-sm gap-2">
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => scrollToElement("hero")}
            >
              home
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => scrollToElement("about")}
            >
              about
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => scrollToElement("projects")}
            >
              projects
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => scrollToElement("hero")}
            >
              resume
            </li>
            <li
              className="cursor-pointer hover:text-green-600"
              onClick={() => scrollToElement("contact")}
            >
              contact
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center justify-center">
          {IconsData.map((image) => {
            return (
              <a href={image.href} target="__blank" key={image.id}>
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
