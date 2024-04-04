"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AIOrigination() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.4 1"],
  });

  const right = useTransform(scrollYProgress, [0, 1], [-150, 10]);
  const left = useTransform(scrollYProgress, [0, 1], [150, -10]);

  return (
    <motion.div ref={ref} className="w-7/12 flex flex-col gap-8">
      <div className="flex w-full relative justify-center items-center ">
        <motion.div style={{ translateX: right }}>
          <Image src="/images/cpu.png" width={300} height={300} alt="" />
        </motion.div>
        <motion.div style={{ translateX: left }}>
          <Image src="/images/notes.png" width={300} height={300} alt="" />
        </motion.div>
      </div>
      <p className="text-textColorLite/50  text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
    </motion.div>
  );
}

export default AIOrigination;
