import React from 'react'
import HomeImg from '../assets/HomeImg.jpg'

const Home = () => {
  return (
    <section className='flex font-[lato] sm:justify-around sm:flex-row flex-col-reverse p-5 '>
        <div className='mt-28'>
            <h2 className='font-bold sm:text-[20px] text-[15px] mb-3'>Hi , my name is Kunal</h2>
            <h1 className='font-extrabold sm:text-[35px] text-[20px] mb-3 '>I'm a Full MERN stack developer <br /> with excellence in ReactJs and tailwindCss </h1>

            <div className='flex flex-row'>
            <button type="button" class="box mr-5 tracking-wide text-gray-800 text-s font-bold" >My work</button>
            <button type="button" class="box  tracking-wide text-gray-800 text-s font-bold">lets talk</button>
            </div>
    
        </div>
        <div>
            <img src={HomeImg} alt="My Image" className='w-[200px] h-[200px] mt-16 m-auto  rounded-full sm:w-[300px] sm:h-[300px] sm:rounded-full sm:mt-24  circleAnimation' />
        </div>
      
    </section>
  )
}

export default Home
