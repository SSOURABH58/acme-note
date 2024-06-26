"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Preview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  return (
    <div className="w-7/12 max-sm:w-10/12 flex flex-col gap-4">
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          scale: -scrollYProgress,
        }}
        className="flex w-full aspect-video relative justify-center items-center mb-10"
      >
        <Image
          src="/images/notesBackgrund.png"
          fill
          alt=""
          className="rounded-xl "
        />
        <motion.div
          style={{
            scale: scale,
          }}
          className="w-3/5 aspect-[4/5] relative"
        >
          <Image src="/images/appSS.png" fill alt="" />
        </motion.div>
      </motion.div>
      <motion.p className="text-textColorLite/50  text-[16px] text-center tran transition-opacity duration-300 ease-in-out">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </motion.p>
    </div>
  );
}

export default Preview;
