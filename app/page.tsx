// import Image from "next/image";
import Page2 from "../pages/page2";
import Motionup from "../pages/motion";
import Btn from "../pages/button/button";
import Loader from "../pages/typeing/type";
import BtnMotionCss from "../pages/button-motion-css/button-motion";


export default function Home() {
  return (
    <div>
      <Page2 />
      <Motionup />
      <Btn />
      <Loader />
      <BtnMotionCss />
    </div>
  );
}
