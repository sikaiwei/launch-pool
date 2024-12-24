"use client";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
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
          <StyledWrapper>
            <div className="text">please wait..., rs will come soon...</div>
          </StyledWrapper>

          <div className="card glass w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary-content">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>

          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": `${counter}` }}></span>
          </span>

          <div className="grid grid-cols-2">
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    className="rounded-xl"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="car!"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    className="flex justify-between gap-3"
                    translateZ={80}
                  >
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-error">Error</button>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

const StyledWrapper = styled.div`
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes typeAndDelete {
    0%,
    10% {
      width: 0;
    }
    45%,
    55% {
      width: 15em;
    } /* adjust width based on content */
    90%,
    100% {
      width: 0;
    }
  }

  .text {
    color: red;
    // mix-blend-mode: difference;
    font-size: 1em;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.2em solid black; /* Cursor */
    animation: typeAndDelete 4s steps(11) infinite,
      blinkCursor 0.5s step-end infinite alternate;
    margin-top: 1.5em;
  }
`;

export default Loader;
