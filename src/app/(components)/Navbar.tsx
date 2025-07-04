"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky z-30 top-3 text-[#eef2f0]  dark:text-black max-md:top-0">
      <div
        className="mx-auto max-w-6xl mt-10 dark:bg-white flex content-center justify-center
                        bg-black h-14 rounded-full px-10 opacity-80 max-md:rounded-none max-md:mt-0"
      >
        <nav className="flex flex-wrap content-center justify-between w-full ">
          <Link
            className="text-xl font-medium items-center flex content-center"
            href="/"
          >
            <h1>Korawit Pimyotha</h1>
          </Link>
          <ul className="flex gap-x-1 font-medium py-0.5 max-md:hidden ">
            <li className="px-5 text-lg">
              <Link href="/about">About Me</Link>
            </li>
            <li className="px-5 text-lg">
              <Link href="/experience">Experience</Link>
            </li>
            <li className="px-5 text-lg">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="px-5 text-lg">
              <Link href="/skills">Skills</Link>
            </li>
          </ul>
          <div className="flex justify-end max-md:hidden ">
            <button onClick={() => toggleTheme()}>
              {theme === "dark" ? (
                <>
                  <SunIcon className="h-5 w-5 " />
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5 " />
                </>
              )}
            </button>
          </div>
          <div className="items-center flex ">
            <GiHamburgerMenu className="h-5 w-5 hidden max-md:block " />
          </div>
        </nav>
      </div>
    </header>
  );
};
