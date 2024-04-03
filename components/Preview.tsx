import Image from "next/image";
import React from "react";

function Preview() {
  return (
    <div className="w-7/12 flex flex-col gap-4">
      <div className="flex w-full aspect-video relative justify-center items-center mb-40">
        <Image
          src="/images/notesBackgrund.png"
          fill
          alt=""
          className="rounded-xl "
        />
        <div className="w-3/5 aspect-[4/5] relative">
          <Image src="/images/appSS.png" fill alt="" />
        </div>
      </div>
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

export default Preview;
