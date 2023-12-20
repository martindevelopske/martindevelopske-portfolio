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
    <div
      className={`w-full max-w-full h-48 text-black dark:text-white flex justify-end ${
        currentpage !== "/" && "justify-between items-center"
      } dark:bg-black bg-greyish fixed top-0 left-0 p-3 z-50`}
    >
      {currentpage === "/resume" && (
        <Link to="/" className="text-black dark:text-white">
          <FaArrowLeft size={20} />
        </Link>
      )}
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
      <button className="hover:scale-90" onClick={handleThemeSwitch}>
        {localStorage.theme === "light" ? (
          <FaMoon size={20} />
        ) : (
          <FiSun size={20} />
        )}
      </button>
    </div>
  );
}
