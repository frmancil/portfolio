import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import profilepic from '../assets/profilepicB.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'


const Hero = () => {
  return (
    <div class="relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 overflow-hidden h-[92v]">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl gray-primary-color">
                    I will solve your frontend
                </h1>

                <p class="mt-5 text-base text-white sm:text-xl">
                    Don't hesitate to contact me!
                </p>

                <div>
                    <a href="#" title='' class="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role='button'>
                        CV
                    </a>
                    <a href="#" title='' class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role='button'>
                        View Work
                    </a>
                </div>

            </div>
        </div>

        <div class="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
            <a href="https://www.linkedin.com/in/francisco-mancilla-rojas-4b559067/?locale=en_US" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className='w-[70px] h-auto'/></a>
            <a href="https://github.com/frmancil?tab=repositories" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[70px] h-auto'/></a>
        </div>

        <div class="relative bottom-0 z-10 flex mx-auto justify-center">
            <img class="left-[-20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute block w-auto h-[-150px] sm:h-[190px]" src={notebookM} alt=''></img>
        </div>

    </div>


  )
}

export default Hero