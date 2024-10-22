import React from 'react'

function Skills() {
  return (
    <div data-aos="fade-right" id='skills' className='min-h-[575px] ml-4 mr-4 md:ml-0 md:mr-0'>
        <h1 className='text-6xl text-[#a0a8b3] font-semibold mb-16'>Skills</h1>
        <div className='md:grid md:grid-cols-2 gap-3'>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>HTML</p>
                <div className='flex flex-row'>
                    <img src="./skills/html.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-[1px] border-white border-opacity-20 rounded-lg shadow-slate-400'>
                        <div className='bg-[#03c0c6] w-[85%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            85%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>CSS</p>
                <div className='flex flex-row'>
                    <img src="./skills/css.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[80%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            80%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>JAVASCRIPT</p>
                <div className='flex flex-row'>
                    <img src="./skills/javascript.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[80%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            70%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>TAILWINDCSS</p>
                <div className='flex flex-row'>
                    <img src="./skills/tailwindcss.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[75%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            75%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>REACTJS</p>
                <div className='flex flex-row'>
                    <img src="./skills/react.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[75%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            75%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>CPP</p>
                <div className='flex flex-row'>
                    <img src="./skills/cpp.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[85%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            85%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>PYTHON</p>
                <div className='flex flex-row'>
                    <img src="./skills/python.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[65%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            65%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='ml-16 mb-4 text-[#a0a8b3] font-bold'>GITHUB</p>
                <div className='flex flex-row'>
                    <img src="./skills/github.png" alt="" height="50px" width="50px" className='-translate-y-3 mr-4'/>
                    <div className='h-[25px] w-[500px] border-white border-opacity-20 border-2 rounded-lg'>
                        <div className='bg-[#03c0c6] w-[70%] h-full bg-opacity-70 rounded-lg text-white flex justify-end opacity-90'>
                            70%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills