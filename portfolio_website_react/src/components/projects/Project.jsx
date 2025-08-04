import ProjectCard from "./ProjectCard";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from '@mui/icons-material/Home';
import projectContent from "./projectContent";
import { GiClothes } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

function Project() {
  const logos = {
    "1": <WebIcon sx={{ fontSize: "55px" }} className="dark:text-[#03c0c6] text-blue-500"></WebIcon>,
    "2": <RestaurantMenuIcon sx={{ fontSize: "55px" }} className="dark:text-[#03c0c6] text-blue-500"></RestaurantMenuIcon>,
    "3": <HomeIcon sx={{ fontSize: "55px" }} className="dark:text-[#03c0c6] text-blue-500"></HomeIcon>,
    "4": <GiClothes size="55" className="dark:text-[#03c0c6] text-blue-500"></GiClothes>,
    "5": <RiMoneyRupeeCircleFill size="55" className="dark:text-[#03c0c6] text-blue-500"></RiMoneyRupeeCircleFill>,
  }
  return (
    <div
      // data-aos="fade-right"
      id="projects"
      className="text-[#a0a8b3] min-h-[800px] mx-auto mb-20 ml-4 mr-4 md:ml-0 md:mr-0"
    >
      <div>
        <h1 data-aos="fade-up" className="text-center text-6xl font-semibold dark:text-slate-100 text-black mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-16">
          {
            projectContent.map((project) => {
              return (
                <div key={project.id} data-aos="fade-up" className={`${project.id % 2 === 0 ? "flex justify-center" : "flex justify-center md:block md:items-start"}`}>
                  <ProjectCard
                    logo={logos[project.id]}
                    heading={project.heading}
                    content={project.content}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                    image={project.image}
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
