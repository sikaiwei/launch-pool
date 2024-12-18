"use client";
import style from "./styles.module.css";
import { motion } from "motion/react";

export default function BtnMotionCss() {
  return (
    /* From Uiverse.io by MuhammadHasann */
    <div className="grid grid-cols-3 gap-3 ">
      {/* <div className="bg-black p-12 w-2/6"> */}
      <div></div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className={`${style.button} place-self-end col-start-2 col-span-2`}
      >
        边框按钮
      </motion.button>
      {/* </div> */}
    </div>
  );
}
