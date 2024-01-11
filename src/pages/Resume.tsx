import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IconsData } from "../data/Iconsdata";

const Resume = () => {
  return (
    <div className="w-full sm:text-sm md:text-base h-auto min-h-screen dark:bg-blackbg flex flex-col items-center justify-center font-mono dark:text-white bg-greyish">
      <div className="w-5/6">
        <Header />
      </div>
      <div className="w-full md:w-5/6 lg:w-3/4 mt-14">
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-blackbg light:text-black dark:text-white rounded-md">
          {/* Personal Information */}
          <div className="max-w-2xl mx-auto mt-10 p-4 rounded-md text-center">
            <h1 className="text-base font-bold mb-4 text-green-600">
              Martin Ndung'u - Full Stack Software Engineer
            </h1>
            <div className="max-w-2xl mx-auto p-2 w-full md:w-3/4 rounded-md text-center text-sm md:text-base">
              <p className="font-bold mb-4">
                Nairobi, Kenya || phone: +254703605544 ||
                <Link
                  to="mailto:martindevelopske@gmail.com"
                  className="text-blue-400"
                >
                  {" "}
                  martindevelopske@gmail.com
                </Link>
              </p>
            </div>
          </div>
          {/* Summary Section */}
          <p className="text-md font-mono">
            Experienced Fullstack Developer with a robust background in web
            development, specializing in crafting seamless user experiences.
            Proficient in both front-end and back-end technologies, dedicated to
            delivering creative solutions and staying abreast of the latest
            business trends to contribute effectively to development projects.
          </p>

          {/* Experience Section */}
          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Experience
          </h2>
          <ul className="text-md">
            <li>
              <div className="flex items-center justify-between">
                <strong>
                  Songa: Full-stack Engineer (
                  <Link
                    to="https://www.linkedin.com/company/songaapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B1JKUV3VZRuKNgXpz6fLz9g%3D%3D"
                    target="__blank"
                    className=" text-blue-600"
                  >
                    LinkedIn
                  </Link>
                  )
                </strong>
                (Jan 2023 - Sep 2023)
              </div>
              <ul>
                <li className="list-disc ml-6">
                  Established server-side logic and database structures for
                  reliable web app
                </li>
                <li className="list-disc ml-6">
                  Created effective server-side APIs facilitating smooth
                  communication between front-end and back-end
                </li>
                <li className="list-disc ml-6">
                  Set up and maintained web servers for application
                  dependability and peak performance
                </li>
                <li className="list-disc ml-6">
                  Expert in debugging and diagnosing application failures with a
                  methodological approach
                </li>
                <li className="list-disc ml-6">
                  Collaborated with cross-functional teams including designers
                  and front-end engineers
                </li>
              </ul>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <strong>Freelance Developer</strong>
                (2022 - present)
              </div>
              <ul>
                <li className="list-disc ml-6">
                  Collaborated with diverse clients to deliver custom websites
                  and web applications
                </li>
                <li className="list-disc ml-6">
                  Translated business requirements into functional code and
                  ensured seamless integration with existing systems
                </li>
                <li className="list-disc ml-6">
                  Leveraged expertise in front-end and back-end technologies to
                  create user-friendly applications
                </li>
                <li className="list-disc ml-6">
                  Consistently met project deadlines
                </li>
              </ul>
            </li>
          </ul>

          {/* Technical Skills Section */}
          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Technical Skills
          </h2>

          <ul className="list-disc ml-6 text-md">
            <li>
              <strong>Front-End:</strong> React, Nextjs, Typescript, Javascript,
              CSS, Tailwind, Bootstrap, MUI, HTML.
            </li>
            <li>
              <strong>Back-End:</strong> NodeJs, Javascript, Typescript,
              Express, Python, Django, Prisma ORM.
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Redis, Postgresql.
            </li>
            <li>
              <strong>DevOps:</strong> Git, Github, Docker, AWS.
            </li>
          </ul>
          {/* Projects Section */}
          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Projects
          </h2>

          <ul>
            {/* Songa App Project */}
            <li>
              <strong>Songa App</strong> (
              <Link
                to="https://www.linkedin.com/company/songaapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B1JKUV3VZRuKNgXpz6fLz9g%3D%3D"
                target="__blank"
                className=" text-blue-600"
              >
                View
              </Link>
              )
              <ul>
                <li className="list-disc ml-6">
                  Ride service application built with Node JS, Express,
                  Postgresql, Prisma, and Next JS.
                </li>
                <li className="list-disc ml-6">
                  Allows users to request, get, pay for, and complete rides.
                </li>
              </ul>
            </li>
            {/* E-commerce Site Project */}
            <li>
              <strong>E-commerce Site</strong> (
              <Link to="" className=" text-blue-600">
                View
              </Link>
              )
              <ul>
                <li className="list-disc ml-6">
                  Web application built with React JS, Node JS, Express, and
                  MongoDB.
                </li>
                <li className="list-disc ml-6">
                  Features authentication, product management, inventory checks,
                  and customer purchases.
                </li>
              </ul>
            </li>
          </ul>
          {/* Interests Section */}
          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Interests
          </h2>
          <p className="text-md">
            I am a huge football and basketball fan, also playing both during my
            free time. I also love coding things out for fun.
          </p>
          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Important Links
          </h2>

          <div className=" w-full list-disc ml-6 text-md text-blue-400 flex gap-2 flex-wrap">
            <div className="flex gap-2">
              <Link
                to="www.linkedin.com/in/martin-ndungu-nganga"
                className="flex gap-2"
              >
                LinkedIn{" "}
                <img src={IconsData[2].link} alt="icons" className="h-25 w-6" />
              </Link>
            </div>
            <span className="text-white">||</span>{" "}
            <div className="flex gap-2">
              <Link
                to="https://github.com/martindevelopske"
                className="flex gap-2"
              >
                Github{" "}
                <img src={IconsData[1].link} alt="icons" className="h-25 w-6" />
              </Link>
            </div>
            <span className="text-white">|| </span>
            <div className="flex gap-2">
              <Link to="https://x.com/martindevelops" className="flex gap-2">
                X{" "}
                <img src={IconsData[0].link} alt="icons" className="h-25 w-6" />
              </Link>
              <span className="text-white">(Formerly Twitter)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
