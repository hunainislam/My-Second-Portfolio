import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
return (
  <Card data-aos = "zoom-in" className="h-[85vh] overflow-y-auto bg-[#eeeeee]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight uppercase text-[#006666]">Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
  <div className="-my-8 divide-y-2 divide-gray-100">
      {/* Skills */}
      <div id="skills">
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <IoLogoHtml5  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            HTML
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[100%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">100%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <IoLogoCss3  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            CSS
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <IoLogoJavascript  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            JavaScript
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <BiLogoTypescript  className="text-4xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            TypeScript
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">90%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <RiNextjsFill  className="text-4xl font-bold "/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Next.js
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">70%</p>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#6b6b6b] text-white mb-5 flex-shrink-0">
        <SiTailwindcss  className="text-3xl font-bold"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            TailwindCSS
          </h2>
        </div>
        <div className="flex-grow">
          <div className=" relative h-1 w-[200px] bg-white rounded-xl">
            <div className="absolute bg-[#006666] h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-[#6b6b6b] text-right">60%</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
  </div>
        </CardContent>
      </Card>
)
}


