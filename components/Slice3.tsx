import React from "react";
import NextSliceButton from "./NextSliceButton";
import Image from "next/image";

function Slice3() {
  return (
    <div
      id={"3"}
      className="flex h-screen snap-start justify-center items-center relative bg-[#B8B5FF]"
    >
      <div className="flex flex-col gap-3">
        <h1
          className="text-primText font-bold text-5xl relative w-[max-content] font-mono  
before:absolute before:inset-0 before:animate-typewriter before:bg-primBg before:h-[110%]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black after:rounded-sm
"
        >
          Lets Get Organized ; )
        </h1>
        <div className="px-24 flex flex-col mt-8 gap-4">
          <div className="flex bg-white px-6 py-3 rounded-3xl justify-center items-center  gap-3">
            <Image src="/search.png" width={30} height={30} alt="google" />
            <p className="text-primText text-[18px] font-bold">
              Sign Up with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slice3;
