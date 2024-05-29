import { useContext, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

// type Theme = "dark" | "light";
export default function Header() {
  const currentpage = useLocation().pathname;
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Theme switch handler
  const handleThemeSwitch = () => {
    toggleTheme();
  };

  return (
    <div className="w-full h-100 flex items-center justify-center fixed top-0 left-0 dark:bg-black bg-white z-50 font-sans">
      <div
        className={` max-w-full h-64 text-black w-5/6 dark:text-white flex items-center justify-between ${
          currentpage !== "/" && "justify-between items-center"
        } dark:bg-1e bg-greyish rounded-3xl p-3`}
      >
        {currentpage === "/resume" && (
          <Link to="/" className="text-black dark:text-white">
            <FaArrowLeft size={20} />
          </Link>
        )}
        <div className="text-green-500 text-md">@martindevelops</div>
        {currentpage === "/resume" && (
          <a
            href="/Martin-Ndung'u-Resume.pdf"
            download="Martin-Ndung'u-Resume.pdf"
          >
            <button className="bg-green-500 md:p-5 p-2 h-25 hover:scale-90  flex rounded-md items-center justify-center">
              Get a copy
            </button>
          </a>
        )}
        <div className="">
          <ul className="flex gap-3 mx-2 font-sans text-md lg:text-lg">
            <Link to="/" className="cursor-pointer hover:text-green-600">
              home
            </Link>
            <Link
              to="/projects"
              className="cursor-pointer hover:text-green-600"
            >
              Projects
            </Link>
            <Link to="/blog" className="cursor-pointer hover:text-green-600">
              Blog
            </Link>
          </ul>{" "}
        </div>
        <button className="hover:scale-90" onClick={handleThemeSwitch}>
          {localStorage.theme === "light" ? (
            <FaMoon size={20} />
          ) : (
            <FiSun size={20} />
          )}
        </button>
      </div>
    </div>
  );
}
