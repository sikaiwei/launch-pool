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

      <p className="normal-case">Normal Case</p>
      <p className="uppercase">uppercase</p>
      <p className="lowercase">LOWERCASE</p>
      <p className="capitalize">capitalize test</p>

      <div className="bg-black text-white mb-2 w-6">Width 1.5rem</div>
      <div className="bg-black text-white mb-2 w-12">Width 3rem</div>
      <div className="bg-black text-white mb-2 w-24">Width 6rem</div>

      <div className="bg-black text-white mb-2 w-1/4">Width 25%</div>
      <div className="bg-black text-white mb-2 w-1/3">Width 33%</div>
      <div className="bg-black text-white mb-2 w-1/2">Width 50%</div>

      <div className="bg-black text-white w-screen">Width 100vw</div>

      <div className="bg-black text-white w-full">Width 100%</div>
      <div className="bg-black text-white w-[300px]">Width 300px</div>

      <div className="bg-black text-white mx-auto max-w-xs">
        Tailwind CSS is the only framework that I've
        seen scale on large teams. It’s easy to customize,
        adapts to any design, and the build size is tiny.
      </div>

      {/* <div className="flex items-end">
        <div className="bg-black text-white w-20 h-24">Height 24</div>
        <div className="bg-black text-white w-20 h-48">Height 48</div>
        <div className="bg-black text-white w-20 h-72">Height 72</div>
        <div className="bg-black text-white w-20 h-96">Height 96</div>
        <div className="bg-black text-white w-20 h-24">Height 24</div>
        <div className="bg-black text-white w-20 h-48">Height 48</div>
        <div className="bg-black text-white w-20 h-72">Height 72</div>
        <div className="bg-black text-white w-20 h-96">Height 96</div>
        <div class="bg-black text-white h-screen">Height 100vh</div>
      </div> */}

      <div class="relative w-1/2 h-12 bg-red-200">
        <p>Parent</p>
        <div class="absolute bottom-0 right-0 bg-red-700">
          <p>Child</p>
        </div>
      </div>

      <div class="relative w-32 h-32 bg-red-200">
        <div class="absolute w-16 h-16 top-0 left-0 bg-red-700"></div>
      </div>

      <div class="relative w-32 h-32 bg-red-200">
        <div class="absolute h-16 top-0 inset-x-0 bg-red-700 overflow-auto">ddddddeessseeeddfffff</div>
      </div>

      <div class="relative w-32 h-32 bg-red-200">
        <div class="absolute h-16 bottom-0 inset-x-0 bg-red-700"></div>
      </div>

      <div>
        Tailwind CSS is the only framework that
        <span class="text-red-500 inline">(Inline)</span>
        I've seen scale on large teams.
        <span class="text-red-500 inline-block">(Inline-block)</span>
        It’s easy to customize, adapts to any design,
        <span class="text-red-500 block">(Block)</span>
        and the build size is tiny.
        <span class="text-red-500 hidden">(Hidden)</span>
      </div>

      <div class="relative h-24">
        <div class="absolute left-0 w-24 h-24 bg-red-100 z-40">1</div>
        <div class="absolute left-20 w-24 h-24 bg-red-200 z-30">2</div>
        <div class="absolute left-40 w-24 h-24 bg-red-500 z-20">3</div>
        <div class="absolute left-60 w-24 h-24 bg-red-700 z-10">4</div>
        <div class="absolute left-80 w-24 h-24 bg-red-900">5</div>
      </div>







    </div>
  );
}
