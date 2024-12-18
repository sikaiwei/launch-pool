"use client";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";

export default function Page2() {
  return (
    <div>
      {/* <div className="flex space-x-2  text-red-400 drop-shadow-sm  ">
        <p className="  ">Item 1</p>
        <div>Item 2</div>
        <div>Item 3</div>
      </div> */}
      {/* <input type="text" class="border border-green-500" /> */}
      <div
        className="grid  place-content-center 
      bg-neutral-100"
      >
        <SlideTabs />
      </div>
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activePosition, setActivePosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full 
    border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
        Home
      </Tab>
      <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
        Pricing
      </Tab>
      <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
        Features
      </Tab>
      <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
        Docs
      </Tab>
      <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
        Blog
      </Tab>

      <Cursor position={position} />
      <Cursor position={activePosition} />
    </ul>
  );
};

const Tab = ({ children, setPosition, setActivePosition }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      // 点击激活
      onClick={() => {
        // onMouseEnter={() => {
        if (!ref.current) return;

        const data = ref.current.getBoundingClientRect();
        console.log(data);
        const { width } = ref.current.getBoundingClientRect();

        setActivePosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      // 鼠标进入激活
      onMouseEnter={() => {
        if (!ref.current) return;

        const data = ref.current.getBoundingClientRect();
        console.log(data);
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 0.2,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3
    py-1.5 text-xs uppercase text-white mix-blend-difference
    md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7  rounded-full bg-black md:h-12"
    />
  );
};
