import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="text-white body-font bg-[#6b6b6b]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-black">Home</a>
      <a className="mr-5 hover:text-black">About</a>
      <a className="mr-5 hover:text-black">Skills</a>
      <a className="mr-5 hover:text-black">Projects</a>
      <a className="mr-5 hover:text-black">Contact</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className="ml-3 text-xl text-yellow-300">My Portfolio</span>
    </a>
  </div>
</header>

    </div>
  )
}
