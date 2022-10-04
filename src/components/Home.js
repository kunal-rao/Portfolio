import React from 'react'
import HomeImg from '../assets/HomeImg.jpg'

const Home = () => {
  return (
    <section className='flex font-[lato] justify-around'>
        <div className='mt-28'>
            <h2 className='font-bold text-[20px] mb-3'>Hi , my name is Kunal</h2>
            <h1 className='font-extrabold text-[35px] mb-3 '>I'm a Full MERN stack developer <br /> with excellence in ReactJs and tailwindCss </h1>
            
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mb-2">Blue</button>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Lime</button>
    
        </div>
        <div>
            <img src={HomeImg} alt="My Image" className='w-[400px] h-[300px] rounded-xl mt-24 '/>
        </div>
      
    </section>
  )
}

export default Home
