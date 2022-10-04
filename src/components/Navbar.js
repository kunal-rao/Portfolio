import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineIdcard } from "react-icons/ai";
import { BiMenuAltRight } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GrProjects } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import { SiReact } from "react-icons/si";
import hrline from '../assets/hrline.png'
import logoImg from '../assets/logoImg.png'
// import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [slide, setSlide] = useState(false)
  return (

    <nav className='  w-[100%] h-[70px]'>
      <img src={logoImg} alt="logo" className='w-30 h-12 absolute top-2 left-5' />
      <div className=''>
      <ul className='sm:flex flex-row absolute right-16 text-xl hidden font-[poppins] font-semibold'>
        <li className='nav-items flex nav-items:hover'>
          <CgProfile className='m-1'/>
          <p>About me</p>
        </li>
        <li className='nav-items  flex'>
          <GrProjects className='m-1'/>
          <p>Projects</p>
          </li>
        <li className='nav-items  flex'>
          <SiReact className='m-1'/>
          <p>Skills</p>
        </li>
        <li className='nav-items  flex'>
          <TiContacts className='m-1'/>
          <p>Contact Me</p>
        </li>
      </ul>
      </div>
      

      <div className='sm:hidden flex flex-1 '>

        <button className='text-4xl rounded-full w-10 h-10 z-20  absolute right-3 top-1'
          onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <AiOutlineCloseCircle /> : <BiMenuAltRight />}
        </button>


        <div className={`${toggle ? 'flex' : 'hidden '}
      
         black-glass-gradient absolute z-10 w-[40%] h-[20%]   
        rounded-m; 
      p-6  top-5 right-3 mx-4 my-2 min-w-[140px] rounded-xl 
        sidebar
        `}>

          <ul className='flex flex-col text-m  font-poppins  '>
            <li className='nav-items-m'>About me</li>
            <li className='nav-items-m'>Projects</li>
            <li className='nav-items-m'>Skills</li>
            <li className='nav-items-m'>Contact Me</li>
          </ul>
        </div>
      </div>
      {/* <img src={hrline} alt="hr-line" className=' m-auto    w-[100%] absolute mt-12 h-10' /> */}
    </nav>



  )
}

export default Navbar