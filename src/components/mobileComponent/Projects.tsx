import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MobileProjects() {
      // My Projects Here
      const projects = [
        {
          name: "Interactive Resume Builder",
          detail: "An Interactive Resume Builder allows users to create, edit",
          link: "https://milestone-based-interactive-resume-builder.vercel.app/",
          image: "project1.png",
        },
        {
          name: "Resume Builder",
          detail: "Welcome to my portfolio! As a passionate UI/UX designer and web developer",
          link: "https://my-first-portfolio-theta-eight.vercel.app/",
          image: "project4.png",
        },
        {
          name: "Inventory Management System",
          detail: "An Inventory Management System helps track products",
          link: "https://inventory-management-system-amber.vercel.app/",
          image: "project3.png",
        },
        {
          name: "Inventory Management System",
          detail: "You will find a comprehensive eCommerce app that exemplifies my skills in UI/UX design and web development.",
          link: "https://ecommerce-app-store-liart.vercel.app/",
          image: "project2.png",
        },
      ]
  return (
    <div className="w-full p-5 bg-[#eeeeee]">
      <h2 className="scroll-m-20 border-b border-[#6b6b6b] pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-[#006666]">
      Projects
    </h2>
                  {/* Projects */}
                  <div className="mt-4 flex flex-wrap -m-4">
      {/* My Projects Here*/}
      {projects.map((item, i) => (
         <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
         <div className="flex relative">
           <Image
             alt="gallery"
             className="absolute inset-0 w-full h-full object-cover object-center"
             src={`/assests/projects/${item.image}`}
             width={1000}
             height={1000}
           />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
             <h2 className="text-xl font-semibold tracking-tight uppercase text-gray-900">
               {item.name}
             </h2>
             <p className="mt-3 leading-relaxed text-[#006666]">
               {item.detail}
             </p>
             <Link href={item.link} target='_blank' className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline text-black">
             <p className="mt-4">View Project</p></Link>
           </div>
         </div>
       </div>
      ))}
    </div>
    </div>
  )
}
