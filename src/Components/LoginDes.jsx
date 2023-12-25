import React from "react";
import ContDev from "./ContDev";
import './assets/extra.css'

function LoginDes() {
  return (
    <div>
      {/* ////// LOGIN CONTENT SECTION */}
      <div className=" h-full w-[500px] bg-white absolute top-0 right-0 z-30 px-[40px] py-[120px] ">
        <span className="font-bold text-[35px]">Welcome to Materio! </span>
        <br />
        <span className="font-medium text-[15px]">
          Please sign-in to your account and start the adventure
        </span>

        {/* //////////INPUT SECTION */}
        <div className=" relative flex flex-col items-center gap-[20px] mt-[10%] px-10 py-10 h-[70%] w-[90%] border-2 border-black rounded-[10px]">
        <input
            className="px-3 py-2 w-[100%] border-2 border-black rounded-[10px] peer"
            type="email"
          />
          <span className="bg-white px-1 rounded-[8px] absolute left-14 top-[15%] peer-focus:-translate-y-7 transition-all duration-300 ">Email</span>
          
          <input
            className="px-3 py-2 w-[100%] border-2 border-black rounded-[10px] peer"
            type="password"
          />
          <span className="bg-white px-1 rounded-[8px] absolute left-14 top-[33%] peer-focus:-translate-y-7 transition-all duration-300 ">Password</span>
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-2 flex text-center items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 w-[50%] transition-all "
          >
            Sign in
          </button>
        </div>
        {/* /////DEVELOPER CONTACT BTNS */}
        <ContDev />
      </div>
    </div>
  );
}

export default LoginDes;
