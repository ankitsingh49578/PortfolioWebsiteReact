import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CvButton() {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/1v5NotyZ9JKOD8R9FNI5ZYwTkjfwNhXBJ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex group gap-3 hover:scale-105 transition-all hover:cursor-pointer mt-28 text-[17px] border-2 dark:border-[#03c0c6] w-fit py-2 px-7 text-center font-semibold rounded-full dark:text-black text-white dark:bg-[#03c0c6] dark:hover:text-white bg-blue-500 hover:bg-blue-600 select-none duration-400">
          <span className="text-[18px]">Download CV</span>
          <IoCloudDownloadOutline
            size={25}
            className="m-auto group-hover:rotate-[360deg] duration-500"
          />
        </div>
      </a>
    </div>
  );
}

export default CvButton;
