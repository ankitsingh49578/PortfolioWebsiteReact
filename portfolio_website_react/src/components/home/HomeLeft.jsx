import React from "react";
import CvButton from "./CvButton";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HomeLeft() {
  const [text] = useTypewriter({
    words: ["FullStack Developer", "Competitive Programmer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 80,
  });
  return (
    <div data-aos="fade-right">
      <div className="translate-y-[70px] md:translate-y-[130px] flex flex-col md:text-left items-center md:items-start text-center">
        <div className="text-4xl md:text-5xl dark:text-white text-gray-800 font-bold">
          <h1 className="mb-6">Hi, I'm Ankit Singh</h1>
          <h1 className="">
            a {}
            <span className="font-bold dark:text-[#06bdc3] text-blue-500">
              {text}
            </span>
            <span className="text-red-500">
              <Cursor />
            </span>
          </h1>
        </div>

        <h1 className="translate-y-8 dark:text-[#a0a8b3] text-[18px] max-w-[470px] leading-7">
          I’m a Full Stack Developer and Competitive Programmer. This portfolio
          highlights my expertise in crafting seamless user interfaces and
          solving complex problems through competitive programming.
        </h1>

        <div className="translate-y-16 flex flex-row gap-8">
          <a href="https://leetcode.com/u/ankitsingh49578/" target="_blank">
            <img
              src="../Buttons/leetcodeIcon.png"
              alt="leetcode.png"
              className="dark:hover:bg-white dark:bg-[#03c0c6] rounded-full p-3 dark:border-none border border-gray-400 cursor-pointer hover:scale-110 transition-all h-12 w-12 hover:rotate-[360deg] duration-700"
            />
          </a>
          <a href="https://github.com/ankitsingh49578" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-5xl dark:hover:text-white dark:text-[#03c0c6] cursor-pointer hover:scale-110 transition-all hover:rotate-[360deg] duration-700"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-singh-b3660a250/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-5xl dark:hover:text-white dark:text-[#03c0c6] text-blue-500 cursor-pointer hover:scale-110 transition-all hover:rotate-[360deg] duration-700"
            ></FontAwesomeIcon>
          </a>
        </div>

        <CvButton></CvButton>
      </div>
    </div>
  );
}

export default HomeLeft;
