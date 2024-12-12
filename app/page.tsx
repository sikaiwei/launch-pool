import Image from "next/image";

export default function Home() {
  return (
    <div >
    <div className="flex space-x-2">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
    <div className="flex flex-col space-y-2">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
    </div>
  );
}
