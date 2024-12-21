// import Image from "next/image";
import Page2 from "../pages/page2";
import Nav from "../pages/nav";
import Btn from "../pages/button/button";
import Loader from "../pages/typeing/page";
import BtnMotionCss from "../pages/button-motion-css/button-motion";

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Page2 /> */}
      <div className="h-4"></div>
      <Btn />
      <Loader />
      <BtnMotionCss />
      <article className="prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
}
