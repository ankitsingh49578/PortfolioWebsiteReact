import React from "react";
// import PasswordIcon from '@mui/icons-material/Password';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ProjectCard({ logo, head, cont, anc, img }) {
  return (
    <div className="group min-h-[310px] w-fit md:w-[fit] lg:w-[900px] select-none text-center md:hover:skew-y-0 hover:scale-95 transition-all duration-500">
      {" "}
      {/*md:text-left  agr vapas left side karna ho */}
      <div className="absolute min-h-[310px] w-fit md:w-[fit] lg:w-[900px] dark:hidden bg-blue-500 rounded-lg border-white group-hover:blur-lg"></div>
      <div className="relative min-h-[310px] w-fit md:w-[fit] lg:w-[900px] shadow-xl dark:shadow-[#353638] shadow-slate-400 dark:bg-gray-900 bg-slate-50 rounded-lg p-3 md:p-8">
        <a href={anc} target="_blank">
          <div className="dark:text-slate-300 text-gray-700 md:grid md:grid-cols-2 md:gap-20 cursor-pointer transition-all duration-300">
            {/* left section of the project card */}
            <div className="max-w-[400px] lg:w-[419px] mt-3">
              <div className="flex flex-col items-center">
                {logo}
                <h1 className="my-2 text-[26px] font-bold">{head}</h1>
              </div>
              <p className="text-[17px] text-left">{cont}</p>
              <ArrowForwardIcon
                className="mt-6 invisible md:group-hover:visible dark:text-[#03c0c6] text-blue-500"
                sx={{ fontSize: "30px" }}
              ></ArrowForwardIcon>
            </div>
            {/* right section of the project card */}
            <div className="my-auto mx-auto w-[85%] -translate-y-4 md:-translate-y-0 md:w-full flex justify-center md:block">
              <img
                src={img}
                alt="img"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
