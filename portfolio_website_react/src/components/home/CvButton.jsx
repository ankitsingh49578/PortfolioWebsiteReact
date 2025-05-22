import React from "react";

function CvButton() {
  return (
    <div className="hover:scale-105 transition-all hover:cursor-pointer mt-28 text-[17px] border-2 dark:border-[#03c0c6] p-3 w-[210px] text-center font-semibold rounded-xl dark:text-black text-white dark:bg-[#03c0c6] dark:hover:text-white bg-blue-500 hover:bg-blue-600 select-none duration-400">
      <a
        href="https://drive.google.com/file/d/1unkaheJhWgGzOL5ukW-3Z4Qb51LlNPfb/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default CvButton;
