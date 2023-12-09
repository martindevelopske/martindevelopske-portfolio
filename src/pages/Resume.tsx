import Header from "../components/Header";

function Resume() {
  return (
    <>
      <div className="flex flex-col text-black dark:text-white bg-blackbg w-full h-auto">
        <div className="w-full flex flex-col md:w-5/6 lg:w-3/4 border">
          <div>
            <Header />
          </div>
          <div className="mt-12">
            <div>Resume</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
