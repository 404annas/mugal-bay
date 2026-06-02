'use client'

import Image from 'next/image'
import logo from '@/assets/logo2.jpeg'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  const navItems = ['Home', 'Product']

  return (
    // Outer container replicating the pastel gradient background from the screenshots
    // Changed to a column layout to place the sub-badge perfectly at the bottom-right
    <div className="w-full max-w-[1200px] flex flex-col items-end justify-center relative">
      
      {/* Floating Navbar Container */}
      <header className="w-full h-[50px] flex items-center justify-between px-3 bg-transparent border border-black/30 shadow-sm rounded-2xl">
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-inter font-regular text-[15px] text-[#fff] hover:text-[#24112c] px-3 py-1 rounded-lg transition-all duration-300 hover:bg-blue-100"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <Image 
            src={logo} 
            alt="Outseta Logo" 
            width={150} 
            height={50} 
            priority
            className="h-9 rounded-full w-auto object-contain"
          />
        </div>

        {/* Center: Navigation Links */}

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="font-inter font-medium text-[14px] text-[#24112c] border border-[#d3d3d3] px-[12px] py-[5.5px] rounded-lg transition-all duration-300 bg-[#fff] hover:bg-[#f0e4d7]/50"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="font-inter font-medium text-[14px] text-white bg-[#2C199E] px-[12px] py-[5px] rounded-lg transition-all duration-300 hover:bg-[#251484] border border-[#201176] hover:border-[#201176]/50"
          >
            Sign up
          </a>
        </div>
      </header>

      {/* Bottom Right Migration Badge */}
      <a
        href="/migration"
        className="group mr-4 px-4 py-1.5 bg-[#FAF4E5]/45 backdrop-blur-[2px] border border-t-0 border-black/15 rounded-b-xl text-[12px] md:text-[13px] font-inter text-[#5b3969] hover:text-[#24112c] flex items-center gap-1 shadow-sm transition-all duration-300 select-none cursor-pointer"
      >
        <span>
         Project your wealth <strong className="text-[#24112c]">Now</strong>
        </span>
        <span className="transition-transform duration-300 text-[#24112c] group-hover:translate-x-0.5">
          <ArrowRight size={16}  />
        </span>
      </a>

    </div>
  )
}

export default Navbar