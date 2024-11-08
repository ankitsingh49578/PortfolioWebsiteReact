import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div data-aos="fade-right" id='skills' className='min-h-[700px] ml-4 mr-4 md:ml-0 md:mr-0'>
        <h1 className='text-6xl text-[#a0a8b3] font-semibold mb-16'>Skills</h1>
        <div className='place-items-center flex flex-row flex-wrap md:gap-x-28 gap-x-14 md:gap-y-32 gap-y-14 lg:mx-36 mx-auto justify-center'>
            <SkillCard src="./skills/html.png" name="Html"/>
            <SkillCard src="./skills/css.png" name="CSS"/>
            <SkillCard src="./skills/javascript.png" name="JavaScript"/>
            <SkillCard src="./skills/tailwindcss.png" name="TailwindCss"/>
            <SkillCard src="./skills/react.png" name="React.Js"/>
            <SkillCard src="./skills/cpp.png" name="C++"/>
            <SkillCard src="./skills/python.png" name="Python"/>
            <SkillCard src="./skills/github.png" name="Github"/>
        </div>
    </div>
  )
}

export default Skills