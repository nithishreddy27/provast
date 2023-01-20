import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function studentdetails() {
  return (
    <>
      <Head>
        <title>provast work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div class="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10">
            <div class="my-6 flex justify-between items-center">
              <div class="">
                <span class="text-xs font-semibold">Signed In As : </span>
                <span class="text-sm font-bold text-gray-600"></span>
              </div>
              <button class="font-semibold text-orange-600 text-sm underline hover:text-orange-800">
                <a href="#">Logout</a>
              </button>
            </div>
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 class="mt-2 text-center text-3xl font-bold text-gray-900">
                Fill in your details
              </h2>
            </div>
            <form>
            <div class="mt-4">
                <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="chooseone"
                      value="student"
                      class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      
                    />
                    <label
                      for="student"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      student
                    </label>
                 </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      id="college"
                      name="chooseone"
                      value="college"
                      class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                    />
                    <label
                      for="college"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      college
                    </label>
                  </div>
                </div>
            </div>
            <div class="col-span-6 sm:col-span-4 mt-4">
                <div class="flex">
                  <label for="paraphase" class="block text-sm font-medium text-gray-700">
                    Paraphase
                  </label>
                  <span class="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div class="flex items-center">
                  <input type="text" name="rollnumber" id="rollnumber" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"/>
                  <div>
                    <button
                      type="button"
                      class="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                      Verify
                    </button>
                  </div>
                </div>
                <p class="mt-1 text-xs text-gray-500" id="pharaphase-description">
                  Enter a passphrase that associates with your college placement
                  cell.
                </p>
              </div>
            <div class="grid grid-cols-6 gap-6 mt-4">
                <div class="col-span-6 sm:col-span-2 ">
                    <div class="flex">
                    <label for="firstName" class="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required/>
                </div>
                <div class="col-span-6 sm:col-span-2 ">
                  <div class="flex">
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    required/>
                    </div>
                    <div class="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    class="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span class="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                  <div class="relative -top-[23px] left-0">
                  <select name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                  </div>

                </div>
            </div>
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="rollnumber"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Roll Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="rollnumber"
                    id="rollnumber"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required
                  />
                </div>
              </div>
              <div class="relative">
                <div class="flex">
                  <label class="mt-4 mb-2 block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <span class="relative top-4 ml-1 text-red-600 font-semibold">
                    *
                  </span>
                </div>
                <div class="relative">
                  <input
                    type="text"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="designation"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Designation
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="designation"
                    name="designation"
                    type="text"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      College Website
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="website"
                    name="website"
                    type="text"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Placement Email address
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Placement Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Principal Email address
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Principal Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 ">
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
      </main>
    </>
  )
}