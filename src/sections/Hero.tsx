import { IconsData } from "../data/Iconsdata";

export default function Hero() {
  return (
    <div className="mt-12 flex justify-center items-center bg-lightgray  dark:text-white dark:bg-black w-full p-3 h-700 text-black">
      <div className="flex flex-col w-5/6 h-600 p-2 justify-between">
        <div className="text-2xl text-green-300">Martin Ndung'u</div>
        <div className="flex flex-col gap-2">
          <div className="text-5xl">I build</div>
          <div className="text-5xl text-purple-500">beautiful experiences</div>
          <div className="text-5xl">for the web.</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b border-purple-200 border-2"></div>
          <div className="flex justify-between items-top">
            <div className="flex flex-col gap-4 items-start justify-center p-3 w-1/2">
              <div className=" w-full">
                A Full-stack developer and DevOps Engineer based in Nairobi,
                Kenya. I enjoy building and deploying web applications.
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    src="https://res.cloudinary.com/dilbjaf90/image/upload/v1699429991/google-maps_auf3b8.png"
                    className="w-9 h-35"
                    alt="location"
                  />
                </div>
                <div className="font-extralight text-sm">Nairobi, Kenya</div>
              </div>
              <div>
                <button className="border p-2 hover:scale-90">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-1/3 text-sm  items-center justify-center p-3">
              <div className="font-light opacity-60">
                Checkout some of my awesome works on github. Also let's interact
                on my socials and checkout my resume on Linked in.
              </div>
              <div className="flex gap-3 items-center justify-center">
                {IconsData.map((image) => {
                  return (
                    <a href={image.href} target="__blank" key={image.id}>
                      <img
                        src={image.link}
                        alt={image.name}
                        className="w-9 h-36 rounded-lg"
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
