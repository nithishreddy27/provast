import Link from "next/link";
export default function signUp() {
  return (
    <div className="">
      <div className="">
        <img
          className="w-screen h-screen absolute"
          src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
          alt=""
        />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg w-1/4 p-16 relative bg-white">
          <h1 className="mt-2 font-semibold text-2xl text-center">
            Sign up your account
          </h1>
          <div className="mt-10">
            <h1>EmailAddress</h1>
            <input
              type="text"
              class="py-2 w-full border border-solid rounded-lg border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-orange-500"
              placeholder=""
            />
          </div>
          <div className="mt-2">
            <h1>Password</h1>
            <input
              type="password"
              class="py-2 w-full border border-solid rounded-lg border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-orange-500"
              placeholder=""
            />
          </div>
          <div className="mt-2">
            <h1> Repeat Password</h1>
            <input
              type="password"
              className="py-2 w-full mb-2 border border-solid  rounded-lg border-gray-300 transition ease-in-out   focus:outline-orange-500"
              placeholder=""
            />
          </div>
          <p className="text-sm mt-1">
            Already a user? <Link href="skt/registration">login </Link>
          </p>
          <div className="mt-2">
            <button
              type="submit"
              className=" bg-orange-500 text-white  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700  ease-in-out w-full py-2 mt-2"
            >
              <Link href="/details">Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
