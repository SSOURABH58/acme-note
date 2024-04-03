import Image from "next/image";
import React from "react";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <div
      className={`flex justify-between bg-gradient-to-b from-black to-transparent p-6 px-14 ${className}`}
    >
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/icons/AcmeNoteLogo.png"
          width={30}
          height={30}
          alt="logo"
        />
        <h1 className="text-textColorLite font-black text-[24px]">Acme Note</h1>
      </div>
      <a
        href="#signUp"
        className="transition-all active:duration-75  px-5 py-1  rounded-3xl border border-transparent flex justify-center items-center group hover:scale-105 cursor-pointer  hover:border-accentBlue active:scale-100 active:opacity-70"
      >
        <p className="transition-all active:duration-75  text-accentBlue select-none">
          Skip
        </p>
      </a>
    </div>
  );
}

export default Header;
