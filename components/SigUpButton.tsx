import Image from "next/image";
import React from "react";
import LoginBtn from "./LoginBtn";

function SigUpButton() {
  return (
    <div
      id="signUp"
      className="w-7/12 flex flex-col gap-4 justify-center items-center"
    >
      <h1 className="text-textColorLite font-black text-[42px] mb-12">
        Let's Start this Journey
      </h1>
      <LoginBtn title="Google" />
    </div>
  );
}

export default SigUpButton;
