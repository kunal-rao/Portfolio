import React from 'react'
import HomeImg from '../assets/HomeImg.jpg'
import strapyCollage from '../assets/strapy-collage.png'
import hoobankCollage from '../assets/hoobank-collage.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Projects = () => {
  return (
    <section className='mt-16'>
      <h1 className='font-extrabold text-[35px] mb-12 font-[lato] ml-32'>Latest projects</h1>

      <div className='flex mb-14'>
        <div className='ml-32 w-[50%] '>
          <h2 className='font-extrabold text-[26px] font-[lato]
          mb-3'>Strapy app, online chart and client based web application</h2>
          <p className='font-bold text-[20px] font-[lato] mb-5'>React js, Tailwind</p>
          <p className='font-[poppins] mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci cupiditate itaque quisquam, facere ipsam aliquid autem enim, doloribus sed quas porro nesciunt doloremque eveniet totam fugiat repudiandae illum pariatur quam? Nam hic quis cumque praesentium quibusdam veniam accusantium quae.
          </p>
          <h3 className=' font-bold font-[lato] text-[19px]'>Visit strapy.com</h3></div>

        <div>
          <img src={strapyCollage} alt="Project image" className='w-[500px] h-[500px]  ml-10 imgAnimation:hover imgAnimation' />
        </div>

      </div>
      <div className='flex mt-14'>
        <div className='ml-32 w-[50%] '>
          <h2 className='font-extrabold text-[26px] font-[lato]
          mb-3'>Lyrics , Online music streaming webapp with shazam support.</h2>
          <p className='font-bold text-[20px] font-[lato] mb-5'>React js, Tailwind</p>
          <p className='font-[poppins] mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci cupiditate itaque quisquam, facere ipsam aliquid autem enim, doloribus sed quas porro nesciunt doloremque eveniet totam fugiat repudiandae illum pariatur quam? Nam hic quis cumque praesentium quibusdam veniam accusantium quae.
          </p>
          <h3 className=' font-bold font-[lato] text-[19px]'>Visit Lyrics.com</h3></div>

        <div>
          <img src={hoobankCollage} alt="Project image" className='w-[500px] h-[500px]  ml-10 imgAnimation imgAnimation:hover' />
        </div>

      </div>

      <div className=' flex mt-14'>
        <button className='flex noselect moreProjects moreProjects:hover moreProjects:focus m-auto items-center justify-center'>More Projects <BsFillArrowRightCircleFill className='m-2 text-2xl'/> </button>
      </div>

    </section>
  )
}

export default Projects