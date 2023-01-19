
import Link from "next/link";
export default function signUp() {

  return (
   <div className="container">
      <img 
      className="z-0"
      src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png" alt=""  />  

    <div className="rounded-lg w-[450px] h-96  border-4 border-black ml-96  bg-slate-100 absolute z-40">
    <h1 className="ml-32 mt-2 font-semibold text-2xl ">Sighn up your account</h1>
      <div className="mt-10 ml-5">
      <h1>EmailAddress</h1>
    <input
              type="text"
              class="py-2  border border-solid rounded-lg w-4/5 border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-orange-500"
              placeholder=""
            />
</div>
<div className="mt-2 ml-5">
      <h1>Password</h1>
    <input
              type="password"
              class="py-2  border border-solid rounded-lg w-4/5 border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-orange-500"
              placeholder=""
            />
</div>
<div className="mt-2 ml-5">
      <h1> Repeat Password</h1>
    <input
              type="password"
              class="py-2  border border-solid  rounded-lg w-4/5 border-gray-300 transition ease-in-out   focus:outline-orange-500"
              placeholder=""
            />
</div>
<p className="ml-5 text-sm mt-1">Already a user? <Link href="skt/registration">login </Link></p>
<div className="mt-2">
<button
            type="submit"
            class=" bg-orange-500 text-white  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700  ease-in-out w-96 py-1 mt-2 ml-4"
          >
            Sign in
          </button>
</div>
    </div>
   </div>
  
  );
}