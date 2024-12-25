"use client";
// import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Page2 from "../pages/page2";
import Nav from "../pages/nav";
import Btn from "../pages/button/button";
import Loader from "../pages/typeing/page";
import BtnMotionCss from "../pages/button-motion-css/button-motion";
import SquareLoader from "../components/loading/squreloading";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <div ref={imgRef}> </div>
      {isLoading ? (
        <div className="flex  place-content-center h-3/4">

          <span className="loading loading-dots loading-lg  place-self-center"></span>
        </div>
      ) : (
        <div>
          <SquareLoader />

          <Btn />
          <Loader />
          <BtnMotionCss />
          <article className="prose">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>
      )}
    </div>
  );
}
