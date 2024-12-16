"use client";
import React, { useState, useRef } from "react";
import { easeInOut, motion } from "motion/react";

export default function Motionup() {
  const animation = {
    y: [0, 4, 0, -4, 0], // 设置y轴方向的移动范围，从 - 10px到10px
    // x: [-10, 10, -10], // 设置y轴方向的移动范围，从 - 10px到10px
    transition: {
      repeat: Infinity, // 让动画来回循环（yoyo效果），Infinity表示无限循环
      duration: 3, // 每个动画周期的时长为4秒
      ease: "linear", // 动画的缓动效果为线性
    },
  };
  const animation2 = {
    y: [0, 4, 0, -4, 0], // 设置y轴方向的移动范围，从 - 10px到10px
    // x: [-10, 10, -10], // 设置y轴方向的移动范围，从 - 10px到10px
    transition: {
      repeat: Infinity, // 让动画来回循环（yoyo效果），Infinity表示无限循环
      ease: "linear", // 动画的缓动效果为线性
      // ease: "ease-in-out", // 动画的缓动效果为线性
      // ease: ["easeIn", "easeOut"],
      duration: 3, // 每个动画周期的时长为4秒
      delay: -1,
    },
  };
  return (
    <>
      <div className="grid grid-cols-4 content-end">
        <motion.div animate={animation} className="w-20 h-50 p-2 m-2">
          <p>ddddddddddddddddd</p>
        </motion.div>
        <motion.a className="block" animate={animation2}>
          ddddddddddddddddd
        </motion.a>
        <motion.a animate={animation2}>fffffffffffffff</motion.a>
      </div>
    </>
  );
}
