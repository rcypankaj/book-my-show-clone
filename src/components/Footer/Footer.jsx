import React from "react";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import logo from "../../images/book-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-customGray shrink-0 text-center px-4 pt-7 text-gray-300">
      <hr />
      <div className="relative -top-7  z-10">
        <img src={logo} alt="logo" className="w-36 mx-auto bg-customGray" />
      </div>
      <div className="flex justify-center relative -top-5 gap-3">
        <Link to={"https://github.com/rcypankaj"} target="blank">
          <AiOutlineGithub className="text-3xl" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/pankaj-yadav-7a1aa0246/"}
          target="blank"
        >
          <AiFillLinkedin className="text-3xl" />
        </Link>
        <Link to={"https://www.instagram.com/rcypankaj/"} target="blank">
          <AiOutlineInstagram className="text-3xl" />
        </Link>
      </div>
      <div className="relative -top-2">
        Copyright 2023 &copy; Book-Show-Clone. All Rights Reserved.
        <br />
      </div>
    </footer>
  );
};

export default Footer;
