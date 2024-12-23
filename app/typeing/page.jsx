"use client";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

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
