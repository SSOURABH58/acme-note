import Image from "next/image";
import React from "react";

function AllNotes() {
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className="flex w-full relative justify-center items-center overflow-x-scroll ">
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
        <Image src="/icons/appLogo.svg" width={300} height={300} alt="" />
      </div>
      <p className=" w-7/12 text-textColorLite/50  text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
    </div>
  );
}

export default AllNotes;
