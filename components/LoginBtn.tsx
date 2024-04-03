import Image from "next/image";
import React from "react";

interface LoginBtnProps {
  title?: string;
  logo?: string;
}
function LoginBtn({ title = "Sign Up", logo = "" }: LoginBtnProps) {
  return (
    <div className="flex gap-2 bg-white rounded-3xl w-[300px] items-center justify-center py-2">
      {!!logo && <Image src={logo} alt="logo" width={30} height={30} />}
      <p className="text-black font-bold text-[24px]">{title}</p>
    </div>
  );
}

export default LoginBtn;
