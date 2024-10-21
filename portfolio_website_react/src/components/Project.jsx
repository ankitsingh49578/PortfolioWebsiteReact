import React from "react";
import ProjectCard from "./ProjectCard";
import PasswordIcon from "@mui/icons-material/Password";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WebIcon from "@mui/icons-material/Web";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Project() {
  return (
    <div
      // data-aos="fade-right"
      id="projects"
      className="text-[#a0a8b3] min-h-[800px] mb-20"
    >
      <div>
        <h1 data-aos="fade-right" className="text-6xl font-semibold mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-16">
          <div data-aos="fade-right">
            <ProjectCard
              logo={
                <PasswordIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></PasswordIcon>
              }
              head="Random Password Generator"
              cont="Created a password generator with customizable length, character types, and strength evaluation."
              anc="https://ankitsingh49578.github.io/Password-Generator/"
              img="./projects/passwordGenerator.png"
            ></ProjectCard>
          </div>

          <div data-aos="fade-right" className="flex flex-row justify-evenly">
            <ProjectCard
              logo={
                <SportsEsportsIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></SportsEsportsIcon>
              }
              head="Simon Says Game"
              cont="Designed and developed a memory game to challenge users with increasingly complex sequences of colors and sounds."
              anc="https://ankitsingh49578.github.io/Simon-Says-Game/index.html"
              img="./projects/simonSays.png"
            ></ProjectCard>
          </div>

          <div data-aos="fade-right">
            <ProjectCard
              logo={
                <WebIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></WebIcon>
              }
              head="Razorpay UI Replica"
              cont="Developed a clone of the Razorpay website using HTML, CSS, and Tailwind CSS as a framework."
              anc="https://razorpay-clone-virid.vercel.app/"
              img="./projects/razorPay.png"
            ></ProjectCard>
          </div>

          <div className="flex flex-row justify-evenly" data-aos="fade-right">
            <ProjectCard
              logo={
                <FormatListBulletedIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></FormatListBulletedIcon>
              }
              head="ToDo List"
              cont="Manage your daily tasks with ease and style. Powered by React and Tailwind CSS for a smooth experience."
              anc="https://to-do-list-sand-mu.vercel.app/"
              img="./projects/toDo.png"
            ></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
