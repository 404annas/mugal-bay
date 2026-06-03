"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MoreHorizontal, ArrowRight } from "lucide-react";
import Logo from "@/assets/logo2.jpeg";
import Link from "next/link";

const Navbar2: React.FC = () => {
  return (
    // Outer header: sticky top-0 ensures it scrolls with the website
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md py-4 pl-0 pr-4 md:pr-8">
      <div className="w-full flex items-center justify-between">
        {/* Left Group: Contains both Logo Pill and Menu Pill */}
        <div className="flex items-center gap-4">
          {/* Logo Pill: Flat on the left, connected with the viewport edge */}
          <Link href={"/"}>
            <div className="flex items-center border-y border-r border-[#dde2f0] rounded-r-full rounded-l-none pl-10 pr-2 py-2.5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] h-[50px]">
              <div className="relative w-40 h-40 flex items-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Navigation Menu Pill */}
          <nav className="hidden lg:flex items-center bg-white border border-[#dde2f0] rounded-full px-7 py-2 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] h-[50px] gap-6">
            <a
              href="#product"
              className="text-sm font-semibold text-[#090325] hover:text-[#3e11e1] transition-colors"
            >
              Product
            </a>
            <a
              href="#work-ai"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#090325] hover:text-[#3e11e1] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#3e11e1]" />
              Work AI
            </a>
            <a
              href="#templates"
              className="text-sm font-semibold text-[#090325] hover:text-[#3e11e1] transition-colors"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-[#090325] hover:text-[#3e11e1] transition-colors"
            >
              Pricing
            </a>
            <button className="text-[#64748b] cursor-pointer hover:text-[#090325] transition-colors flex items-center pt-0.5">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </nav>
        </div>

        {/* Right Side: Auth Action Buttons */}
        <div className="flex items-center bg-white border border-[#dde2f0] rounded-full p-1 pl-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] h-[50px] gap-5">
          <a
            href="#login"
            className="text-sm font-semibold text-[#4a4864] hover:text-[#3e11e1] transition-colors"
          >
            Login
          </a>
          <a
            href="#signup"
            className="flex items-center gap-1 bg-[#2e00c5] hover:bg-[#220096] text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-colors h-full"
          >
            Try for free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
