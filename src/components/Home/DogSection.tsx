"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Calendar } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Asset Imports
import Arrow1 from '@/assets/arrow1.svg';
import Arrow2 from '@/assets/arrow2.svg';
import Dog from '@/assets/dog.svg';
import GreenDoodle from '@/assets/bluedoodle.svg'; // Blue floral-like doodle on right
import BlueDoodle from '@/assets/greendoodle.svg'; // Green splash-like doodle on left
import PageLeft from '@/assets/pageleft.svg';
import PageRight from '@/assets/pageright.svg';
import StartText from '@/assets/start.svg';
import StopText from '@/assets/stop.svg';
import ContinueText from '@/assets/continue.svg';
import LinesScribble from '@/assets/lines.svg';
import CookieIcon from '@/assets/cookie.svg';
import CursorIcon from '@/assets/cursor.svg';

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

    const pad = (num: number) => String(num).padStart(2, '0');
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-[#f4f4f6] flex flex-col items-center justify-center overflow-hidden px-6 py-20 select-none">
      
      {/* Top hand-drawn process path (start -> stop -> continue) */}
      <div className="flex items-center gap-3 mb-10 z-10 scale-90 sm:scale-100">
        <Image src={StartText} alt="start" width={42} height={18} />
        <Image src={Arrow1} alt="arrow" width={22} height={10} className="opacity-80" />
        <Image src={StopText} alt="stop" width={38} height={18} />
        <Image src={Arrow2} alt="arrow" width={22} height={10} className="opacity-80" />
        <Image src={ContinueText} alt="continue" width={72} height={18} />
      </div>

      {/* Main Heading Text */}
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-[900] text-[#0c062c] text-center tracking-tight leading-[1.12] max-w-4xl mx-auto z-10">
        A new project <span className="inline-block w-[120px] sm:w-[150px]"></span> management
      </h1>

      {/* Interactive Widget Box + Peeking Dog container */}
      <div className="relative mt-8 mb-6 z-20">
        
        {/* Peeking Dog Illustration */}
        <div className="absolute -top-[106px] left-[50%] -translate-x-[50%] w-[180px] h-[115px] pointer-events-none z-0">
          <Image 
            src={Dog} 
            alt="Dog illustration" 
            fill 
            className="object-contain"
            priority
          />
        </div>

        {/* White Capsule Tracker Wrapper */}
        <div className="relative bg-white border border-[#e8ebf3] rounded-2xl p-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] flex items-center w-full max-w-[460px] sm:w-[460px] z-10">
          
          {/* "Get started" Action Button */}
          <button className="flex-1 bg-[#0c062c] hover:bg-[#1a114b] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all">
            Get started
          </button>

          {/* Vertical Separator */}
          <div className="w-[1px] h-8 bg-[#e8ebf3] mx-2" />

          {/* Time Counter & Tracker Controls */}
          <div className="flex items-center gap-3.5 px-3">
            <span className="font-mono text-sm font-semibold text-[#4a4864] min-w-[62px]">
              {formatTimer(time)}
            </span>
            
            {/* Play/Pause Button */}
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="w-8 h-8 rounded-full bg-[#7be0c1] hover:bg-[#5bc8a7] flex items-center justify-center text-[#0c062c] transition-all"
            >
              {isTimerRunning ? (
                <Pause className="w-3.5 h-3.5 fill-current text-[#0c062c]" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current text-[#0c062c] ml-0.5" />
              )}
            </button>

            {/* Calendar Icon */}
            <button className="text-[#a5a3be] hover:text-[#0c062c] transition-colors">
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cursor click icon */}
        <div className="absolute -bottom-8 -right-8 w-12 h-12 pointer-events-none z-30 animate-pulse">
          <Image src={CursorIcon} alt="cursor indicator" fill className="object-contain" />
        </div>
      </div>

      {/* Dynamic Animated Headline Row */}
      <h2 className="text-4xl sm:text-5xl md:text-[64px] font-[900] text-[#0c062c] text-center tracking-tight leading-[1.12] max-w-4xl mx-auto z-10 min-h-[75px]">
        tool you'll{' '}
        {mounted && (
          <span className="text-[#ff5555]">
            <TypeAnimation
              sequence={[
                'just admire.',
                2500,
                'be addicted to.',
                2500,
                'actually love.',
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
      <p className="text-base sm:text-[17px] text-[#717088] font-medium text-center max-w-lg mx-auto mt-6 leading-relaxed z-10">
        Functional and practical. Start tracking your progress in the most efficient way possible.
      </p>

      {/* Absolutely Positioned Decorative Layout Elements */}
      
      {/* Blue Floral Doodle (Right side) */}
      <div className="absolute right-[5%] top-[25%] w-16 h-16 md:w-20 md:h-20 pointer-events-none opacity-80">
        <Image src={GreenDoodle} alt="" fill className="object-contain" />
      </div>

      {/* Green Splash Doodle (Left side) */}
      <div className="absolute left-[5%] top-[50%] w-14 h-14 md:w-16 md:h-16 pointer-events-none opacity-80">
        <Image src={BlueDoodle} alt="" fill className="object-contain" />
      </div>

      {/* Handdrawn Sketch Page Card Left */}
      <div className="absolute left-[15%] bottom-[18%] w-12 h-12 md:w-14 md:h-14 pointer-events-none transform -rotate-12">
        <Image src={PageLeft} alt="" fill className="object-contain" />
      </div>

      {/* Handdrawn Sketch Page Card Right */}
      <div className="absolute right-[18%] bottom-[25%] w-12 h-12 md:w-14 md:h-14 pointer-events-none transform rotate-12">
        <Image src={PageRight} alt="" fill className="object-contain" />
      </div>

      {/* Cookie Badge (Bottom Left) */}
      <div className="absolute bottom-6 left-6 w-11 h-11 bg-white border border-[#e8ebf3] rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-transform">
        <div className="relative w-6 h-6">
          <Image src={CookieIcon} alt="Cookie settings" fill className="object-contain" />
        </div>
      </div>

      {/* Abstract handdrawn marker line under the heading context */}
      <div className="absolute bottom-16 left-[50%] -translate-x-[50%] w-36 h-6 pointer-events-none">
        <Image src={LinesScribble} alt="" fill className="object-contain" />
      </div>

    </section>
  );
};

export default DogSection;