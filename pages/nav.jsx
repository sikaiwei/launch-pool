"use client";
import Theme from "../pages/theme/theme";
import Page2 from "../pages/page2";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
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
              <a>Item 1</a>
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
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          LaunchPool
        </Link>
        {/* <a className="btn btn-ghost text-xl">LaunchPool</a> */}
      </div>
      <div className="navbar-center  lg:flex">
        <Page2 />
      </div>
      <div className="navbar-end ">
        <div className="  h-10  place-self-start ">
          {/* <div className="  w-1/4 h-10 pb-2 place-self-start"> */}
          <Theme />
        </div>
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
