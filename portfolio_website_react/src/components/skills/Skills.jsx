import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { MdDisplaySettings } from "react-icons/md";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

function Skills() {
  const [toggle, setToggle] = useState("Frontend");

  const frontend = [
    {
      id: 1,
      src: "./skills/html.png",
      name: "Html",
    },
    {
      id: 2,
      src: "./skills/css.png",
      name: "CSS",
    },
    {
      id: 3,
      src: "./skills/javascript.png",
      name: "JavaScript",
    },
    {
      id: 4,
      src: "./skills/tailwindcss.png",
      name: "TailwindCss",
    },
    {
      id: 5,
      src: "./skills/react.png",
      name: "ReactJs",
    },
    {
      id: 6,
      src: "./skills/nextjs.png",
      name: "NextJs",
    },
    {
      id: 15,
      src: "./skills/git.png",
      name: "Git",
    },
    {
      id: 9,
      src: "./skills/github.png",
      name: "Github",
    },
    {
      id: 10,
      src: "./skills/bootstrap.png",
      name: "Bootstrap",
    },
  ];
  const backend = [
    {
      id: 7,
      src: "./skills/cpp.png",
      name: "C++",
    },
    {
      id: 8,
      src: "./skills/python.png",
      name: "Python",
    },
    {
      id: 11,
      src: "./skills/nodejs.png",
      name: "Node.Js",
    },
    {
      id: 13,
      src: "./skills/expressjs.png",
      name: "Express.Js",
    },
    {
      id: 12,
      src: "./skills/mongodb.png",
      name: "MongoDB",
    },
    {
      id: 14,
      src: "./skills/mysql.png",
      name: "MySQL",
    },
  ];

  return (
    <div className="max-w-96 sm:max-w-lg md:max-w-5xl mx-auto">
      <h1
        data-aos="fade-right"
        className="text-6xl text-center dark:text-[#a0a8b3] font-semibold mb-8"
      >
        Skills
      </h1>

      <div
        data-aos="fade-left"
        className="flex justify-center items-center dark:bg-gray-950 bg-gray-200 p-4 mb-10"
      >
        <div className="dark:bg-gray-900 bg-gray-200 shadow-lg rounded-xl">
          <div className="flex">
            <button
              onClick={() => setToggle("Frontend")}
              className={`${
                toggle === "Frontend"
                  ? "dark:bg-gray-900 bg-blue-500 text-white"
                  : "bg-gray-200 text-black hover:scale-105 transition-all duration-400"
              } rounded-l-xl w-full px-4 py-3 focus:outline-none flex items-center gap-2`}
            >
              <BsNewspaper />
              Frontend
            </button>
            <button
              onClick={() => setToggle("Backend")}
              className={`${
                toggle === "Backend"
                  ? "dark:bg-gray-900 bg-blue-500 text-white"
                  : "bg-gray-200 text-black hover:scale-105 transition-all duration-400"
              } rounded-r-xl w-full px-4 py-3 focus:outline-none flex items-center gap-2`}
            >
              <MdDisplaySettings />
              Backend
            </button>
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div
        className={`relative flex gap-10 overflow-hidden py-4 dark:bg-gray-950 bg-slate-200 ${
          toggle === "Frontend" ? "block" : "hidden"
        }`}
      >
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Cards repeated twice to create infinite loop */}
          {frontend.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                src={skill.src}
                name={skill.name}
              ></SkillCard>
            );
          })}
        </motion.div>
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Cards repeated twice to create infinite loop */}
          {frontend.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                src={skill.src}
                name={skill.name}
              ></SkillCard>
            );
          })}
        </motion.div>
      </div>

      {/* Backend */}
      <div
        className={`relative flex gap-10 overflow-hidden py-4 dark:bg-gray-950 bg-slate-200 ${
          toggle === "Backend" ? "block" : "hidden"
        }`}
      >
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Cards repeated twice to create infinite loop */}
          {backend.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                src={skill.src}
                name={skill.name}
              ></SkillCard>
            );
          })}
        </motion.div>
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Cards repeated twice to create infinite loop */}
          {backend.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                src={skill.src}
                name={skill.name}
              ></SkillCard>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
