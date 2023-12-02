import scrollToElement from "../helpers/Sroller";

function Letswork() {
  return (
    <div className="w-full h-auto p-7 dark:text-white text-black flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gradient-top to-black">
      <div className="w-5/6 md:w-3/4 h-auto md:h-300 p-5 flex flex-col md:flex-row gap-12 md:gap-5 items-center justify-center bg-1e">
        <div className="flex flex-col gap-6 md:gap-4 w-11/12 md:w-3/4 ">
          <div className="text-2xl font-bold">
            Let's work together on your next big thing
          </div>
          <div className="text-sm font-extralight opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            temporibus quae aliquam et consectetur quis, nesciunt asperiores
            doloribus tempore magni!
          </div>
        </div>
        <div className=" flex items-center justify-center w-11/12 md:w-2/5">
          <button
            className="bg-green-500 md:p-5 p-3 flex items-center justify-center"
            onClick={() => scrollToElement("contact")}
          >
            Contact
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Letswork;
