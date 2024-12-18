"use client";
import style from "./styles.module.css";

export default function Btn() {
  const delay = -2 * 0.5 + 's';
  return (
    <div className="grid grid-cols-5 gap-5">
      <button className={style.movingButton}>Hover me!</button>
      <button className={style.movingButton} style={{ animationDelay: delay }}>Hover me!</button>
      <button className={style.movingButton}>Hover me!</button>
    </div >
  );
}
