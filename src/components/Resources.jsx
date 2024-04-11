import React from 'react'
import jscript from '../assets/javascript.png'
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'

const Resources = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden">
        <div class="px-6 py-10">
          <div class="mx-auto max-w-5xl text-center">
            <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">
              Resources
            </h2>
            <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              No idea exactly what is supposed to go on in this place
            </p>
          </div>
          <div class="px-7 mx-auto grid sm:grid-cols-1 gap-6">
            <div class="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1">
              <a href="https://www.w3schools.com/js/" class="group h-48 col-span-3 md:h-80">
                <img src={jscript} class="h-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" alt=''></img>
              </a>
              <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
                <h2 class="text-gray-200 font-bold text-xl leading-10">
                  JavaScript Tutorial
                </h2>
                <p class="text-gray-400">
                  A w3schools JavaScript tutorial for beginners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden">
        <div class="px-6 py-10">
          <div class="mx-auto max-w-5xl text-center">
            <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">
              Developer Setup
            </h2>
            <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Most used tools to code during my years working
            </p>
          </div>

          <div class="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 class="text-xl italic text-gray-200">
                IDEs
              </h3>
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                IntelliJ IDEA and VsCode
              </p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 class="text-xl italic text-gray-200">
                Databases
              </h3>
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                PostgreSQL and ORACLE SQL
              </p>
            </div>
            <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 class="text-xl italic text-gray-200">
                User Interfaces
              </h3>
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                PrimeNG, Bootstrap
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Resources