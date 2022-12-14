import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { TiContacts } from "react-icons/ti";

const Contact = () => {
  return (
    <section className='mt-16'>
      <h1 className='font-extrabold text-[35px] mb-12 font-[lato] ml-32'>Contact me</h1>

      <div className='flex justify-around pl-32 pr-20'>

      <div className='mt-20'>
          
          <div className='mb-20'>
            <ul>
              <li className='flex items-center text-2xl mb-4'><CgProfile className='m-1' />
                <h2 className=' font-bold font-[lato] text-[19px]'>
                  Name: kunal yadav
                </h2></li>
              <li className='flex items-center text-2xl mb-3'><TiContacts className='m-1' />
                <h2 className=' font-bold font-[lato] text-[19px]'>
                  Address: Mohali, punjab(140301)
                </h2></li>
              <li className='flex items-center text-2xl'><AiOutlineMail className='m-1' />
                <h2 className=' font-bold font-[lato] text-[19px]'>
                  Email: kunalyadav1601@gmail.com
                </h2></li>
            </ul>
          </div>

          <div>
            
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span><i class="fab fa-facebook-f"></i></span>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span><i class="fab fa-twitter"></i></span>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span><i class="fab fa-instagram"></i></span>
              </li>
              <li class="icon github">
                <span class="tooltip">Github</span>
                <span><i class="fab fa-github"></i></span>
              </li>
              <li class="icon youtube">
                <span class="tooltip">Youtube</span>
                <span><i class="fab fa-youtube"></i></span>
              </li>
            </ul>
          </div>
        </div>


        <div className='flex flex-col'>
        {/* <h1 className='font-extrabold text-[26px] font-[lato] m-auto mb-10'>Get in touch</h1> */}
          <form action="" className='ml-32'>

            <div className='flex flex-row justify-evenly'>
              <div>
                <label htmlFor="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> FIRST NAME:</label>
                <input type="text" className="w-[90%] appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Kunal' />
              </div>

              <div>
                <label htmlFor="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> LAST NAME:</label>
                <input type="text" className=" w-[90%] ml-6 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Yadav' />
              </div>
            </div>

            <label htmlFor="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> EMAIL:</label>
            <input type="text" className=" w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Anything@gmail.com' />


            <label htmlFor="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> PHONE NO:</label>
            <input type="text" className=" w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='eg: 9729146466' />


            <label htmlFor="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> MESSAGE:</label>
            <input type="text" className="w-full h-24 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Say what's in your heart." />
          </form>
        </div>

       
      </div>

    </section>
  )
}

export default Contact
