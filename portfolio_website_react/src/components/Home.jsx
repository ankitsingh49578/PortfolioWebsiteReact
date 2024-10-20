import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

function About() {
  return (
    <div data-aos="fade-right" id='home' className='flex flex-col md:flex-row items-center md:items-start justify-between min-h-[630px] md:gap-16 lg:gap-6'>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
    </div>
  )
}

export default About