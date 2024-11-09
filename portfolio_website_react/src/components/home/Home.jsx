import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

function About() {
  return (
    <div data-aos="fade-up" id='home' className='flex flex-col md:flex-row items-center md:items-start justify-between md:min-h-[720px] lg:min-h-[600px] md:gap-20 lg:gap-6'>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
    </div>
  )
}

export default About