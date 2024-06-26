import React from 'react'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
        <div class="py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl">
            <div class="p-7 mx-auto">
                <div>
                    <h2 class="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">
                        Hello, I'm Francisco
                    </h2>
                    <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                        I'm a computer science graduate with ten years of experience working in diverse software development projects in my country.
                    </p>
                </div>
                <img class="flex md:absolute mx-auto bottom-[-30%] right-[-1%] w-[240px] md:w-[200px] h-auto" src={mobile} alt=''></img>
            </div>

        </div>

        <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class="px-6 py-10">
                <div class="mx-auto max-w-5xl text-center">
                    <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">
                        Skills
                    </h2>
                    <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        During the last years I've been working in several different project where I've gathered this skills and more...
                    </p>
                </div>

            <div class="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                    <h3 class="text-xl italic text-gray-200">
                        Software Development
                    </h3>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Frontend and Backend development, using languages like Typescript with Angular, and JAVA.
                    </p>
                </div>
                <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                    <h3 class="text-xl italic text-gray-200">
                        Agile Development
                    </h3>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Agile Methodologies to coordinate and work in different projects. Methodologies like Scrum and Spotify, with tools like Jira
                    </p>
                </div>
                <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                    <h3 class="text-xl italic text-gray-200">
                        Team Leader
                    </h3>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        Team management and coordination, using tools like Aha and Workday.
                    </p>
                </div>
            
            </div> 

            </div>
        </div>

    </div>
  )
}

export default About