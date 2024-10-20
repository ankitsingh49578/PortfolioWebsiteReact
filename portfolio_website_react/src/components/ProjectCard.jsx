import React from 'react'
// import PasswordIcon from '@mui/icons-material/Password';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProjectCard({ logo, head, cont, anc, img }) {
  return (
    <div className='group min-h-[310px] w-fit md:w-[fit] lg:w-[900px] select-none text-center'>     {/*md:text-left  agr vapas left side karna ho */}
        <div className='absolute min-h-[310px] w-fit md:w-[fit] lg:w-[900px] bg-[#03c0c6] rounded-lg border-white group-hover:blur-lg'>
        </div>
        <div className='relative min-h-[310px] w-fit md:w-[fit] lg:w-[900px] shadow-xl shadow-[#353638] bg-[#212428] rounded-lg p-3 md:p-8'>
          <a href={anc} target='_blank'>
            <div className='md:grid md:grid-cols-2 md:gap-20 cursor-pointer group-hover:-translate-y-4 transition-all duration-300'>
                {/* left section of the project card */}
                <div className='max-w-[400px] lg:w-[419px] mt-3'>
                  {logo}
                  <h1 className='my-2 text-[26px] font-bold'>{head}</h1>
                  <p className='text-[17px] '>{cont}</p>
                  <ArrowForwardIcon className='mt-6 invisible group-hover:visible text-[#03c0c6]' sx={{fontSize: '30px'}}></ArrowForwardIcon>
                </div>
                {/* right section of the project card */}
                <div className='my-auto mx-auto w-[85%] -translate-y-4 md:-translate-y-0 md:w-full flex justify-center md:block'>
                  <img src={img} alt="img" height="350px" width="350px" className='rounded-3xl'/>
                </div>
            </div>
          </a>
        </div>
    </div>
  )
}

export default ProjectCard