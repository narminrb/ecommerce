import React from 'react'
import s from './style.module.scss'

const Footer = () => {
  return (
    <div>
      <nav className="bg-black p-4">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-10 px-3">
        <div className={s.footlogo}>3legant.

        </div>

        <div className="lg:hidden">
            <button className="text-white focus:outline-none">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
        </div>

        <div className="lg:flex  lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <a href="/" className={s.elements}>Home</a>
            <a href="#Projects" className={s.elements}>Projects</a>
            <a href="/" className={s.elements}>About</a>
            <a href="/" className={s.elements}>Contact Me</a>
        </div>

    </div>
<div className="py-7 border-t border-gray-700">
                <div className="flex items-center justify-center">
                    <span className="text-gray-400 ">©<a href="https://pagedone.io/">pagedone</a>2024, All rights reserved.</span>
                </div>
            </div>
</nav>
    </div>
  )
}

export default Footer