import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="w-7/12 flex flex-col gap-4">
      <p className="text-textColorLite/50  text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
      <div className="flex w-full relative justify-center items-center flex-wrap gap-6">
        <div className="border-[4px] rounded-2xl border-accentSky px-4 py-2">
          <p>st sdfd</p>
        </div>
        <div className="border-[4px] rounded-2xl border-accentSky px-4 py-2">
          <p>st sdfd</p>
        </div>
        <div className="border-[4px] rounded-2xl border-accentSky px-4 py-2">
          <p>st sdfd</p>
        </div>
        <div className="border-[4px] rounded-2xl border-accentSky px-4 py-2">
          <p>st sdfd</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
