// import Header from "../components/Header";

import { Link } from "react-router-dom";
import Header from "../components/Header";

// function Resume() {
//   return (
//     <>
//       <div className="flex flex-col items-center text-black dark:text-white bg-blackbg w-full h-auto min-h-screen">
//         <div>
//           <Header />
//         </div>
//         <div className="w-5/6 mt-12 flex flex-col items-center justify-center md:w-5/6 lg:w-3/4 border h-500">
//           <div className="border w-full h-auto">
//             <div>
//               <div>Martin Ndung'u</div>
//               <div>
//                 Full stack developer and DevOps Engineer || Nairobi, Kenya ||
//                 phone: +2354703605544 || Portfolio
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Resume;
// Resume.js

const Resume = () => {
  return (
    <div className="w-full sm:text-sm md:text-base h-auto min-h-screen bg-blackbg flex flex-col items-center justify-center font-mono dark:text-white">
      <div className="w-5/6">
        <Header />
      </div>
      <div className="w-full md:w-5/6 lg:w-3/4 mt-14">
        <div className="max-w-2xl mx-auto p-4 bg-blackbg light:text-black dark:text-white rounded-md shadow">
          <div className="max-w-2xl mx-auto mt-10 p-4 rounded-md shadow text-center">
            <h1 className="text-base font-bold mb-4 text-green-400">
              Martin Ndung'u - Full Stack Developer & DevOps Engineer
            </h1>
            <div className="max-w-2xl mx-auto p-2 w-full md:w-3/4 rounded-md shadow text-center text-sm md:text-base">
              <p className="font-bold mb-4">
                Nairobi, Kenya || phone: +254703605544 ||
                <Link to="" className="text-blue-400">
                  {" "}
                  martindevelopske@gmail.com
                </Link>
              </p>
              {/* ... (rest of your content) */}
            </div>
          </div>

          <p className="text-md font-mono">
            I am a passionate and experienced full-stack developer and junior
            DevOps engineer with a proven track record of designing, developing,
            and deploying high-quality web applications. I possess a deep
            understanding of both front-end and back-end technologies, enabling
            me to create seamless user experiences and robust server-side
            architectures. As a driven and flexible junior DevOps engineer, I
            provide a strong background in development and operations along with
            a love of learning. Having worked on web application design,
            development, and deployment projects, I'm eager to use my expertise
            to further the DevOps field. I'm well-suited to adopt new
            technologies and approaches because of my curiosity and want to
            learn, which allows me to actively participate in creating and
            improving reliable and effective systems. To get the best outcomes,
            I'm dedicated to learning more, working with cross-functional teams,
            and promoting ongoing DevOps practice improvement.
          </p>

          {/* Add more sections as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-400">
            Experience
          </h2>

          <div className="text-md">
            <div className="flex justify-between">
              <strong className="text-red-400">
                Songa: Back-end Engineer (
                <Link to="" className=" text-blue-600">
                  LinkedIn
                </Link>
                )
              </strong>
              Jan 2023 - Sep 2023
            </div>
            <br />
            As a Back-end Developer at Songa, a dynamic ride service app, I'm
            responsible for designing and developing the robust server-side
            components that drive the platform's ride booking and management
            functionalities. Collaborating closely with front end developers and
            cross- functional teams, I ensure a seamless and reliable user
            experience by designing efficient APIs, optimizing database
            interactions, and implementing real-time tracking features. Within
            an Agile environment, I contribute to enhancing the app's
            scalability, security, and overall performance, delivering an
            exceptional and safe ride-hailing experience to users
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

          <h2 className="text-base font-bold mt-4 mb-2 text-green-400">
            Technical Skills
          </h2>

          <ul className="list-disc ml-6 text-md">
            <li>
              Front-End: React, Nextjs, Typescript, Javascript, CSS, Tailwind,
              Bootstrap, MUI, HTML.
            </li>
            <li>
              Back-End: NodeJs, Javascript, Typescript, Express, Prisma ORM.
            </li>
            <li>Databases: MongoDB, Redis, Postgresql.</li>
            <li>Devops: Git, Jenkins, Docker, Kubernetes, Terraform, AWS.</li>
          </ul>

          {/* Add more sections as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-400">
            Projects
          </h2>

          <p className="text-md">
            <strong className="text-red-400">Songa App (view)</strong>
            <br />
            Songa is a ride service application which bridges the gap between
            riders in Kenya and their clients. At songa, I worked as a back-end
            engineer where I, together with a team of other developers
            collaborated in developing the API that is consumed by the
            application. We mostly used Typescript, Node js, express,
            geolocations API, postgreSQL and prisma ORM in this application. At
            songa, I learnt so much from working with teams to developing such a
            very complex API which can have very many users consuming it at a
            given moment.
          </p>
          <br />
          <p className="text-md">
            <strong className="text-red-400">Quick-sale (view)</strong>
            <br />
            This is a project that I received from a Client who basically wanted
            an e-commerce shop with all the functionalities involved. The
            application was built with a node js back end and a react front-end.
            The user was able to sign-up and login, search for specific
            products, make an order, make payments for the product and also
            complete checkout. They also received notifications after actions
            like purchases and new items in stock that they are interested in.
            The owner also had and admin dashboard of their own where they were
            able to post new products, track their items in stock, see purchases
            made and orders made and also approve orders. This was a very big
            project that I was so happy to complete and the client walked away
            happy and completely satisfied.
          </p>
          <br />
          <div className="text-md">
            You can take a look at more projects on my portfolio.{" "}
            <Link to="" className="text-blue-400">
              Projects
            </Link>
          </div>
          {/* Add more project entries as needed */}

          <h2 className="text-base font-bold mt-4 mb-2 text-green-400">
            Interests
          </h2>

          <p className="text-md">
            I am a huge football and basketball fan, also playing both during my
            free time. I also love coding things out for fun.
          </p>

          <h2 className="text-base font-bold mt-4 mb-2 text-green-400">
            Important Links
          </h2>

          <ul className="list-disc ml-6 text-md text-blue-400">
            <li>
              <Link to="">LinkedIn</Link> <span className="text-white">||</span>{" "}
              <Link to="">Github</Link> <span className="text-white">|| </span>{" "}
              <Link to="">X </Link>
              <span className="text-white">(Formerly Twitter)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
