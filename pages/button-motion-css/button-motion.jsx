"use client";
import style from "./styles.module.css";
import { motion } from "motion/react";

export default function BtnMotionCss() {
  return (
    /* From Uiverse.io by MuhammadHasann */
    <div className="bg-black p-12 w-2/6">
      <button className={style.button}>边框按钮</button>
      <button className={`${style.button} + btn btn-primary `}>Button</button>
    </div>
  );
}
