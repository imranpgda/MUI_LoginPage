import React from "react";
import AuthLight from "./assets/AuthLight.png";
import AuthMan from "./assets/AuthMan.png";
import Tree from "./assets/Tree.png";
import LoginDes from "./LoginDes";

function page1() {
  return (
    <div className="w-screen h-screen bg-zinc-100 relative overflow-hidden ">
      {/* ////////NAVBAR */}
      <div className="w-screen h-4rem font-medium text-center flex justify-start px-5">
        <span className="text-[35px] px-4 py-2 font-mono ">Materio</span>
      </div>

      <LoginDes />

      {/* ////////IMAGE SECTION   */}
      <img
        className="h-[600px] w-auto z-100 absolute z-50 mx-[180px] my-9 "
        src={AuthMan}
        alt="Main Error"
      />
      <img
        className="h-[350px] w-screen absolute bottom-0   "
        src={AuthLight}
        alt=" LIGHT ERROR"
      />
      <img
        className="h-auto w-auto absolute bottom-0  "
        src={Tree}
        alt="TREE ERROR"
      />
    </div>
  );
}

export default page1;
