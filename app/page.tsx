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

      <div className="text-xs">Text Extra Small</div>
      <div className="text-sm">Text Small</div>
      <div className="text-base">Text Base</div>
      <div className="text-lg">Text Large</div>
      <div className="text-xl">Text Extra Large</div>
      <div className="text-2xl">Text 2 Extra Large</div>
      <div className="text-3xl">Text 3 Extra Large</div>

      <div className="tracking-tight">Tracking Tight</div>
      <div className="tracking-normal">Tracking Normal</div>
      <div className="tracking-wide">Tracking Wide</div>

      <div className="text-left">Text Left</div>
      <div className="text-center">Text Center</div>
      <div className="text-right">Text Right</div>

      <div className="underline decoration-2">Decoration 2</div>
      <div className="underline decoration-4">Decoration 4</div>
      <div className="underline decoration-8">Decoration 8</div>

      <div className="underline decoration-double">Decoration Double</div>
      <div className="underline decoration-dotted">Decoration Dotted</div>
      <div className="underline decoration-dashed">Decoration Dashed</div>
      <div className="underline decoration-wavy decoration-green-300 underline-offset-4">Decoration Wavy</div>

      <div className="underline underline-offset-2">Offset 2</div>
      <div className="underline underline-offset-4">Offset 4</div>
      <div className="underline underline-offset-8">Offset 8</div>















    </div>
  );
}
