import { IconsData } from "../data/Iconsdata";

export default function Hero() {
  return (
    <div
      id="hero"
      className=" mt-12 flex justify-center items-start bg-slate-200  dark:text-white dark:bg-blackbg w-full p-3 text-black min-content"
    >
      <div className="p-3 flex flex-col items-start justify-between gap-8 h-full">
        <div className="text-2xl text-green-300">Martin Ndung'u</div>

        <div className=" flex flex-col gap-12 h-auto">
          <div className="flex flex-col gap-2 w-3/4 mt-12 text-3xl md:text-5xl h-250 md:h-auto">
            <div>I build</div>
            <div className="text-purple-500">beautiful experiences</div>
            <div>for the web.</div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full gap-5 mt-5">
          <div className="border-b border-purple-200 border-2 mt-12 w-full"></div>
          <div className="w-full flex-col md:flex-row gap-2  h-auto">
            <div className="flex flex-col gap-5 items-start p-3 justify-center md:w-3/4 w-full ">
              <div className="w-full">
                A Full-stack developer and DevOps Engineer based in Nairobi,
                Kenya. I enjoy building and deploying web applications.
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    src="https://res.cloudinary.com/dilbjaf90/image/upload/v1699429991/google-maps_auf3b8.png"
                    className="w-6 h-25"
                    alt="location"
                  />
                </div>
                <div className="font-extralight text-sm">Nairobi, Kenya</div>
              </div>
              <div>
                <button className="border p-2 hover:scale-90 text-green-400">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-sm items-start justify-center md:w-3/4 w-full mt-8  h-full">
              <div className="font-light opacity-60 w-full p-3 text-lg">
                Checkout some of my awesome works on github. Also let's interact
                on my socials and checkout my resume on Linked in.
              </div>
              <div className="flex gap-3 items-center justify-center p-3">
                {IconsData.map((image) => {
                  return (
                    <a href={image.href} target="__blank" key={image.id}>
                      <img
                        src={image.link}
                        alt={image.name}
                        className="md:w-9 md:h-36 rounded-lg h-25 w-6"
                      ></img>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
