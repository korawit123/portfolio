import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaLine } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#333446] py-10 text-white text-xl">
      <div className="flex flex-col items-center mx-auto max-w-6xl gap-y-6">
        <h1 className="text-3xl font-bold text-white ">CONTACT ME</h1>
        <p className=" flex gap-x-10">
          <span className="flex gap-x-1  h-8">
            <MdOutlineAlternateEmail className="my-auto h-5 w-5" />
            <span className="felx content-center">korawitpim123@gmail.com</span>
          </span>
          <span className="flex gap-x-1  h-8">
            <FaPhoneFlip className="my-auto h-5 w-5" />
            <span className="felx content-center"> 0821209959</span>
          </span>
        </p>
        <p className="flex gap-x-3">
          <a href="https://github.com/korawit123">
            <FaGithub className="h-5 w-5 my-auto" />
          </a>
          <a href="https://www.linkedin.com/in/korawit-pimyotha-504156288/">
            <GrLinkedin className="h-5 w-5 my-auto" />
          </a>
          <a href="">
            <FaLine className="h-5 w-5 my-auto" />
          </a>
          <a href="">
            <BsInstagram className="h-5 w-5 my-auto" />
          </a>
          <a href="">
            <FaFacebookMessenger className="h-5 w-5 my-auto" />
          </a>
        </p>
        <p>&copy; korawit</p>
      </div>
    </footer>
  );
};

export default Footer;
