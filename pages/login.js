import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <>
    <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
    <div className='relative login z-40'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto mt-28'>
    <form   className="bg-white shadow-md rounded-lg px-12 pt-20 pb-12 mb-4 sm:mx-auto sm:w-full">
    {/* <div className='sm:mx-auto sm:w-full sm:max-w-md'> */}

   <h1 className="text-center font-bold text-2xl text-black">Sign up to your account</h1>
            <div className="mb-4 mt-10">
      <label className="block text-gray-700 text-sm mb-2 font-semibold" htmlFor="username">
        Email address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 " id="username" name="email" type="email"/>
    </div>
    <div className="">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 focus:border-2" id="password" name='password' type="password"/>
    </div>
   
    <div className="flex gap-20 mt-3   ">
          <div className="text-sm mt-1 hover:underline underline-offset-1">
             <Link href="skt/registration">Are you a new user? </Link>
          </div>
          <div className="text-sm mt-1 text-orange-600 hover:text-orange-500">
             <Link href="/forgot">Forgot your password?</Link>
          </div>
          </div>
    <p id="mess"></p>
    <div className='text-center mt-5'>
      <input type="submit" value="Login"  className='bg-orange-600 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-orange-700'/>
            
    </div>
  </form>
  </div>
  </div>
  </>
  )
}

