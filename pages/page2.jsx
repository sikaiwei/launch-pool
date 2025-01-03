"use client";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import Theme from "../pages/theme/theme";
import Link from "next/link";

export default function Page2() {
  return (
    <div>
      {/* <div className="flex space-x-2  text-red-400 drop-shadow-sm  ">
        <p className="  ">Item 1</p>
        <div>Item 2</div>
        <div>Item 3</div>
      </div> */}
      {/* <input type="text" class="border border-green-500" /> */}
      {/* <div
        className="grid  grid-cols-3 
        "
      >
        <div className="w-15  h-16 col-start-2">
          <SlideTabs />
        </div>

        <div className="w-15  h-16 col-start-3 place-content-end">
          <Theme />
        </div>
      </div> */}
      {/* <div className="grid grid-cols-9"> */}
      {/* <div className="align-middle place-self-center">abcd</div> */}
      {/* <div className="col-start-5 flex justify-center items-center h-16"> */}
      <SlideTabs />
      {/* </div> */}
      {/* <div className="col-start-9   justify-items-end pl-12 pt-2 w-full h-10"> */}
      {/* <Theme /> */}
      {/* </div> */}
    </div>
    // </div>
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
     e p-1"
    >
      <Link href="/">
        <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
          Home
        </Tab>
      </Link>
      <Link href="/typeing">
        <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
          typeing
        </Tab>
      </Link>
      <Link href="/makerdao">
        <Tab setPosition={setPosition} setActivePosition={setActivePosition}>
          makerdao
        </Tab>
      </Link>
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
      className="absolute z-0 h-7  rounded-full bg-accent md:h-12"
    />
  );
};
