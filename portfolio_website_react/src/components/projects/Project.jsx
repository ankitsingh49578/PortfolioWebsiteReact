import React from "react";
import ProjectCard from "./ProjectCard";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from '@mui/icons-material/Home';
import projectContent from "./projectContent";

function Project() {
  const logos = {
    "1": <AddShoppingCartIcon sx={{ fontSize: "55px" }} className="text-[#03c0c6]"></AddShoppingCartIcon>,
    "2": <WebIcon sx={{ fontSize: "55px" }} className="text-[#03c0c6]"></WebIcon>,
    "3": <RestaurantMenuIcon sx={{ fontSize: "55px" }} className="text-[#03c0c6]"></RestaurantMenuIcon>,
    "4": <HomeIcon sx={{ fontSize: "55px" }} className="text-[#03c0c6]"></HomeIcon>,
  }
  return (
    <div
      // data-aos="fade-right"
      id="projects"
      className="text-[#a0a8b3] min-h-[800px] mx-auto mb-20 ml-4 mr-4 md:ml-0 md:mr-0"
    >
      <div>
        <h1 data-aos="fade-up" className="text-center text-6xl font-semibold mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-16">
          {
            projectContent.map((project) => {
              return (
                <div key={project.id} data-aos="fade-up" className={`${project.id % 2 === 0 ? "flex justify-center" : "flex justify-center md:block md:items-start"}`}>
                  <ProjectCard
                    logo={logos[project.id]}
                    head={project.heading}
                    cont={project.content}
                    anc={project.url}
                    img={project.image}
                  ></ProjectCard>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Project;
