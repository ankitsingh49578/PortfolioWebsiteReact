import React from "react";
// import PasswordIcon from '@mui/icons-material/Password';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GithubBtn from "./GithubBtn";
import LiveLinkBtn from "./LiveLinkBtn";

function ProjectCard({ logo, heading, content, liveLink, githubLink, image }) {
  return (
    <div className="group min-h-[310px] w-fit md:w-[fit] lg:w-[900px] select-none text-center md:hover:skew-y-0 hover:scale-102 transition-all duration-500">
      {" "}
      {/*md:text-left  agr vapas left side karna ho */}
      <div className="absolute min-h-[310px] w-fit md:w-[fit] lg:w-[900px] dark:hidden bg-blue-500 rounded-lg border-white group-hover:blur-lg"></div>
      <div className="relative min-h-[310px] w-fit md:w-[fit] lg:w-[900px] shadow-xl dark:shadow-[#353638] shadow-slate-400 dark:bg-gray-900 bg-slate-50 rounded-lg p-4 md:p-4 md:pl-10">
        {/* <a href={anc} target="_blank"> */}
        <div className="dark:text-slate-300 text-gray-700 md:grid md:grid-cols-2 md:gap-20 transition-all duration-300 place-items-center">
          {/* left section of the project card */}
          <div className="max-w-[400px] lg:w-[419px] mt-0">
            <div className="flex flex-col items-center">
              {logo}
              <h1 className="my-2 text-[26px] font-bold">{heading}</h1>
            </div>
            <p className="text-[17px] text-left">{content}</p>
            <div className="hidden md:flex md:gap-8 md:mt-5">
              <GithubBtn githubLink={githubLink}/>
              <LiveLinkBtn liveLink={liveLink}/>
            </div>
          </div>
          {/* right section of the project card */}
          <div className="hidden md:flex my-auto mx-auto w-[85%] -translate-y-4 md:-translate-y-0 md:w-full">
            <img src={image} alt="img" className="w-full rounded-lg" />
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <div className="relative group my-4 w-full h-40 overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt="Card Image"
                className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 flex flex-row justify-center items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <GithubBtn githubLink={githubLink}/>
                <LiveLinkBtn liveLink={liveLink}/>
              </div>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default ProjectCard;
