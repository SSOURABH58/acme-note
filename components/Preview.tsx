"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Preview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  return (
    <div className="w-7/12 flex flex-col gap-4">
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          scale: -scrollYProgress,
        }}
        className="flex w-full aspect-video relative justify-center items-center "
      >
        <Image
          src="/images/notesBackgrund.png"
          fill
          alt=""
          className="rounded-xl "
        />
        <motion.div
          style={{
            scale: scrollYProgress,
          }}
          className="w-3/5 aspect-[4/5] relative"
        >
          <Image src="/images/appSS.png" fill alt="" />
        </motion.div>
      </motion.div>
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
