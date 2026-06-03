"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Calendar } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// Asset Imports
import Arrow1 from "@/assets/arrow1.svg";
import Arrow2 from "@/assets/arrow2.svg";
import Dog from "@/assets/dog.svg";
import Doghands from "@/assets/doghands.svg";
import GreenDoodle from "@/assets/bluedoodle.svg"; // Blue floral-like doodle on right
import BlueDoodle from "@/assets/greendoodle.svg"; // Green splash-like doodle on left
import PageLeft from "@/assets/pageleft.svg";
import PageRight from "@/assets/pageright.svg";
import StartText from "@/assets/start.svg";
import StopText from "@/assets/stop.svg";
import ContinueText from "@/assets/continue.svg";
import LinesScribble from "@/assets/lines.svg";
import CookieIcon from "@/assets/cookie.svg";
import CursorIcon from "@/assets/cursor.svg";

const DogSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, "0");
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-[#f4f4f6] flex flex-col items-center justify-center overflow-hidden px-6 py-20 select-none">
      {/* Top hand-drawn process path (start -> stop -> continue) */}
      <div className="flex items-center gap-3 mb-10 z-10 scale-90 sm:scale-100">
        <Image src={StartText} alt="start" width={70} height={30} />
        <Image src={Arrow1} alt="arrow" width={40} height={10} className="" />
        <Image src={StopText} alt="stop" width={60} height={30} />
        <Image src={Arrow1} alt="arrow" width={40} height={10} className="" />
        <Image src={ContinueText} alt="continue" width={100} height={30} />
      </div>

      {/* Main Heading Text */}
      <h1 className="font-grifter text-4xl sm:text-5xl md:text-[64px] font-black text-[#0c062c] text-center max-w-7xl mx-auto z-10 translate-y-4">
        A new project{" "}
        <span className="inline-block w-[120px] sm:w-[140px]"></span> management
      </h1>

      {/* Interactive Widget Box + Peeking Dog container */}
      <div className="relative mt-12 mb-6 z-20">
        {/* Peeking Dog Illustration (Layered behind the capsule using -z-20) */}
        <div className="absolute -top-[125px] left-[50%] -translate-x-[50%] w-[260px] h-[145px] pointer-events-none -z-20">
          <Image
            src={Dog}
            alt="Dog illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Dog Hands SVG (Layered on top of the capsule using z-20) */}
        <div className="absolute -top-[14px] left-[380px] -translate-x-[50%] w-[200px] h-[40px] pointer-events-none z-20">
          <Image
            src={Doghands}
            alt="Dog hands"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* White Capsule Tracker Wrapper */}
        <div className="relative bg-white border border-[#e8ebf3] rounded-xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] flex items-center w-full max-w-[800px] sm:w-[800px] z-10">
          {/* "Get started" Action Button */}
          <button className="flex-1 bg-[#0c062c] hover:bg-[#1a114b] text-white font-medium text-base py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer font-inter">
            Get started
          </button>

          {/* Time Counter & Tracker Controls (Centered with equal left and right spacing) */}
          <div className="flex items-center justify-center gap-8 px-10 min-w-[280px]">
            <span className="text-xl font-medium text-[#3b385a] min-w-[40px] text-center">
              {formatTimer(time)}
            </span>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="w-9 h-9 rounded-full bg-[#7be0c1] hover:bg-[#5bc8a7] flex items-center justify-center text-[#0c062c] transition-all duration-300 cursor-pointer"
            >
              {isTimerRunning ? (
                <Pause className="w-3.5 h-3.5 fill-current text-[#0c062c]" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current text-[#0c062c] ml-0.5" />
              )}
            </button>

            {/* Calendar Icon */}
            <button className="text-[#a5a3be] hover:text-[#0c062c] transition-colors cursor-pointer duration-300">
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cursor click icon */}
        <div className="absolute -bottom-8 -right-8 w-12 h-12 pointer-events-none z-30 animate-pulse">
          <Image
            src={CursorIcon}
            alt="cursor indicator"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Dynamic Animated Headline Row */}
      <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold font-grifter text-[#0c062c] text-center leading-[1.12] max-w-4xl mx-auto z-10 min-h-[75px]">
        tool you'll{" "}
        {mounted && (
          <span className="text-[#ff5555]">
            <TypeAnimation
              sequence={[
                "just admire.",
                2500,
                "be addicted to.",
                2500,
                "actually love.",
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>
        )}
      </h2>

      {/* Subtitle Description */}
      <p className="text-sm sm:text-base text-[#717088] font-medium text-center max-w-lg mx-auto mt-6 font-roboto z-10">
        Functional and practical. Start tracking your progress in the most
        efficient way possible.
      </p>

      {/* Absolutely Positioned Decorative Layout Elements */}

      {/* Blue Floral Doodle (Right side) */}
      <div className="absolute -right-[3%] top-[40%] w-16 h-16 md:w-30 md:h-30 pointer-events-none opacity-80">
        <Image src={GreenDoodle} alt="" fill className="object-contain" />
      </div>

      {/* Green Splash Doodle (Left side) */}
      <div className="absolute -left-[3%] top-[60%] w-14 h-14 md:w-30 md:h-30 pointer-events-none opacity-80">
        <Image src={BlueDoodle} alt="" fill className="object-contain" />
      </div>

      {/* Handdrawn Sketch Page Card Left */}
      <div className="absolute left-[12%] bottom-[12%] w-12 h-12 md:w-16 md:h-16 pointer-events-none transform -rotate-12">
        <Image src={PageLeft} alt="" fill className="object-contain" />
      </div>

      {/* Handdrawn Sketch Page Card Right */}
      <div className="absolute right-[10%] bottom-[25%] w-12 h-12 md:w-16 md:h-16 pointer-events-none transform rotate-12">
        <Image src={PageRight} alt="" fill className="object-contain" />
      </div>

      {/* Cookie Badge (Bottom Left) */}
      <div className="absolute bottom-6 left-10 w-14 h-14 bg-white border border-[#e8ebf3] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
        <div className="relative w-8 h-8">
          <Image
            src={CookieIcon}
            alt="Cookie settings"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Abstract handdrawn marker line under the heading context */}
      <div className="absolute bottom-12 left-[50%] -translate-x-[50%] w-50 h-6 pointer-events-none">
        <Image src={LinesScribble} alt="" fill className="object-contain" />
      </div>
    </section>
  );
};

export default DogSection;
