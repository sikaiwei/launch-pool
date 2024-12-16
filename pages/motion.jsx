"use client";
import React, { useState, useRef } from "react";
import { easeInOut, motion } from "motion/react";

export default function Motionup() {
  const animation = {
    y: [-5, 5, -5], // 设置y轴方向的移动范围，从 - 10px到10px
    // x: [-10, 10, -10], // 设置y轴方向的移动范围，从 - 10px到10px
    transition: {
      repeat: Infinity, // 让动画来回循环（yoyo效果），Infinity表示无限循环
      duration: 8, // 每个动画周期的时长为4秒
      ease: "linear", // 动画的缓动效果为线性
    },
  };
  return (
    <>
      <motion.div
        className="grid  
      bg-neutral-100"
        initial={{
          x: [0, 100, 0],
          opacity: 1,
          // scale: 0.9
        }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          // ease: [0, 0.71, 0.2, 1.01],
          ease: ["easeIn", "easeOut"],
          // repeat: Infinity,
        }}
      >
        ssssssssssssss
      </motion.div>

      <motion.div
        animate={animation}
        className="w-50 h-50 bg-blue-500"
      >dddddddddddddddd</motion.div>
    </>
  );
}
