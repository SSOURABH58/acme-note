"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });

  const right = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const left = useTransform(scrollYProgress, [0, 1], [150, 0]);
  return (
    <motion.div ref={ref} className="w-7/12 flex flex-col gap-4">
      <p className="text-textColorLite/50  text-[16px] text-center">
        Acme Note is a note-taking app that helps you to take notes, organize
        them, and keep them safe. With Acme Note, you can easily create new
        notes, categorize them using tags, and search for specific notes using
        keywords. The app also provides a rich text editor that allows you to
        format your notes with headings, lists, and other styling options.
      </p>
      <div className="flex w-full relative justify-center items-center flex-wrap gap-6">
        <motion.div
          style={{ translateX: right }}
          className="border-[4px] rounded-2xl border-accentSky px-4 py-2"
        >
          <p>🤖 AI Optimization</p>
        </motion.div>
        <motion.div
          style={{ translateX: right }}
          className="border-[4px] rounded-2xl border-accentPink px-4 py-2"
        >
          <p>☁︎ Cloud Storage</p>
        </motion.div>
        <motion.div
          style={{ translateX: left }}
          className="border-[4px] rounded-2xl border-accentBlue px-4 py-2"
        >
          <p>📱 Take Notes AnyWare</p>
        </motion.div>
        <motion.div
          style={{ translateX: left }}
          className="border-[4px] rounded-2xl border-accentMagenta px-4 py-2"
        >
          <p>🔎 Find Back in Seconds</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Features;
