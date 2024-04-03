import React from "react";
import NextSliceButton from "./NextSliceButton";

function Slice1() {
  return (
    <div className="flex h-screen snap-start justify-center items-center relative">
      <div className="flex flex-col gap-3">
        <h1
          className="text-primText font-bold text-5xl relative w-[max-content] font-mono  
before:absolute before:inset-0 before:animate-typewriter before:bg-primBg before:h-[110%]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black after:rounded-sm
"
        >
          Man, I lost my 📝 ToDo's again
        </h1>
        <p className="text-primText text-xl opacity-0 ">
          wish some one keep it all organized
        </p>
      </div>
      <NextSliceButton />
    </div>
  );
}

export default Slice1;
