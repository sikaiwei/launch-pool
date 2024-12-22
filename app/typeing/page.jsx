"use client";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <div>
      <StyledWrapper>
        <div className="text">please wait..., rs will come soon...</div>
      </StyledWrapper>
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
