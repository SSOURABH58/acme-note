import Image from "next/image";
import React, { useRef } from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center max-w-2xl py-10 gap-4">
      <div className="flex relative rounded-[32px] justify-center items-center">
        <div className="z-50 shadow-2xl size-[380px] shadow-accentMagenta/50 rounded-[100px] absolute " />
        <Image
          src="/icons/AcmeNoteLogo.png"
          height={400}
          width={400}
          alt="logo"
          className="bg-transparent"
        />
      </div>
      <h1 className="text-textColorLite font-black text-[42px]">Acme Note</h1>
      <p className="text-textColorLite/50  text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
    </div>
  );
}

export default Intro;
