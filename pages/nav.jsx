"use client";
import Theme from "../pages/theme/theme";
import Page2 from "../pages/page2";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="relative ">
      {/* <div ref={imgRef} > </div> */}

      {/* <div className="flex place-content-center"> */}
      {/* <div class="skeleton h-32 w-32 absolute top-0 left-1/2 z-20"></div> */}
      {isLoading ? (
        <>
          <div className="flex absolute w-full h-16 flex-row items-center gap-0 z-20 ">
            <div className="skeleton  h-10 w-2/12"></div>
            <div className="skeleton  w-2/12"></div>
            <div className="skeleton h-10 w-1/12"></div>
            <div className="skeleton h-10 w-1/12"></div>
            <div className="skeleton h-10 w-1/12"></div>
            <div className="skeleton h-10 w-1/12"></div>
            <div className="skeleton h-10 w-1/12"></div>
            <div className="skeleton  w-2/12"></div>
            <div className="skeleton h-14 w-2/12"></div>
          </div>
          {/* <span className="loading loading-dots loading-lg absolute  left-1/2 place-self-center"></span> */}
        </>
      ) : (
        <></>
      )}
      {/* </div> */}
      {/* // ) : ( */}

      <div ref={imgRef} className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/typeing" className="">
                  Typeing
                </Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-xl font-bold text-primary"
          >
            LaunchPool
          </Link>
          {/* <a className="btn btn-ghost text-xl">LaunchPool</a> */}
        </div>
        <div className="navbar-center hidden  lg:flex">
          <Page2 />
        </div>
        <div className="navbar-end ">
          <div className="join">
            <div className=" btn h-10 px-0 place-self-start join-item ">
              {/* <div className="  w-1/4 h-10 pb-2 place-self-start"> */}
              <Theme />
            </div>
            <a className="btn join-item">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
  // }
  // return null;
}
