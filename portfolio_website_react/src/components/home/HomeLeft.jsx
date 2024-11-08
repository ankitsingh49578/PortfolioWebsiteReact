import React from "react";
import CvButton from "./CvButton";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function HomeLeft() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Competitive Programmer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 80,
  });
  return (
    <div className="translate-y-[70px] md:translate-y-[130px] flex flex-col md:text-left items-center md:items-start text-center">
      <div className="text-4xl md:text-5xl text-white font-bold">
        <h1 className="mb-6">Hi, I'm Ankit Singh</h1>
        <h1 className="">
          a {}
          <span className="font-bold text-[#03c0c6]">{text}</span>
          <span className="text-red-500">
            <Cursor />
          </span>
        </h1>
      </div>

      <h1 className="translate-y-8 text-[#a0a8b3] text-[18px] max-w-[470px] leading-7">
        I’m a Frontend Developer and Competitive Programmer. This portfolio
        highlights my expertise in crafting seamless user interfaces and solving
        complex problems through competitive programming.
      </h1>

      <div className="translate-y-16">
        <a
          href="https://www.facebook.com/profile.php?id=100016151614009"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-4xl hover:text-white text-[#03c0c6] mr-5 cursor-pointer hover:scale-110 transition-all"
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/ankitsingh49578" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl hover:text-white text-[#03c0c6] mr-5 cursor-pointer hover:scale-110 transition-all"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/mr_singh_ankit/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-4xl hover:text-white text-[#03c0c6] mr-5 cursor-pointer hover:scale-110 transition-all"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-singh-b3660a250/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl hover:text-white text-[#03c0c6] mr-5 cursor-pointer hover:scale-110 transition-all"
          ></FontAwesomeIcon>
        </a>
      </div>

      <CvButton></CvButton>
    </div>
  );
}

export default HomeLeft;
