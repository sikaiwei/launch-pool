// import Image from "next/image";
import Page2 from "../pages/page2";
import Motionup from "../pages/motion";
import Btn from "../pages/button/button";
import Loader from "../pages/typeing/type";

export default function Home() {
  return (
    <div>
      <Page2 />
      <Motionup />
      <Btn />
      <Loader />
    </div>
  );
}
