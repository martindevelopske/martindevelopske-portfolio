import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

type Theme = "dark" | "light";
export default function Header() {
  const currentpage = useLocation().pathname;
  console.log(currentpage);

  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full max-w-full h-48 text-black dark:text-white flex items-center justify-between dark:bg-black bg-lightgray fixed top-0 left-0 p-3 z-50">
      {currentpage === "/resume" && (
        <Link to="/" className="text-black dark:text-white">
          back
        </Link>
      )}
      <button className="hover:scale-90" onClick={handleThemeSwitch}>
        {theme === "light" ? <FaMoon size={20} /> : <FiSun size={20} />}
      </button>
    </div>
  );
}
