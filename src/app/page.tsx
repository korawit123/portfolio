import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  const name: string = "const person = ( ditital, expert ) => (korn)";
  return (
    <main className="mx-auto max-w-6xl min-h-[90vh] ">
      <div className="mx-10">
        <div className="flex justify-around mt-15">
          <div className=" top-20 left-10">
            <h1 className="text-xl font-medium text-[#1d3557]  dark:text-[#EAECEB] ">
              {name}
            </h1>
            <h1 className="text-8xl font-bold max-w-xl  text-[#464646] dark:text-[#888889] mb-15">
              Who is The next expert of software
            </h1>
          </div>
          <div className=" right-3 top-20">
            <Image
              className=""
              src="/mancoding2.png"
              alt=""
              width="400"
              height="0"
            ></Image>
          </div>
        </div>
        <p className="text-xl font-medium px-12">
          Enjoy building and optimizing software applications, always on the
          lookout for new programming languages and techniques to learn, waiting
          for the great opportunity from you.
        </p>
        <div className="flex">
          <button
            className="after:bg-black btn btn-border-reveal w-auto px-10 ml-12 py-2 
                                relative border-[2px] border-solid bg-transparent
                              hover:text-white dark:hover:border-gray-800  hover:border-black
                              text-black dark:text-white mt-3 mr-7 "
          >
            <a
              href="https://github.com/korawit123"
              target="_blank"
              className="flex content-center gap-x-2"
            >
              <FaGithub className="h-4 w-4 my-auto" />
              <p>GitHub</p>
            </a>
          </button>
          <button
            className="after:bg-[#0077b5] btn btn-border-reveal w-auto px-10  py-2
                          relative border-[2px] border-solid bg-transparent
                        hover:text-white  hover:border-[#0077b5]  text-black dark:text-white mt-3 "
          >
            <a
              href="https://www.linkedin.com/in/korawit-pimyotha-504156288/"
              target="_blank"
              className="flex content-center gap-x-2 "
            >
              <p>LinkedIn</p>
              <FaExternalLinkAlt className="h-4 w-4 my-auto" />
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
