import React from "react";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <div className={`flex justify-between p-6 ${className}`}>
      <div className="flex items-center gap-1 cursor-pointer">
        <div className="bg-red-800 rounded-full size-6" />
        <h1 className="text-primText font-black text-[24px]">Acme Note</h1>
      </div>
      <div className="transition-all active:duration-75  px-5 py-1 bg-white/50 rounded-3xl flex justify-center items-center group hover:bg-white hover:scale-105 cursor-pointer border hover:border-sky-400 active:scale-100 active:opacity-70">
        <p className="transition-all active:duration-75  text-blue-400 group-hover:text-sky-400 select-none">
          Skip
        </p>
      </div>
    </div>
  );
}

export default Header;
