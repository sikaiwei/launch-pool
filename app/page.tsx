import Image from "next/image";

export default function Home() {
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

      <div class="h-24 bg-gradient-to-l from-red-500 to-blue-500"></div>
      <div class="w-96  shadow-inner shadow-lime-900">
        Consectetur velit laboris tempor laboris qui consequat eu minim ipsum
        nulla culpa aliquip ad.
      </div>

      <div class="flex justify-center -space-x-24">
        <div class="mix-blend-multiply bg-red-500">
          Id ex deserunt velit excepteur deserunt tempor eu aliquip ipsum labore
          laboris.
        </div>
        <div class="mix-blend-multiply bg-blue-500">
          Adipisicing voluptate magna aute sunt consequat irure sint.
        </div>
      </div>

      <div class="w-96 m-5 p-5 border-2">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div class="w-96 m-5 p-5 border-x-4">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div class="w-96 m-5 p-5 border-y-8">
        Amet commodo nisi quis irure velit Lorem enim anim commodo sunt aliquip
        officia quis.
      </div>
      <div class="w-96 m-5 p-5 border-4 rounded-xl">
        Dolore deserunt sunt qui ut quis sunt anim do nostrud minim fugiat
        minim.
      </div>

      <button class="m-5 outline outline-4">Click</button>

      <div class="blur-sm">
        Do elit adipisicing cupidatat dolor excepteur nulla in incididunt.
      </div>

      <div class="h-16 bg-red-500 brightness-50">Brightness 0</div>
      <div class="h-16 bg-red-500 brightness-100">Brightness 100</div>
      <div class="h-16 bg-red-500 brightness-200">Brightness 200</div>

      <div class="h-16 bg-red-500 contrast-0">Contrast 0</div>
      <div class="h-16 bg-red-500 contrast-50">Contrast 50</div>
      <div class="h-16 bg-red-500 contrast-100">Contrast 200</div>
      <div class="h-16 bg-red-500 contrast-200">Contrast 200</div>

      <div class="h-16 bg-red-500 grayscale">Grayscale</div>

      <div class="h-16 bg-red-500 invert">Invert</div>
      <div class="h-16 bg-red-500 sepia">Sepia</div>

      <div class="h-16 bg-red-500 hue-rotate-0">Hue Rotate 0</div>
      <div class="h-16 bg-red-500 hue-rotate-90">Hue Rotate 90</div>
      <div class="h-16 bg-red-500 hue-rotate-180">Hue Rotate 180</div>

      <button
        class="bg-black text-white rounded-lg m-5 p-5
       hover:bg-blue-200 
       hover:text-black"
      >
        Click
      </button>

      <button
        class="bg-black text-white rounded-lg m-5 p-5
       focus:bg-blue-200 focus:text-black"
      >
        Click
      </button>

      <button
        class="bg-black text-white rounded-lg m-5 p-5
       active:bg-blue-200 active:text-black"
      >
        Click
      </button>

      <div
        class="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 
      hover:bg-red-500"
      >
        <h3 class="hover:text-white">Title</h3>
        <p class="group-hover:text-white">
          Laboris tempor ex nisi deserunt labore anim et do in officia sint
          laborum.
        </p>
      </div>

      <ul>
        <li class="first:bg-red-500">Item 1</li>
        <li class="first:bg-red-500">Item 2</li>
        <li class="first:bg-red-500 even:bg-red-200 odd:bg-red-700">Item 3</li>
        <li class="first:bg-red-500 even:bg-red-200 odd:bg-red-700">Item 4</li>
        <li class="first:bg-red-500 even:bg-red-200 odd:bg-red-700">Item 5</li>
      </ul>

      <select class="border-4 border-red-500">
        <option value="1">True</option>
        <option value="0">False</option>
      </select>
      <select class="border-4 border-green-500 appearance-none">
        <option value="1">True</option>
        <option value="0">False</option>
      </select>
    </div>
  );
}
