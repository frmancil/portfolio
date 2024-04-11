import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'

const Work = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 h-[92vh] '>
        <div class="px-7 mx-auto grid sm:grid-cols-2 gap-6">
            <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
                <a href="https://github.com/frmancil/simple_store" class="group h-48 col-span-3 md:h-80">
                    <img src={proj1} class="h-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" alt=''></img>
                </a>
                <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
                    <h2 class="text-gray-200 font-bold text-xl leading-10">
                        Simple Store (Ruby)
                    </h2>
                    <p class="text-gray-400">
                        A simple store created with Ruby on Rails.
                    </p>
                </div>
                <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
                    <AiFillGithub className='w-[25px] h-auto' />
                    <AiFillChrome className='w-[25px] h-auto' />
                </div>
            </div>
            <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
                <a href="https://github.com/frmancil/poke_api" class="group h-48 col-span-3 md:h-80">
                    <img src={proj2} class="h-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" alt=''></img>
                </a>
                <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
                    <h2 class="text-gray-200 font-bold text-xl leading-10">
                        Poke-API (Ruby)
                    </h2>
                    <p class="text-gray-400">
                        A website that fetch and shows data from pokemon api.
                    </p>
                </div>
                <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
                    <AiFillGithub className='w-[25px] h-auto' />
                    <AiFillChrome className='w-[25px] h-auto' />
                </div>
            </div>
            <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
                <a href="https://github.com/frmancil/gameopedia" class="group h-48 col-span-3 md:h-80">
                    <img src={proj3} class="h-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" alt=''></img>
                </a>
                <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
                    <h2 class="text-gray-200 font-bold text-xl leading-10">
                        Gameopedia (PHP)
                    </h2>
                    <p class="text-gray-400">
                        A website created as a catalog of varied videogames frmo all ages.
                    </p>
                </div>
                <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
                    <AiFillGithub className='w-[25px] h-auto' />
                    <AiFillChrome className='w-[25px] h-auto' />
                </div>
            </div>
            <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
                <a href="https://github.com/frmancil/portfolio" class="group h-48 col-span-3 md:h-80">
                    <img src={proj4} class="h-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" alt=''></img>
                </a>
                <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
                    <h2 class="text-gray-200 font-bold text-xl leading-10">
                        Portfolio (React)
                    </h2>
                    <p class="text-gray-400">
                        This same page (kind of inception)
                    </p>
                </div>
                <div class="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
                    <AiFillGithub className='w-[25px] h-auto' />
                    <AiFillChrome className='w-[25px] h-auto' />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work