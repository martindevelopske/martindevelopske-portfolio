import { StacksData } from "../data/StacksData";

function About() {
  return (
    <div
      id="about"
      className="h-auto dark:text-white text-black bg-gradient-to-b from-greyish to-white dark:bg-gradient-to-b dark:from-gradient-top dark:to-black w-full flex items-center justify-center md:h-800 p-5"
    >
      <div className=" w-full md:w-5/6 flex flex-col items-center gap-5 justify-center h-auto">
        <div className="w-40 h-160 flex items-center justify-center relative p-3">
          <img
            className="absolute top-0 left-0 w-40 rounded-full h-160 object-cover"
            src="https://res.cloudinary.com/dilbjaf90/image/upload/v1699427995/pp_vqzizd_w0slxx.jpg"
            alt="image"
          ></img>
        </div>

        <div className="prose w-full max-w-none">
          I have extensive experience developing and executing top-notch web
          apps as a seasoned full-stack developer. With a strong background in
          server-side architecture and seamless user experiences, I am
          proficient in both front-end and back-end technologies. I am committed
          to providing creative solutions and keeping up with the most recent
          business trends in order to effectively contribute to any development
          project. I have a track record of success in this regard. My expertise
          lies in utilizing a variety of programming languages, frameworks and
          tools including:
          <span className="text-green-600">
            JavaScript, Typescript, React, Next JS, Tailwind CSS and Node.js,
            Prisma ORM, Mongo DB, Redis, Postgresql, Git, Jenkins, Docker,
            Kubernetes.
          </span>
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
