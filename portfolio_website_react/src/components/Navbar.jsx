// import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {

  const [isOpen, setisOpen] = useState(true);

  return (
    <div>
      <div data-aos="fade-right" className="flex flex-col md:flex-row text-xl justify-between translate-y-10 md:pl-8 md:pr-8 md:pt-7 left-0 right-0">
        <div className="flex flex-row justify-between pr-7 pl-4 place-items-center">
          <span className='flex flex-row gap-2 pt-6 pl-4 md:pl-0 md:pt-0 h-[70px] md:h-fit'>
            <img
              src="./ankitFevicon.jpg"
              alt="img"
              height="45px"
              width="45px"
              className="rounded-full border-gray-400 border-[2px] p-0.5 -translate-y-[8px]"
              loading="lazy"
            />
            <h1 className="text-[#a0a8b3] hover:cursor-pointer font-serif text-[22px]">Ankit Singh</h1>   
          </span>
          <span name="menu" onClick={()=>setisOpen(!isOpen)} className='text-[#a0a8b3] cursor-pointer md:hidden'>
            {
              isOpen ? <MenuIcon></MenuIcon> : <CloseIcon></CloseIcon>
            }
          </span>
        </div>

        <div className={`bg-[#212428] md:w-fit w-full md:pl-0 pl-9 -mb-24 -mt-2 md:mt-0 pt-5 md:pt-0 left-0 z-100 md:z-auto transition-all ease-in duration-500 ${isOpen ? 'hidden md:block' : 'block'}`}>
          <ul className="text-[#a0a8b3] flex flex-col justify-self-center md:flex-row md:gap-10 lg:gap-12 gap-6 md:pr-8 lg:pr-16 text-[22px]">
              <div className='flex flex-col group hover:cursor-pointer transition-all'>
                <li className="group-hover:text-[#03c0c6] font-serif"><HomeOutlinedIcon className='-translate-y-[1px] -mr-[5px]'></HomeOutlinedIcon> <a href="#home">Home</a> </li>
                <div className='h-[2px] w-[81px] ml-1 group-hover:bg-[#03c0c6]'></div>
              </div>
              <div className='flex flex-col group hover:cursor-pointer transition-all'>
                <li className="group-hover:text-[#03c0c6] font-serif"><NotesOutlinedIcon className='-translate-y-[1px] mr-[2px]'></NotesOutlinedIcon><a href="#projects">Projects</a></li>
                <div className='h-[2px] w-[101px] ml-1 group-hover:bg-[#03c0c6]'></div>
              </div>
              <div className='flex flex-col group hover:cursor-pointer transition-all'>  
                <li className="group-hover:text-[#03c0c6] font-serif"><PsychologyOutlinedIcon className='-translate-y-[1px] mr-[2px]'></PsychologyOutlinedIcon><a href="#skills">Skills</a></li>
                <div className='h-[2px] w-[77px] ml-1 group-hover:bg-[#03c0c6]'></div>
              </div>
              <div className='flex flex-col group hover:cursor-pointer transition-all'>
                <li className="group-hover:text-[#03c0c6] font-serif"><ChatBubbleOutlineOutlinedIcon className='-translate-y-[1px] mr-[2px]'></ChatBubbleOutlineOutlinedIcon><a href="#contact">Contact</a></li>
                <div className='h-[2px] w-[102px] group-hover:bg-[#03c0c6]'></div>
              </div>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
