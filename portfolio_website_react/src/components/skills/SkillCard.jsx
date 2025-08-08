import React from 'react'

function SkillCard({src, name}) {
  return (
    <div>
        <div className='md:h-[170px] h-[100px] md:w-[150px] w-[100px] border border-transparent rounded-lg dark:bg-slate-800 bg-slate-300 place-items-center p-3 md:p-4 hover:scale-90 hover:skew-y-[22deg] transition-all duration-700'>
            <img src={src} alt="html.jpg" className='h-[45px] md:h-[90px]'/>
            <h1 className='dark:text-white text-gray-700 mt-3 text-sm md:text-xl font-semibold'>{name}</h1>
        </div>
    </div>
  )
}

export default SkillCard