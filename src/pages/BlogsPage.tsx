import { GoArrowUpRight } from "react-icons/go";
import { blogsData } from "../data/blogsData";

function BlogsPage() {
  return (
    <div className="h-auto min-h-screen text-black bg-greyish dark:bg-gradient-to-b from-1e to-black w-full flex flex-col px-10 dark:text-white mt-[100px]">
      <div className="w-3/4 pt-10 mx-auto">
        Welcome to my blog, a space where learning and sharing knowledge go hand
        in hand. As an avid learner who loves to dive deep into new topics
        through blogs, I also enjoy contributing to the community by writing
        articles on Medium. Here, you'll find a blend of insightful articles
        covering technology, web development, backend development, and cloud
        computing, particularly focusing on AWS. Whether you're here to gain new
        insights or share your thoughts, this blog is a place for curious minds
        to connect and grow together. Join me on this journey of discovery and
        let's explore the world of tech, one post at a time. Happy reading!
      </div>
      <div className="flex items-center justify-center gap-10">
        {blogsData.map((item) => {
          const { link, image } = item;
          return (
            <div className="w-[300px] flex flex-col gap-3 mt-20 items-center justify-center">
              <img
                src={image}
                alt="banner"
                className="object-fit  h-[300px] w-[300px] rounded-lg"
              />
              <a
                href={link}
                target="_blank"
                className="mr-5 text-green-600 flex gap-2 hover:scale-105"
              >
                {link && (
                  <div className="flex gap-2">
                    <div>Read Article</div>
                    <div>
                      <GoArrowUpRight />
                    </div>
                  </div>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
