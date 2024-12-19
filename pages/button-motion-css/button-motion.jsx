"use client";
import style from "./styles.module.css";





export default function BtnMotionCss() {
  return (
    /* From Uiverse.io by MuhammadHasann */
    <div className="bg-black p-12 w-2/6">
      <button className={style.button}>边框按钮</button>
      <div className={style.button}>盒子</div>
    </div>
  );
}
