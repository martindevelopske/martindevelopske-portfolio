import { StacksData } from "../data/StacksData";

function About() {
  return (
    <div
      id="about"
      className="h-auto dark:text-white text-black bg-greyish dark:bg-slate-900 p- w-full flex items-center justify-center md:h-700 p-5"
    >
      <div className=" w-full md:w-5/6 flex flex-col items-center gap-5 justify-center h-auto">
        <div className="w-40 h-160 flex items-center justify-center relative p-3">
          <img
            className="absolute top-0 left-0 w-40 rounded-full h-160 object-cover"
            src="https://res.cloudinary.com/dilbjaf90/image/upload/v1699427995/pp_vqzizd_w0slxx.jpg"
            alt="image"
          ></img>
        </div>
        <div className="w-full h-auto flex items-center justify-center p-2 indent-8 font-mono font-thin">
          {" "}
          I am a passionate and experienced full-stack developer and DevOps
          engineer with a proven track record of designing, developing, and
          deploying high-quality web applications. I possess a deep
          understanding of both front-end and back-end technologies, enabling me
          to create seamless user experiences and robust server-side
          architectures.
          <br />
          <br />
          My expertise lies in utilizing a variety of programming languages and
          frameworks, including JavaScript, Typescript, React, Next JS, and
          Node.js. I am proficient in implementing DevOps practices, including
          continuous integration and continuous delivery (CI/CD), infrastructure
          automation, and cloud deployment.
        </div>
        <div className="w-full h-auto flex flex-col items-start justify-start p-5 gap-3">
          <div className="dark:text-green-400 text-green-600">
            Tools and Techstacks
          </div>
          <div className="md:w-3/4 w-full p-2 flex gap-2 h-auto md:ml-14 ml-0 flex-wrap items-center justify-center ">
            {StacksData.map((img) => {
              return (
                <div key={img.id}>
                  <img
                    src={img.src}
                    alt=""
                    className=" sm:w-12 w-16 h-60"
                  ></img>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
