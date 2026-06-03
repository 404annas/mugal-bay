"use client";

import React, { useState } from 'react';
import { 
  Search, Bell, Smile, MessageSquare, Folder, Target, 
  Calendar, CheckSquare, Users, BarChart2, HelpCircle 
} from 'lucide-react';

// Profile Avatars dummy data
const profiles = {
  lia: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  john: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  ronald: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deadlines' | 'news'>('deadlines');

  return (
    // Added overflow-x-hidden to prevent horizontal scrolling from background doodle elements
    <section className="relative w-full min-h-screen bg-[#fff] flex items-center justify-center p-4 py-16 md:py-10 select-none font-sans overflow-x-hidden">
      
      {/* 1. Left Pink Doodle Shape */}
      <div className="absolute left-[-4%] bottom-[12%] w-[280px] h-[280px] pointer-events-none opacity-80 rotate-[12deg]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M20,180 Q60,100 180,120 Q160,200 20,180 Z" fill="#ff7bb4" />
          <path d="M30,170 C70,110 160,130 160,140" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      {/* 2. Right Orange Doodle Shape */}
      <div className="absolute right-[-4%] top-[22%] w-[380px] h-[240px] pointer-events-none opacity-80 -rotate-[8deg]">
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10,80 Q150,10 290,90 Q180,190 10,80 Z" fill="#ff8555" />
          <path d="M20,90 Q140,30 270,100" stroke="#000" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </svg>
      </div>

      {/* Main Dashboard Frame Container */}
      <div className="relative w-full max-w-7xl bg-[#e6ebed] rounded-3xl flex overflow-hidden z-10">
        
        {/* =========================================================
            LEFT SIDEBAR
           ========================================================= */}
        <aside className="w-[64px] bg-[#111e24] flex flex-col items-center py-6 justify-between text-[#8fa0a6] shrink-0">
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

        {/* =========================================================
            MAIN CONTENT AREA
           ========================================================= */}
        <main className="flex-1 flex flex-col p-6 gap-5">
          
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
                <img src={profiles.lia} alt="User Avatar" className="object-cover w-full h-full" />
              </div>
            </div>
          </header>

          {/* Header Row: Cards 1, 2, 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: We Care */}
            <div className="bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#0b4d53]">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111e24]">We care.</h4>
                <p className="text-[10px] text-[#5e6e76]">Foster inclusive culture.</p>
              </div>
            </div>

            {/* Card 2: Drive Growth */}
            <div className="bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#ff8555]">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111e24]">Drive Growth.</h4>
                <p className="text-[10px] text-[#5e6e76]">Expand market reach.</p>
              </div>
            </div>

            {/* Card 3: Promote Sustainability */}
            <div className="bg-[#dae1e5] border border-white/50 p-3 px-4 rounded-xl flex items-center gap-3 relative overflow-visible">
              <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#0b4d53]">
                <HelpCircle className="w-5 h-5 rotate-45" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111e24]">Promote Sustainability</h4>
                <p className="text-[10px] text-[#5e6e76]">Implement eco-friendly practices.</p>
              </div>
            </div>
          </div>

          {/* Middle Row: Card 4 (Active Goals) and Card 5 (Upcoming Deadlines) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Card 4: Active Goals for 2024 */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-[#111e24] mb-4">Active goals for 2024</h3>
                
                <div className="flex items-center gap-6 py-2">
                  {/* Goal SVG Concentric Rings */}
                  <div className="relative w-32 h-32 shrink-0">
                    <svg viewBox="0 0 160 160" className="w-full h-full transform -rotate-90">
                      {/* Grey Background circles */}
                      <circle cx="80" cy="80" r="65" stroke="#edf1f3" strokeWidth="8" fill="transparent" />
                      <circle cx="80" cy="80" r="50" stroke="#edf1f3" strokeWidth="8" fill="transparent" />
                      <circle cx="80" cy="80" r="35" stroke="#edf1f3" strokeWidth="8" fill="transparent" />

                      {/* Concentric Progress Paths */}
                      {/* Ring 1 (Teal) - 74.4% */}
                      <circle 
                        cx="80" cy="80" r="65" 
                        stroke="#0d9488" strokeWidth="8" fill="transparent" 
                        strokeDasharray={2 * Math.PI * 65} 
                        strokeDashoffset={2 * Math.PI * 65 * (1 - 0.744)}
                        strokeLinecap="round"
                      />
                      {/* Ring 2 (Yellow) - 21.4% */}
                      <circle 
                        cx="80" cy="80" r="50" 
                        stroke="#f59e0b" strokeWidth="8" fill="transparent" 
                        strokeDasharray={2 * Math.PI * 50} 
                        strokeDashoffset={2 * Math.PI * 50 * (1 - 0.214)}
                        strokeLinecap="round"
                      />
                      {/* Ring 3 (Coral) - 7.1% */}
                      <circle 
                        cx="80" cy="80" r="35" 
                        stroke="#f43f5e" strokeWidth="8" fill="transparent" 
                        strokeDasharray={2 * Math.PI * 35} 
                        strokeDashoffset={2 * Math.PI * 35 * (1 - 0.071)}
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Central Text inside donut chart */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-0 text-center">
                      <span className="text-base font-extrabold text-[#111e24]">14</span>
                      <span className="text-[10px] text-[#71828a] font-bold">Goals</span>
                    </div>
                  </div>

                  {/* Goal stats items */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#ccfbf1] text-[#0d9488] text-[10px] font-bold px-2 py-0.5 rounded-full">74.4%</span>
                      <span className="text-xs font-semibold text-[#111e24]">10 on target</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">21.4%</span>
                      <span className="text-xs font-semibold text-[#111e24]">3 progressing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold px-2 py-0.5 rounded-full">7.1%</span>
                      <span className="text-xs font-semibold text-[#111e24]">1 off target</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goal timeframe selector */}
              <div className="flex items-center bg-[#f0f4f6] rounded-full p-1 mt-4 gap-1">
                <button className="flex-1 py-1 text-[11px] font-bold rounded-full bg-white text-[#111e24] shadow-sm cursor-pointer">All</button>
                <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">Q1</button>
                <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">Q2</button>
                <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">Q3</button>
                <button className="flex-1 py-1 text-[11px] font-bold rounded-full text-[#71828a] hover:text-[#111e24] cursor-pointer">Q4</button>
              </div>
            </div>

            {/* Card 5: Upcoming Deadlines */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                {/* Card Header with tabs */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-extrabold text-[#111e24]">Upcoming Deadlines</h3>
                  
                  <div className="flex items-center bg-[#f0f4f6] rounded-full p-0.5 gap-1">
                    <button 
                      onClick={() => setActiveTab('deadlines')}
                      className={`px-3 py-1 text-[11px] font-bold rounded-full cursor-pointer transition-all ${activeTab === 'deadlines' ? 'bg-white text-[#111e24] shadow-sm' : 'text-[#71828a]'}`}
                    >
                      Deadlines
                    </button>
                    <button 
                      onClick={() => setActiveTab('news')}
                      className={`px-3 py-1 text-[11px] font-bold rounded-full cursor-pointer transition-all ${activeTab === 'news' ? 'bg-white text-[#111e24] shadow-sm' : 'text-[#71828a]'}`}
                    >
                      News feed
                    </button>
                  </div>
                </div>

                {/* Deadlines List */}
                <div className="flex flex-col divide-y divide-[#edf1f3]">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-semibold text-[#111e24]">1:1 meeting with Cami Gorton at 10:00</span>
                    <span className="bg-[#fee2e2] text-[#ef4444] text-[10px] font-bold px-2 py-0.5 rounded-full">Overdue by a day</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-semibold text-[#111e24]">Submit Payroll for Processing</span>
                    <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">Due in 2 days</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-semibold text-[#111e24]">Complete Compliance Training Report</span>
                    <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">Due in 2 days</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs font-semibold text-[#111e24]">Review and Update Employee Handbook</span>
                    <span className="bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full">Due in 2 days</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Card 6: To dos */}
            <div className="lg:col-span-5 bg-[#dae9eb] rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-[#0b4d53] mb-4">To dos</h3>
              
              <div className="flex flex-col gap-3">
                {/* Empty check-input */}
                <div className="flex items-center justify-between bg-white/40 p-2.5 rounded-xl border border-white/40">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#0b4d53]/30"></span>
                    <span className="text-xs font-bold text-[#0b4d53]/60">Type a new task here...</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#0b4d53]/10 text-[#0b4d53] px-2.5 py-1 rounded-lg">Schedule</span>
                </div>

                {/* Checked items */}
                <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                    </span>
                    <span className="text-xs font-bold text-[#0b4d53]">Update handbook, company policies.</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">Due in 2 days</span>
                </div>

                <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                    </span>
                    <span className="text-xs font-bold text-[#0b4d53]">Plan sessions, gather feedback.</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">Due in 2 days</span>
                </div>

                <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                    </span>
                    <span className="text-xs font-bold text-[#0b4d53]">Process payroll, update databases.</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">Due in 3 days</span>
                </div>

                <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]"></span>
                    </span>
                    <span className="text-xs font-bold text-[#0b4d53]">Handle inquiries, benefits.</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#ccfbf1] text-[#0d9488] px-2 py-0.5 rounded-full">Due in 3 days</span>
                </div>
              </div>
            </div>

            {/* Card 7: Discover People (Contains stack cards 8, 9, 10) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm overflow-hidden flex flex-col justify-between">
              <h3 className="text-sm font-extrabold text-[#111e24] mb-3">Discover people</h3>
              
              {/* Added flex-wrap to prevent horizontal layout breaks on narrower screens */}
              <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center w-full min-h-[160px] gap-4 py-2">
                
                {/* Card 8: Lia Joy (Tilted left) */}
                <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-extrabold text-[#0d9488] bg-[#ccfbf1] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      📍 HQ
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                      <img src={profiles.lia} alt="Lia Joy" className="object-cover w-full h-full" />
                    </div>
                    <h5 className="text-[11px] font-bold text-[#111e24]">Lia Joy</h5>
                    <p className="text-[9px] text-[#71828a] mb-2">Graphic Designer</p>
                    <span className="text-[8px] font-bold border border-[#edf1f3] px-2 py-1 rounded-lg text-[#5e6e76]">
                      Social media management
                    </span>
                  </div>
                </div>

                {/* Card 9: John Smith (Tilted right) */}
                <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-extrabold text-[#0b4d53] bg-[#0b4d53]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      🌐 Remote
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                      <img src={profiles.john} alt="John Smith" className="object-cover w-full h-full" />
                    </div>
                    <h5 className="text-[11px] font-bold text-[#111e24]">John Smith</h5>
                    <p className="text-[9px] text-[#71828a] mb-2">Software Engineer</p>
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

                {/* Card 10: Ronald Rich (Stacked slightly back or flush) */}
                <div className="w-[200px] bg-white rounded-xl border border-[#edf1f3] p-3 cursor-pointer shrink-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-extrabold text-[#0b4d53] bg-[#0b4d53]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      🌐 Remote
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mb-1.5 border border-[#edf1f3]">
                      <img src={profiles.ronald} alt="Ronald Rich" className="object-cover w-full h-full" />
                    </div>
                    <h5 className="text-[11px] font-bold text-[#111e24]">Ronald Rich</h5>
                    <p className="text-[9px] text-[#71828a] mb-2">HR Director, People</p>
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

      {/* Floating Logo Badge (Bottom Left Viewport Corner) */}
      {/* <div className="absolute bottom-6 left-6 w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border border-[#edf1f3]">
        <div className="w-5 h-5 relative flex flex-col gap-0.5">
          <div className="w-2.5 h-2 bg-[#0b4d53] rounded-sm"></div>
          <div className="w-5 h-2.5 bg-[#ff8555] rounded-sm"></div>
        </div>
      </div> */}

    </section>
  );
};

export default Dashboard;