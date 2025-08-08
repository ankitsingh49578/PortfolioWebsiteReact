import ProjectCard from "./ProjectCard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from "@mui/icons-material/Home";
import projectContent from "./projectContent";
import { GiClothes } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useState } from "react";

function Project() {
  const logos = {
    4: (
      <WebIcon
        sx={{ fontSize: "30px" }}
        className="dark:text-[#03c0c6] text-blue-500"
      ></WebIcon>
    ),
    5: (
      <RestaurantMenuIcon
        sx={{ fontSize: "30px" }}
        className="dark:text-[#03c0c6] text-blue-500"
      ></RestaurantMenuIcon>
    ),
    3: (
      <HomeIcon
        sx={{ fontSize: "30px" }}
        className="dark:text-[#03c0c6] text-blue-500"
      ></HomeIcon>
    ),
    2: (
      <GiClothes
        size="30"
        className="dark:text-[#03c0c6] text-blue-500"
      ></GiClothes>
    ),
    1: (
      <RiMoneyRupeeCircleFill
        size="30"
        className="dark:text-[#03c0c6] text-blue-500"
      ></RiMoneyRupeeCircleFill>
    ),
  };

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };
  return (
    <div
      id="projects"
      className="text-[#a0a8b3] mx-auto mb-20 ml-4 mr-4 md:ml-0 md:mr-0"
    >
      <div className="flex flex-col items-center">
        <h1 data-aos="fade-up"
          className="text-center text-6xl font-semibold dark:text-slate-100 text-black mb-10"
        >
          Projects
        </h1>
        <div className="flex flex-wrap justify-center gap-16">
          {projectContent.slice(0, visibleCount).map((project) => {
            return (
              <div key={project.id}>
                {" "}
                {/*className={`${project.id % 2 === 0 ? "flex justify-center" : "flex justify-center md:block md:items-start"}`} */}
                <ProjectCard
                  id={project.id}
                  logo={logos[project.id]}
                  heading={project.heading}
                  content={project.content}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                  image={project.image}
                ></ProjectCard>
              </div>
            );
          })}
        </div>

        {visibleCount < projectContent.length && (
          <button data-aos="fade-up"
            onClick={handleLoadMore}
            className="mt-6 px-6 py-2 dark:bg-gray-200 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border dark:hover:border-gray-600  bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition items w-fit"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Project;
