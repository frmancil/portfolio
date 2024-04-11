import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-[1500px] h-[8vh]'>
        <div class="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

                <div class="text-white text-xl sm:text-2xl">
                    <a className='font-bold'><span>Francisco's Page</span></a>
                </div>

                <ul class="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
                   <li className='p-2'><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
                   <li className='p-2'><NavLink to="/about" activeClassName="text-black">Skills</NavLink></li>
                   <li className='p-2'><NavLink to="/work" activeClassName="text-black">Work</NavLink></li>
                   <li className='p-2'><NavLink to="/resources" activeClassName="text-black">Resources</NavLink></li> 
                </ul>


                <div onClick={handleNav} className='block md:hidden text-white z-40'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

        </div>
    </div>
  )
}

export default Navbar