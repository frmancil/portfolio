import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import notebookM from '../assets/notebookM.png'


const Home = () => {
  return (
    <div class="relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 overflow-hidden h-[92v]">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl gray-primary-color">
                    Francisco's Personal Page
                </h1>

                <p class="mt-5 text-base text-white sm:text-xl">
                    Feel free to check my projects and social networks
                </p>

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

export default Home