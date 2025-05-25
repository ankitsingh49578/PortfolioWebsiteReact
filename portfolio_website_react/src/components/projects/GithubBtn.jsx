import React from "react";
import { FaGithub } from "react-icons/fa";

function GithubBtn({ githubLink }) {
  return (
    <>
      <a href={githubLink} target="_blank">
        <button className="bg-gray-950 text-white hover:scale-105 dark:bg-white dark:text-black dark:hover:bg-gray-950 dark:hover:text-white flex items-center gap-2 font-medium px-4 py-2 rounded transition-all duration-300">
          <FaGithub />
          Github
        </button>
      </a>
    </>
  );
}

export default GithubBtn;
