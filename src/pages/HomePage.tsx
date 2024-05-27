import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Letswork from "../sections/Letswork";
import Contact from "../sections/Contact";
import Whatsapp from "../components/Whatsapp";

export default function HomePage() {
  return (
    <div className="text-black flex flex-col items-center justify-center w-full h-auto font-mono">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Letswork />
      <Contact />
      <Whatsapp />
    </div>
  );
}
