"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  Smile,
  MessageSquare,
  Folder,
  Target,
  Calendar,
  CheckSquare,
  Users,
  BarChart2,
  HelpCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Profile Avatars dummy data
const profiles = {
  lia: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  john: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  ronald:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
};

const CombinedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"deadlines" | "news">("deadlines");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Animations
      mm.add("(min-width: 768px)", () => {
        // Card 1: We Care (Animate from top-left Hero area down to position)
        gsap.fromTo(
          ".animate-card-1",
          { y: -320, x: -100, rotation: -8, scale: 1.02 },
          {
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center-=100",
              scrub: 1.2,
            },
          },
        );

        // Card 2: Drive Growth (Animate from center Hero area down to position)
        gsap.fromTo(
          ".animate-card-2",
          { y: -230, x: -50, rotation: 0, scale: 1.02 },
          {
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center-=100",
              scrub: 1.2,
            },
          },
        );

        // Card 3: Promote Sustainability (Animate from top-right Hero area down to position)
        gsap.fromTo(
          ".animate-card-3",
          { y: -320, x: 20, rotation: 8, scale: 1.02 },
          {
            y: 0,
            x: 0,
            rotation: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center-=100",
              scrub: 1.2,
            },
          },
        );

        // Card 4: Active Goals for 2024 (Animate in from the left)
        gsap.fromTo(
          ".animate-card-4",
          { x: -180, y: 150, opacity: 1 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top center+=100",
              end: "center center",
              scrub: 1.2,
            },
          },
        );

        // Card 5: Upcoming Deadlines (Animate in from the right)
        gsap.fromTo(
          ".animate-card-5",
          { x: 180, y: 150, opacity: 1 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top center+=100",
              end: "center center",
              scrub: 1.2,
            },
          },
        );

        // Card 6: To Dos (Animate in from bottom-left)
        gsap.fromTo(
          ".animate-card-6",
          { x: -120, y: 220, opacity: 1 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "center bottom",
              end: "bottom center+=100",
              scrub: 1.2,
            },
          },
        );

        // Card 7: Discover People (Animate in from bottom-right)
        gsap.fromTo(
          ".animate-card-7",
          { x: 120, y: 220, opacity: 1 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "center bottom",
              end: "bottom center+=100",
              scrub: 1.2,
            },
          },
        );
      });

      // Mobile Animations (Prevents overflow issues)
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".animate-card-1",
          { y: -180, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".animate-card-2",
          { y: -150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".animate-card-3",
          { y: -120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top bottom",
              end: "top center",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          [".animate-card-4", ".animate-card-5"],
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "top center+=150",
              end: "center center",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          [".animate-card-6", ".animate-card-7"],
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dashboard-container",
              start: "center bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up triggers on unmount
  }, []);

  return (
    // Outer frame handles layout container setup
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-white overflow-x-hidden overflow-y-auto relative no-scrollbar"
    >
      {/* Styles injected to remove default scrollbars globally */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        *::-webkit-scrollbar,
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        *, html, body, .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `,
        }}
      />

      {/* =========================================================
          HERO SECTION (Lower stacking index z-0)
         ========================================================= */}
      <section className="relative bg-white py-16 px-4 font-['Roboto'] flex flex-col items-center text-center z-0 overflow-x-hidden">
        {/* Badge */}
        <div className="mb-3">
          <span className="bg-[#f0f2ff] text-[#6747d8] px-4 py-1.5 rounded-full text-[16px] font-medium border border-[#e0e4ff] mb-0">
            One App. One AI. Zero Busywork.
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[40px] md:text-[56px] font-black font-inter leading-[1] max-w-5xl mb-4 mt-0">
          One app to{" "}
          <span className="relative inline-block">
            <span className="relative z-10">run,</span>
            <span className="absolute bottom-1 left-0 w-full h-[40%] bg-[#FFEE99] -z-0"></span>
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">grow,</span>
            <span className="absolute bottom-1 left-0 w-full h-[40%] bg-[#FFEE99] -z-0"></span>
          </span>{" "}
          and <br />
          <span className="relative inline-block leading-none">
            <span className="relative z-10">automate your business</span>
            <span className="absolute bottom-1 left-0 w-full h-[35%] bg-[#FFEE99] -z-0"></span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#1a1a1a] text-lg md:text-xl max-w-2xl mb-8 mt-0 font-normal">
          Work with clients, manage projects, build forms, take bookings, send
          proposals, get paid, and automate everything{" "}
          <span className="font-bold">with Super Work AI.</span>
        </p>

        {/* Button */}
        <button className="bg-[#3b00d4] hover:bg-[#2e00a5] text-white px-4 py-2.5 rounded-xl text-base font-bold flex items-center gap-2 transition-all duration-300 shadow-lg mb-4 hover:-translate-y-1 cursor-pointer">
          Preview Dashboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        {/* Trust Badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-600 font-medium font-roboto">
              4.6
            </span>
          </div>

          <div className="flex items-center gap-2 ml-1">
            <div className="w-5 h-5 bg-[#00bed6] rounded-sm transform rotate-45"></div>
            <div className="w-5 h-5 bg-[#da552f] rounded-full flex items-center justify-center text-[10px] text-white font-bold italic">
              P
            </div>
            <div className="w-5 h-5 bg-[#ff492c] rounded-sm flex items-center justify-center text-[10px] text-white font-bold">
              G2
            </div>
            <div className="w-5 h-5 overflow-hidden">
              <svg viewBox="0 0 24 24" className="text-blue-500 fill-current">
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DASHBOARD SECTION (z-30 stacking with overflow-visible to prevent clipping flying cards)
         ========================================================= */}
      <section className="dashboard-container relative w-full min-h-screen bg-[#fff] flex items-center justify-center p-4 py-16 md:py-10 select-none z-30">
        {/* Left Pink Doodle Shape */}
        <div className="absolute left-[-4%] bottom-[12%] w-[280px] h-[280px] pointer-events-none opacity-80 rotate-[12deg]">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M20,180 Q60,100 180,120 Q160,200 20,180 Z"
              fill="#ff7bb4"
            />
            <path
              d="M30,170 C70,110 160,130 160,140"
              stroke="#000"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
            />
          </svg>
        </div>

        {/* Right Orange Doodle Shape */}
        <div className="absolute right-[-4%] top-[22%] w-[380px] h-[240px] pointer-events-none opacity-80 -rotate-[8deg]">
          <svg
            viewBox="0 0 300 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path d="M10,80 Q150,10 290,90 Q180,190 10,80 Z" fill="#ff8555" />
            <path
              d="M20,90 Q140,30 270,100"
              stroke="#000"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
            />
          </svg>
        </div>

        {/* Main Dashboard Frame Container */}
        <div className="relative w-full max-w-7xl bg-[#e6ebed] rounded-3xl flex z-10">
          {/* LEFT SIDEBAR */}
          <aside className="w-[64px] bg-[#111e24] flex flex-col items-center py-6 justify-between text-[#8fa0a6] shrink-0 rounded-l-3xl">
            <div className="flex flex-col items-center gap-6 w-full">
              {/* Sidebar Logo */}
              <div className="w-8 h-8 rounded-full bg-[#ff7bb4] relative flex items-center justify-center overflow-hidden cursor-pointer">
                <div className="absolute left-0 top-0 w-4 h-8 bg-[#0b4d53]"></div>
                <div className="absolute right-0 bottom-0 w-4 h-4 bg-[#ff8555]"></div>
              </div>

              {/* Sidebar Icons */}
              <div className="flex flex-col items-center gap-5 w-full mt-4">
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <BarChart2 className="w-5 h-5 rotate-90" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <Folder className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer text-white">
                  <Target className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <Smile className="w-5 h-5 rotate-180" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <CheckSquare className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
                  <BarChart2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bottom Help Icon */}
            <button className="p-2 hover:bg-[#1a2c34] hover:text-white rounded-lg transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5" />
            </button>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 flex flex-col p-6 gap-5 overflow-visible">
            {/* Top Header Bar */}
            <header className="flex items-center justify-between gap-4 pb-2">
              <div className="flex items-center gap-2 bg-transparent text-[#71828a] max-w-sm w-full">
                <Search className="w-4 h-4 text-[#5e6e76]" />
                <input
                  type="text"
                  placeholder="Search for people or interests"
                  className="bg-transparent border-none focus:outline-none text-sm placeholder-[#71828a] w-full"
                />
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-1.5 text-[#5e6e76] hover:text-[#111e24] cursor-pointer">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff8555] rounded-full"></span>
                </button>

                <button className="bg-[#0b4d53] hover:bg-[#073337] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer transition-colors">
                  Create
                </button>

                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 cursor-pointer">
                  <img
                    src={profiles.lia}
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </header>

            {/* Header Row: Cards 1, 2, 3 (Set container to relative and z-50 to stack above Hero elements) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-50">
              {/* Card 1: We Care */}
              <div className="animate-card-1 z-50 bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3 shadow-md md:shadow-none relative">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#0b4d53]">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111e24]">We care.</h4>
                  <p className="text-[10px] text-[#5e6e76]">
                    Foster inclusive culture.
                  </p>
                </div>
              </div>

              {/* Card 2: Drive Growth */}
              <div className="animate-card-2 z-50 bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3 shadow-md md:shadow-none relative">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#ff8555]">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111e24]">
                    Drive Growth.
                  </h4>
                  <p className="text-[10px] text-[#5e6e76]">
                    Expand market reach.
                  </p>
                </div>
              </div>

              {/* Card 3: Promote Sustainability */}
              <div className="animate-card-3 z-50 bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3 relative overflow-visible shadow-md md:shadow-none">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#0b4d53]">
                  <HelpCircle className="w-5 h-5 rotate-45" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111e24]">
                    Promote Sustainability
                  </h4>
                  <p className="text-[10px] text-[#5e6e76]">
                    Implement eco-friendly practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row: Card 4 (Active Goals) and Card 5 (Upcoming Deadlines) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 overflow-visible">
              {/* Card 4: Active Goals for 2024 */}
              <div className="animate-card-4 lg:col-span-5 bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#111e24] mb-4">
                    Active goals for 2024
                  </h3>

                  <div className="flex items-center gap-6 py-2">
                    {/* Goal SVG Concentric Rings */}
                    <div className="relative w-32 h-32 shrink-0">
                      <svg
                        viewBox="0 0 160 160"
                        className="w-full h-full transform -rotate-90"
                      >
                        {/* Grey Background circles */}
                        <circle
                          cx="80"
                          cy="80"
                          r="65"
                          stroke="#edf1f3"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="50"
                          stroke="#edf1f3"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="35"
                          stroke="#edf1f3"
                          strokeWidth="8"
                          fill="transparent"
                        />

                        {/* Concentric Progress Paths */}
                        <circle
                          cx="80"
                          cy="80"
                          r="65"
                          stroke="#0d9488"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 65}
                          strokeDashoffset={2 * Math.PI * 65 * (1 - 0.744)}
                          strokeLinecap="round"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="50"
                          stroke="#f59e0b"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 50}
                          strokeDashoffset={2 * Math.PI * 50 * (1 - 0.214)}
                          strokeLinecap="round"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="35"
                          stroke="#f43f5e"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 35}
                          strokeDashoffset={2 * Math.PI * 35 * (1 - 0.071)}
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Central Text inside donut chart */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-0 text-center">
                        <span className="text-base font-extrabold text-[#111e24]">
                          14
                        </span>
                        <span className="text-[10px] text-[#71828a] font-bold">
                          Goals
                        </span>
                      </div>
                    </div>

                    {/* Goal stats items */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#ccfbf1] text-[#0d9488] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          74.4%
                        </span>
                        <span className="text-xs font-semibold text-[#111e24]">
                          10 on target
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          21.4%
                        </span>
                        <span className="text-xs font-semibold text-[#111e24]">
                          3 progressing
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          7.1%
                        </span>
                        <span className="text-xs font-semibold text-[#111e24]">
                          1 off target
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goal timeframe selector */}
                <div className="flex items-center bg-[#f0f4f6] rounded-full p-1 mt-4 gap-1">
                  <button className="flex-1 py-1 text-[11px] font-bold rounded-full bg-white text-[#111e24] shadow-sm cursor-pointer">
                    All
                  </button>
                  <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">
                    Q1
                  </button>
                  <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">
                    Q2
                  </button>
                  <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">
                    Q3
                  </button>
                  <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">
                    Q4
                  </button>
                </div>
              </div>

              {/* Card 5: Upcoming Deadlines */}
              <div className="animate-card-5 lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Card Header with tabs */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-extrabold text-[#111e24]">
                      Upcoming Deadlines
                    </h3>

                    <div className="flex items-center bg-[#f0f4f6] rounded-full p-0.5 gap-1">
                      <button
                        onClick={() => setActiveTab("deadlines")}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full cursor-pointer transition-all ${activeTab === "deadlines" ? "bg-white text-[#111e24] shadow-sm" : "text-[#71828a]"}`}
                      >
                        Deadlines
                      </button>
                      <button
                        onClick={() => setActiveTab("news")}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full cursor-pointer transition-all ${activeTab === "news" ? "bg-white text-[#111e24] shadow-sm" : "text-[#71828a]"}`}
                      >
                        News feed
                      </button>
                    </div>
                  </div>

                  {/* Deadlines List */}
                  <div className="flex flex-col divide-y divide-[#edf1f3]">
                    <div className="flex items-center justify-between py-3">
                      <span className="text-xs font-semibold text-[#111e24]">
                        1:1 meeting with Cami Gorton at 10:00
                      </span>
                      <span className="bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Overdue by a day
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-xs font-semibold text-[#111e24]">
                        Submit Payroll for Processing
                      </span>
                      <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Due in 2 days
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-xs font-semibold text-[#111e24]">
                        Complete Compliance Training Report
                      </span>
                      <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Due in 2 days
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-xs font-semibold text-[#111e24]">
                        Review and Update Employee Handbook
                      </span>
                      <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Due in 2 days
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Calendar Link */}
                <button className="flex items-center gap-1.5 text-xs font-bold text-[#5e6e76] hover:text-[#111e24] mt-4 cursor-pointer self-start">
                  <Calendar className="w-4 h-4" />
                  View calendar
                </button>
              </div>
            </div>

            {/* Bottom Row: Card 6 (To dos) and Card 7 (Discover People) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 overflow-visible">
              {/* Card 6: To dos */}
              <div className="animate-card-6 lg:col-span-5 bg-[#dae9eb] rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-extrabold text-[#0b4d53] mb-4">
                  To dos
                </h3>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between bg-white/40 p-2.5 rounded-xl border border-white/40">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-[#0b4d53]/30"></span>
                      <span className="text-xs font-bold text-[#0b4d53]/60">
                        Type a new task here...
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#0b4d53]/10 text-[#0b4d53] px-2.5 py-1 rounded-lg">
                      Schedule
                    </span>
                  </div>

                  {/* Checked items */}
                  <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                      </span>
                      <span className="text-xs font-bold text-[#0b4d53]">
                        Update handbook, company policies.
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">
                      Due in 2 days
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                      </span>
                      <span className="text-xs font-bold text-[#0b4d53]">
                        Plan sessions, gather feedback.
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">
                      Due in 2 days
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                      </span>
                      <span className="text-xs font-bold text-[#0b4d53]">
                        Process payroll, update databases.
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">
                      Due in 3 days
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                      </span>
                      <span className="text-xs font-bold text-[#0b4d53]">
                        Handle inquiries, benefits.
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">
                      Due in 3 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 7: Discover People */}
              <div className="animate-card-7 lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm overflow-visible flex flex-col justify-between">
                <h3 className="text-sm font-extrabold text-[#111e24] mb-3">
                  Discover people
                </h3>

                <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center w-full min-h-[160px] gap-4 py-2">
                  {/* Lia Joy */}
                  <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-extrabold text-[#0d9488] bg-[#ccfbf1] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        📍 HQ
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                        <img
                          src={profiles.lia}
                          alt="Lia Joy"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h5 className="text-[11px] font-bold text-[#111e24]">
                        Lia Joy
                      </h5>
                      <p className="text-[9px] text-[#71828a] mb-2">
                        Graphic Designer
                      </p>
                      <span className="text-[8px] font-bold border border-[#edf1f3] px-2 py-1 rounded-lg text-[#5e6e76]">
                        Social media management
                      </span>
                    </div>
                  </div>

                  {/* John Smith */}
                  <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-extrabold text-[#0b4d53] bg-[#0b4d53]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        🌐 Remote
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                        <img
                          src={profiles.john}
                          alt="John Smith"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h5 className="text-[11px] font-bold text-[#111e24]">
                        John Smith
                      </h5>
                      <p className="text-[9px] text-[#71828a] mb-2">
                        Software Engineer
                      </p>
                      <div className="flex gap-1.5">
                        <span className="text-[8px] font-bold border border-[#edf1f3] px-1.5 py-0.5 rounded-md text-[#5e6e76]">
                          Engineering
                        </span>
                        <span className="text-[8px] font-bold border border-[#edf1f3] px-1.5 py-0.5 rounded-md text-[#5e6e76]">
                          Leadership
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ronald Rich */}
                  <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-extrabold text-[#0b4d53] bg-[#0b4d53]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        🌐 Remote
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                        <img
                          src={profiles.ronald}
                          alt="Ronald Rich"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h5 className="text-[11px] font-bold text-[#111e24]">
                        Ronald Rich
                      </h5>
                      <p className="text-[9px] text-[#71828a] mb-2">
                        HR Director, People
                      </p>
                      <div className="flex gap-1.5">
                        <span className="text-[8px] font-bold border border-[#edf1f3] px-1.5 py-0.5 rounded-md text-[#5e6e76]">
                          Coaching
                        </span>
                        <span className="text-[8px] font-bold border border-[#edf1f3] px-1.5 py-0.5 rounded-md text-[#5e6e76]">
                          Mentoring
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default CombinedPage;
