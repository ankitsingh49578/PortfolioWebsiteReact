import React from "react";
import GithubBtn from "./GithubBtn";
import LiveLinkBtn from "./LiveLinkBtn";

function ProjectCard2({
  id,
  logo,
  heading,
  content,
  liveLink,
  githubLink,
  image,
}) {
  return (
    <>
      <div
        data-aos={id%2 === 0 ? "fade-left" : "fade-right"}
        className="flex flex-col dark:bg-gray-900 bg-white rounded-2xl overflow-hidden shadow-lg max-w-md md:max-w-sm w-full h-full group"
      >
        {/* Image Container */}
        <div className="relative w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            src={image}
            alt="img"
          />
          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex justify-center items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <GithubBtn githubLink={githubLink} />
            <LiveLinkBtn liveLink={liveLink} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow px-4 pb-6 pt-3 text-left">
          <div className="flex gap-2 mb-2">
            <div className="my-auto">{logo}</div>
            <h2 className="text-2xl font-semibold dark:text-white text-gray-700">
              {heading}
            </h2>
          </div>
          <p className="dark:text-gray-400 text-gray-600 flex-grow">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard2;
