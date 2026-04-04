import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#f9f5ec] py-6 px-2 md:px-6 my-4 lg:px-8 rounded-2xl text-center shadow-lg'>
        <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl">Stay in to know</h1>
        <p className="text-sm mt-4 font-medium text-gray-500 md:text-md lg:text-lg">Subscribe to our blog and get updates on Hritik.blog in your inbox.</p>
        <form className="flex items-center justify-between shadow-lg bg-white mt-4 mx-auto w-full md:max-w-[70%] py-2 px-2 md:px-4 rounded-full ">
            <input type="email" name="email" className="w-[80%] outline-none pl-1 md:pl-2 font-medium text-sm md:text-lg text-black " placeholder='Enter your email here...' required/>
            <button className="bg-black w-[30%] active:bg-gray-700 text-white rounded-full py-3 text-sm md:text-lg font-medium cursor-pointer" type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter