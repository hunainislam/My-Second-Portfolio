import { Button } from "@/components/ui/button";
import Image from "next/image";
import Image1 from "../../public/assests/image/logo2.png";
import Typewriter from "typewriter-effect";
// React Icons
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
// Button React icons
import { IoMdDownload } from "react-icons/io";

export function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center p-3">
      {/* Image */}
      <Image
        src={Image1}
        alt="profile-pic"
        width={200}
        height={200}
        className="rounded-md"
      />

      {/* Name Here */}
      <div className="Name Here -mt-4">
        <h1 className="text-2xl font-bold tracking-tight font uppercase">
          Malik Hunain
        </h1>
        <h2 className="text-md text-center font-semibold tracking-tight font uppercase text-amber-400 mt-4">
          <Typewriter
            options={{
              strings: ["Web Develpor", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* Social Media Account */}
      <div className="Social Media Account grid grid-cols-4 gap-2 -mt-12">
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
        <Link href= "/assests/CV/myCV.pdf" className="-mt-8" target="_blank">
      <Button>
      <IoMdDownload  className="mr-2 h-4 w-4"/> Download CV
    </Button>
    </Link>
    </div>
  );
}
