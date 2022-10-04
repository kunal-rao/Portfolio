import React from 'react'
import { SiReact , SiTailwindcss , SiJavascript} from "react-icons/si";

const Skills = () => {
  return (
    <section className='mt-28'>
      <h1 className='font-extrabold text-[35px] mb-12 font-[lato] ml-32' >Framesworks I use</h1>
      <div className='flex justify-around ml-32 mr-32'>
        <div className='p-5'>
          <SiReact className='h-10 w-10 mb-4 text-[#61DAFB]'/>
          <h1 className='font-bold text-[20px] mb-3'>ReactJs</h1>
          <p className='font-[poppins]'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
          Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='p-5'>
          <SiTailwindcss className='text-[#38BDF8] h-10 w-10 mb-4'/>
          <h1 className='font-bold text-[20px] mb-3'>TailwindCss</h1>
          <p className='font-[poppins]'>Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap. Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
        </div>
        <div className='p-5'>
          <SiJavascript className='text-[#F7DF1E] h-10 w-10 mb-4'/>
          <h1 className='font-bold text-[20px] mb-3'>Javascript</h1>
          <p className='font-[poppins]'>JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies of. Lorem ipsum dolor sit amet. </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
