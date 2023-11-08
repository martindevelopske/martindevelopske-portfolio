import Header from "./components/Header.tsx";
import About from "./sections/About.tsx";
import Hero from "./sections/Hero.tsx";
import Projects from "./sections/Projects.tsx";

export default function App() {
  return (
    <div className="text-black flex flex-col items-center justify-center w-full h-auto font-mono">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
