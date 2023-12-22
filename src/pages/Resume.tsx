// import Header from "../components/Header";

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
          <div className="max-w-2xl mx-auto mt-10 p-4 rounded-md text-center">
            <h1 className="text-base font-bold mb-4 text-green-600">
              Martin Ndung'u - Full Stack Developer & DevOps Engineer
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
              {/* ... (rest of your content) */}
            </div>
          </div>

          <p className="text-md font-mono">
            I have extensive experience developing and executing top-notch web
            apps as a seasoned full-stack developer. With a strong background in
            server-side architecture and seamless user experiences, I am
            proficient in both front-end and back-end technologies. I am
            committed to providing creative solutions and keeping up with the
            most recent business trends in order to effectively contribute to
            any development project. I have a track record of success in this
            regard.
          </p>

          {/* Add more sections as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Experience
          </h2>

          <div className="text-md">
            <div className="flex justify-between">
              <strong className="text-red-400">
                Songa: Back-end Engineer (
                <Link
                  to="https://www.linkedin.com/company/songaapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B1JKUV3VZRuKNgXpz6fLz9g%3D%3D"
                  target="__blank"
                  className=" text-blue-600"
                >
                  LinkedIn
                </Link>
                )
              </strong>
              Jan 2023 - Sep 2023
            </div>
            <br />
            As a full-stack developer, I was able to effectively establish
            server-side logic and database structures, which helped build
            reliable apps. Furthermore, I was an expert in creating effective
            server-side APIs that enabled smooth communication between the
            front-end and back-end parts. I set up and maintained web servers to
            guarantee application dependability and peak performance. When
            problems occurred, I was excellent at debugging and diagnosing
            application failures, using a methodical manner to quickly fix
            problems. My job was centered around collaboration; to create new
            and well-coordinated solutions, I worked closely with designers,
            product managers, and other engineers in cross-functional teams.
          </div>
          <br />
          <div className="text-md">
            <div className="flex justify-between items-center">
              <strong className="text-red-400">Freelance Developer</strong>
              2022 - present
            </div>
            <br />
            As a freelance developer, I successfully collaborated with diverse
            clients to deliver custom websites and web application solutions
            tailored to their specific needs. I leveraged my expertise in
            front-end and back-end technologies to create user-friendly and
            efficient applications that met client expectations. My work
            involved translating business requirements into functional code,
            ensuring seamless integration with existing systems, and
            consistently meeting project deadlines.
          </div>

          {/* Add more experience entries as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Technical Skills
          </h2>

          <ul className="list-disc ml-6 text-md">
            <li>
              <strong>Front-end:</strong> React, Nextjs, Typescript, Javascript,
              CSS, Tailwind, Bootstrap, MUI, HTML.
            </li>
            <li>
              <strong>Back-end:</strong> NodeJs, Javascript, Typescript,
              Express, Prisma ORM.
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Redis, Postgresql.
            </li>
            <li>
              <strong>DevOps:</strong> Git, Jenkins, Docker, Kubernetes,
              Terraform, AWS.
            </li>
          </ul>

          {/* Add more sections as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-600">
            Projects
          </h2>

          <p className="text-md">
            <strong className="text-red-400">
              Songa App{" "}
              <Link
                to="https://www.linkedin.com/company/songaapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B1JKUV3VZRuKNgXpz6fLz9g%3D%3D"
                target="__blank"
                className=" text-blue-600"
              >
                (View)
              </Link>
            </strong>
            <br />
            Songa is a ride service application which bridges the gap between
            riders in Kenya and their clients. Built with Node JS, express,
            postgresql, prisma and Next js. Allows users to request for rides,
            get rides, pay for rides and complete rides.
          </p>
          <br />
          <p className="text-md">
            <strong className="text-red-400">
              Quick-sale{" "}
              <Link to="" className=" text-blue-600">
                (View)
              </Link>
            </strong>
            <br />
            An E-commerce web application built with React JS, node JS,express,
            and mongoDB. This allows users to authenticate, add products, check
            inventory and also customers to make purchases.
          </p>
          <br />
          <div className="text-md">
            You can take a look at more projects on my portfolio.{" "}
            <Link to="/projects" className="text-blue-400">
              Projects
            </Link>
          </div>
          {/* Add more project entries as needed */}

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
