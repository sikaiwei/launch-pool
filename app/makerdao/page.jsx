"use client";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      setIsLoading(false);
    }
  }, []);
  const counter = 55;
  return (
    <div>
      <div ref={imgRef}> </div>
      {isLoading ? (
        <div className="flex place-content-center">
          <span className="loading loading-dots loading-lg  place-self-center"></span>
        </div>
      ) : (
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-9"
                fill="none"
                viewBox="0 0 38 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.89486 4.10903V19.0599H0V1.69174C0 0.298924 1.59119 -0.495032 2.70406 0.342453L16.4546 10.6903C16.8786 11.0094 17.1279 11.5091 17.1279 12.0396V19.0599H14.2331V12.6415L2.89486 4.10903Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M34.5319 4.10903V19.0599H37.4268V1.69174C37.4268 0.298924 35.8356 -0.495032 34.7227 0.342453L20.9721 10.6903C20.5482 11.0094 20.2988 11.5091 20.2988 12.0396V19.0599H23.1937V12.6415L34.5319 4.10903Z"
                />
              </svg>
              <a className="btn btn-ghost text-xl">makerDao</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Developer</a>
                </li>

                <div className="dropdown dropdown-hover place-self-center dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    Leaning
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <li>
                  <a>Funding</a>
                </li>
                <li>
                  <a>Communicatation</a>
                </li>

                <div className="dropdown dropdown-hover place-self-center dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    Vote
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-12 py-32">
            <div className="col-start-3 col-span-9">
              <h1 className="text-5xl">一种更好的货币</h1>
              <p className="text-xl my-3 ">任何人随时随地都能使用的数字货币</p>
              <button className="btn  btn-accent rounded-full w-1/6 text-xl">
                使用Dai
              </button>
              <a className="  cursor-pointer mx-8 w-1/6 text-xl text-accent">
                ▶ 播放视频
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
