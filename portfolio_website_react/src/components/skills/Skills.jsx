import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  const skills = [
    {
      id: 1,
      src: "./skills/html.png",
      name: "Html"
    },
    {
      id: 2,
      src: "./skills/css.png",
      name: "CSS"
    },
    {
      id: 3,
      src: "./skills/javascript.png",
      name: "JavaScript"
    },
    {
      id: 4,
      src: "./skills/tailwindcss.png",
      name: "TailwindCss"
    },
    {
      id: 5,
      src: "./skills/react.png",
      name: "ReactJs"
    },
    {
      id: 6,
      src: "./skills/cpp.png",
      name: "C++"
    },
    {
      id: 7,
      src: "./skills/python.png",
      name: "Python"
    },
    {
      id: 8,
      src: "./skills/github.png",
      name: "Github"
    },
    {
      id: 9,
      src: "./skills/bootstrap.png",
      name: "Bootstrap"
    },
    {
      id: 10,
      src: "./skills/nodejs.png",
      name: "Node.Js"
    },
    {
      id: 11,
      src: "./skills/mongodb.png",
      name: "MongoDB"
    },
    {
      id: 12,
      src: "./skills/expressjs.png",
      name: "Express.Js"
    },
    {
      id: 13,
      src: "./skills/ejs.png",
      name: "EJS"
    },
    {
      id: 14,
      src: "./skills/mysql.png",
      name: "MySQL" 
    },
    {
      id: 15,
      src: "./skills/git.png",
      name: "Git"
    }
  ]
  return (
    <div data-aos="fade-up" id='skills' className='min-h-[700px] ml-4 mr-4 md:ml-0 md:mr-0'>
        <h1 className='text-6xl text-center text-[#a0a8b3] font-semibold mb-16'>Skills</h1>
        <div className='place-items-center flex flex-row flex-wrap md:gap-x-28 gap-x-14 md:gap-y-32 gap-y-14 lg:mx-36 mx-auto justify-center'>
            {
              skills.map((skill)=>{
                return(
                  <SkillCard key={skill.id} src={skill.src} name={skill.name}></SkillCard>
                )
              })
            }
        </div>
    </div>
  )
}

export default Skills