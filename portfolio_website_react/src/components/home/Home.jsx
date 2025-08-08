import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

function About() {
  return (
    <div id='home' className='flex flex-col md:flex-row md:justify-center md:items-start justify-between items-center md:min-h-[720px] lg:min-h-[600px] md:gap-60'>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
    </div>
  )
}

export default About