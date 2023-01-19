import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function sakshi() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              
              <h2 class="text-center text-2xl font-bold text-gray-900">
                Sign up to your account
              </h2>
            </div>
            <form class="space-y-5 mt-8 ">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="username"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    fdprocessedid="zz2q9o"
                  />
                </div>
              </div>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    fdprocessedid="ei01nl"
                  />
                </div>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    id="confirm-password"
                    name="rpassword"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    fdprocessedid="h9sjiud"
                  />
                </div>
              </div>
              <div class="text-sm">
                <span>Already a user? </span>
                <a
                  class="hover:text-gray-900 hover:underline"
                  href="/auth/login"
                >
                  Log in
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  fdprocessedid="aqzbpypj"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
