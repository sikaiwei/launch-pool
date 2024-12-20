import Image from "next/image";

export default function Page1() {
  return (
    <div>
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
      <div className="underline decoration-wavy decoration-green-300 underline-offset-4">
        Decoration Wavy
      </div>

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
        Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.
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

      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Parent</p>
        <div className="absolute bottom-0 right-0 bg-red-700">
          <p>Child</p>
        </div>
      </div>

      <div className="relative w-32 h-32 bg-red-200">
        <div className="absolute w-16 h-16 top-0 left-0 bg-red-700"></div>
      </div>

      <div className="relative w-32 h-32 bg-red-200">
        <div className="absolute h-16 top-0 inset-x-0 bg-red-700 overflow-auto">
          ddddddeessseeeddfffff
        </div>
      </div>

      <div className="relative w-32 h-32 bg-red-200">
        <div className="absolute h-16 bottom-0 inset-x-0 bg-red-700"></div>
      </div>

      <div>
        Tailwind CSS is the only framework that
        <span className="text-red-500 inline">(Inline)</span>
        I've seen scale on large teams.
        <span className="text-red-500 inline-block">(Inline-block)</span>
        It’s easy to customize, adapts to any design,
        <span className="text-red-500 block">(Block)</span>
        and the build size is tiny.
        <span className="text-red-500 hidden">(Hidden)</span>
      </div>

      <div className="relative h-24">
        <div className="absolute left-0 w-24 h-24 bg-red-100 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-red-200 z-30">2</div>
        <div className="absolute left-40 w-24 h-24 bg-red-500 z-50">3</div>
        <div className="absolute left-60 w-24 h-24 bg-red-700 z-10">4</div>
        <div className="absolute left-80 w-24 h-24 bg-red-900">5</div>
      </div>

      <div className="h-24">
        <div className="w-24 h-24 bg-red-100 float-left">1</div>
        <div className="w-24 h-24 bg-red-200 inline-block">2</div>
      </div>

      <div
        className="w-64 h-64 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url('https://q8.itc.cn/q_70/images03/20240406/42b4180e966648c09fa4cf8aaacd177f.jpeg')`,
        }}
      ></div>

      <div className="h-24 bg-gradient-to-l from-red-500 to-blue-500"></div>
      <div className="w-96  shadow-inner shadow-lime-900">
        Consectetur velit laboris tempor laboris qui consequat eu minim ipsum
        nulla culpa aliquip ad.
      </div>

      <div className="flex justify-center -space-x-24">
        <div className="mix-blend-multiply bg-red-500">
          Id ex deserunt velit excepteur deserunt tempor eu aliquip ipsum labore
          laboris.
        </div>
        <div className="mix-blend-multiply bg-blue-500">
          Adipisicing voluptate magna aute sunt consequat irure sint.
        </div>
      </div>

      <div className="w-96 m-5 p-5 border-2">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div className="w-96 m-5 p-5 border-x-4">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div className="w-96 m-5 p-5 border-y-8">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div className="w-96 m-5 p-5 border-4 rounded-xl">
        Dolore deserunt sunt qui ut quis sunt anim do nostrud minim fugiat
        minim.
      </div>

      <button className="m-5 outline outline-4">Click</button>

      <div className="blur-sm">
        Do elit adipisicing cupidatat dolor excepteur nulla in incididunt.
      </div>

      <div className="h-16 bg-red-500 brightness-50">Brightness 0</div>
      <div className="h-16 bg-red-500 brightness-100">Brightness 100</div>
      <div className="h-16 bg-red-500 brightness-200">Brightness 200</div>

      <div className="h-16 bg-red-500 contrast-0">Contrast 0</div>
      <div className="h-16 bg-red-500 contrast-50">Contrast 50</div>
      <div className="h-16 bg-red-500 contrast-100">Contrast 200</div>
      <div className="h-16 bg-red-500 contrast-200">Contrast 200</div>

      <div className="h-16 bg-red-500 grayscale">Grayscale</div>

      <div className="h-16 bg-red-500 invert">Invert</div>
      <div className="h-16 bg-red-500 sepia">Sepia</div>

      <div className="h-16 bg-red-500 hue-rotate-0">Hue Rotate 0</div>
      <div className="h-16 bg-red-500 hue-rotate-90">Hue Rotate 90</div>
      <div className="h-16 bg-red-500 hue-rotate-180">Hue Rotate 180</div>

      <button
        className="bg-black text-white rounded-lg m-5 p-5
       hover:bg-blue-200 
       hover:text-black"
      >
        Click
      </button>

      <button
        className="bg-black text-white rounded-lg m-5 p-5
       focus:bg-blue-200 focus:text-black"
      >
        Click
      </button>

      <button
        className="bg-black text-white rounded-lg m-5 p-5
       active:bg-blue-200 active:text-black"
      >
        Click
      </button>

      <div
        className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 
      hover:bg-red-500"
      >
        <h3 className="hover:text-white">Title</h3>
        <p className="group-hover:text-white">
          Laboris tempor ex nisi deserunt labore anim et do in officia sint
          laborum.
        </p>
      </div>

      <ul>
        <li className="first:bg-red-500">Item 1</li>
        <li className="first:bg-red-500">Item 2</li>
        <li className="first:bg-red-500 even:bg-red-200 odd:bg-red-700">
          Item 3
        </li>
        <li className="first:bg-red-500 even:bg-red-200 odd:bg-red-700">
          Item 4
        </li>
        <li className="first:bg-red-500 even:bg-red-200 odd:bg-red-700">
          Item 5
        </li>
      </ul>

      <select className="border-4 border-red-500">
        <option value="1">True</option>
        <option value="0">False</option>
      </select>
      <select className="border-4 border-green-500 appearance-none">
        <option value="1">True</option>
        <option value="0">False</option>
      </select>

      <div className="w-36 h-36 bg-red-500 cursor-pointer"></div>

      <div className="select-none">Select None</div>
      <div className="select-text">Select Text</div>
      <div className="select-all">Select All</div>
      <div className="select-auto">Select Auto</div>

      <a href="#bottom" className="block m-6 border-4 text-center">
        Go to Bottom
      </a>
      <div className="h-[1000px] bg-black"></div>
      <div id="bottom" className="h-4 text-center">
        Bottom
      </div>

      <div className="columns-xs">
        <div className="w-full m-2 border-4 border-red-500">
          Proident ipsum consequat dolor deserunt.
        </div>
        <div className="w-full m-2 border-4 border-yellow-500">
          Proident ipsum consequat dolor deserunt.
        </div>
        <div className="w-full m-2 border-4 border-green-500">
          Proident ipsum consequat dolor deserunt.
        </div>
        <div className="w-full m-2 border-4 border-blue-500">
          Proident ipsum consequat dolor deserunt.
        </div>
      </div>

      <div className="columns-1">
        <div className="w-60 m-2 border-4 border-red-500 aspect-square">
          Proident ipsum consequat dolor deserunt.
        </div>
        <div className="w-60 m-2 border-4 border-blue-500 aspect-video">
          Proident ipsum consequat dolor deserunt.
        </div>
      </div>

      <div className="flex w-full h-72 bg-black ">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex w-full h-72 bg-black items-center ">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex w-full h-72 bg-black items-center  justify-around">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex w-full h-72 bg-black   justify-around">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex flex-wrap w-full h-72 bg-black items-center justify-around">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 w-[300px] border border-green-500 bg-green-200">
          3
        </div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex flex-col w-72 bg-black">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>

      <div className="flex flex-col w-72 bg-black gap-4">
        <div className="p-10 border border-red-500 bg-red-200">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200">2</div>
        <div className="p-10 border border-green-500 bg-green-200">3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">4</div>
      </div>
      {/* 调整顺序 */}
      <div className="flex flex-col w-72 bg-black gap-4">
        <div className="p-10 border border-red-500 bg-red-200 order-2">1</div>
        <div className="p-10 border border-yellow-500 bg-yellow-200 order-1">
          2
        </div>
        <div className="p-10 border border-green-500 bg-green-200 order-4">
          3
        </div>
        <div className="p-10 border border-blue-500 bg-blue-200 order-3">4</div>
      </div>

      {/* 放大与缩小 */}
      <div className="flex w-full bg-black">
        <div className="p-10 w-64 border border-red-500 bg-red-200">1</div>
        <div className="flex-none p-10 w-64 border border-yellow-500 bg-yellow-200">
          2
        </div>
        <div className="p-10 w-64 border border-green-500 bg-green-200">3</div>
        <div className="p-10      border border-blue-500 bg-blue-200">4</div>
        <div className="p-10 w-64 border border-gray-500 bg-gray-200">5</div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 1</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 2</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 3</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 4</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 5</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 6</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 7</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 8</div>
        {/* <div class="p-10 border-4 border-red-200 bg-blue-200">Item 9</div> */}
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-2  bg-gray-200">
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 1</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 2</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 3</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 4</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 5</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 6</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 7</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 8</div>
        <div className="p-10 border-4 border-red-200 bg-blue-200">Item 9</div>
      </div>

      {/* 跨行跨列 */}
      <div className="grid grid-cols-3 gap-2">
        <div className=" p-10 border-4 border-red-200 bg-blue-200">Item 1</div>
        <div className="md:col-span-2 p-10 border-4 border-red-200 bg-blue-200">
          Item 2
        </div>
      </div>
      {/* 过度 */}
      <button className="m-4 px-8 py-4 text-white bg-blue-200 rounded hover:bg-blue-700">
        Click
      </button>
      <button
        class="m-4 px-8 py-4 text-white bg-blue-200 rounded
       hover:bg-blue-700 transition-colors duration-200 ease-in delay-00"
      >
        Click
      </button>
      <button
        class="m-4 px-8 py-4 text-white bg-blue-200 rounded animate-pulse
        hover:scale-50 hover:rotate-12 hover:translate-x-2 hover:skew-x-12 duration-700
        "
      >
        Click
      </button>

      {/* 动画类与关键帧 */}
      <div class="w-64 h-64 bg-red-200 rounded-full relative animate-bounce">
        <div class="w-32 h-2 bg-gradient-to-r from-red-500 to-yellow-500 absolute right-0 top-1/2"></div>
      </div>
      <div class="w-64 h-64 bg-red-200 rounded-full relative animate-bounce">
        <div class="w-32 h-2 bg-gradient-to-r from-red-500 to-yellow-500 absolute right-0 top-1/2"></div>
      </div>
      {/* 子选择器 */}
      <div class="size-36 bg-black group/box animate-bounce">
        <div class="size-24 bg-gray-500 group-hover/box:bg-red-500 "></div>
      </div>

      {/* // 兄弟选择器 */}
      <div class="size-36 bg-black mb-4 peer/box"></div>
      <div class="size-36 bg-gray-500 peer-hover/box:bg-red-500"></div>
    </div>
  );
}
