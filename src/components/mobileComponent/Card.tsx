import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Image1 from "../../../public/assests/image/logo2.png";
import Typewriter from "typewriter-effect";
// React Icons
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
// Button React icons
import { IoMdDownload } from "react-icons/io";

export default function MobileCard() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-[#006666]">
      <div
        data-aos="zoom-in"
        className="card bg-[#6b6b6b] w-80 p-5 flex flex-col justify-center items-center"
      >
        {/* Image */}
        <Image
          src={Image1}
          alt="profile-pic"
          width={200}
          height={200}
          className="rounded-md mx-auto"
        />
        <div className="card-body">
          {/* Name Here */}
          <h1 className="text-2xl text-center font-bold tracking-tight font uppercase">
            Malik Hunain
          </h1>
          <h2 className="text-md text-center font-semibold font uppercase text-amber-400">
            <Typewriter
              options={{
                strings: ["Web Develpor", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* Social Media Account */}
          <div className="Social Media Account grid grid-cols-4 gap-2">
            {/* Linkedin */}
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                className="text-white text-4xl"
              >
                <IoLogoLinkedin className="text-2xl hover:text-blue-700" />
              </Link>
            </div>
            {/* GitHub */}
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://github.com/hunainislam?tab=repositories"}
                className="text-white text-4xl"
              >
                <FaSquareGithub className="text-2xl hover:text-black" />
              </Link>
            </div>
            {/* Vercel */}
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://vercel.com/malik-hunains-projects"}
                className="text-white text-4xl"
              >
                <SiVercel className="text-2xl hover:text-black" />
              </Link>
            </div>
            {/* Npm */}
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://www.npmjs.com/~malikhunain"}
                className="text-white text-4xl"
              >
                <FaNpm className="text-2xl hover:text-red-600" />
              </Link>
            </div>
          </div>
          {/* Download CV Button */}
          <Link
            href="/assests/CV/myCV.pdf"
            className="mt-4 w-full"
            target="_blank"
          >
            <Button>
              <IoMdDownload className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
