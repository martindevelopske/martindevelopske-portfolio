import scrollToElement from "../helpers/Sroller";

function Letswork() {
  return (
    <div className="w-full h-auto p-7 dark:text-white text-black flex flex-col md:flex-row items-center justify-center dark:bg-gradient-to-b from-gradient-top to-black bg-white">
      <div className="w-5/6 md:w-3/4 h-auto md:h-300 p-5 flex flex-col md:flex-row gap-12 md:gap-5 items-center justify-center dark:bg-1e bg-greyish">
        <div className="flex flex-col gap-6 md:gap-4 w-11/12 md:w-3/4 ">
          <div className="text-2xl font-bold">
            Let's work together on your next big thing
          </div>
          <div className="text-sm font-extralight opacity-70">
            Specializing in bringing ideas to life through the art of web
            development. I thrive on turning concepts into visually stunning and
            highly functional websites. Let's transform your vision into a
            captivating online reality that engages, inspires, and leaves a
            lasting impression.
          </div>
        </div>
        <div className=" flex items-center justify-center w-11/12 md:w-2/5">
          <button
            className="bg-green-500 md:p-3 p-2 flex items-center justify-center rounded-md"
            onClick={() => scrollToElement("contact")}
          >
            Let's Chat
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Letswork;
