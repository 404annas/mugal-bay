import React from 'react';

const Hero2 = () => {
  return (
    <section className="bg-white py-20 px-4 font-['Roboto'] flex flex-col items-center text-center">
      {/* Badge */}
      <div className="mb-3">
        <span className="bg-[#f0f2ff] text-[#6d7196] px-4 py-1.5 rounded-full text-[16px] font-medium border border-[#e0e4ff] mb-0">
          One App. One AI. Zero Busywork.
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[40px] md:text-[56px] font-black font-inter leading-[1.1] tracking-tight text-black max-w-5xl mb-4 mt-0">
        One app to <span className="relative inline-block">
          <span className="relative z-10">run,</span>
          <span className="absolute bottom-1 left-0 w-full h-[40%] bg-[#c0b6e4] -z-0"></span>
        </span> <span className="relative inline-block">
          <span className="relative z-10">grow,</span>
          <span className="absolute bottom-1 left-0 w-full h-[40%] bg-[#c0b6e4] -z-0"></span>
        </span> and <br />
        <span className="relative inline-block leading-none">
          <span className="relative z-10">automate your business</span>
          <span className="absolute bottom-1 left-0 w-full h-[35%] bg-[#c0b6e4] -z-0"></span>
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-[#1a1a1a] text-lg md:text-xl max-w-2xl  mb-10 mt-0 font-normal">
        Work with clients, manage projects, build forms, take bookings, send 
        proposals, get paid, and automate everything <span className="font-bold">with Super Work AI.</span>
      </p>

      {/* Button */}
      <button className="bg-[#3b00d4] hover:bg-[#2e00a5] text-white px-7 py-3 rounded-full text-base font-bold flex items-center gap-2 transition-all duration-300 shadow-lg mb-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        Try Plutio Free 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {/* Trust Badges */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
            {/* Star icon */}
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-gray-600 font-semibold">4.6</span>
        </div>
        
        {/* Logos Placeholder (using simple styled icons to match color/shape) */}
        <div className="flex items-center gap-2 ml-1">
          <div className="w-5 h-5 bg-[#00bed6] rounded-sm transform rotate-45"></div> {/* Capterra style */}
          <div className="w-5 h-5 bg-[#da552f] rounded-full flex items-center justify-center text-[10px] text-white font-bold italic">P</div> {/* Product Hunt */}
          <div className="w-5 h-5 bg-[#ff492c] rounded-sm flex items-center justify-center text-[10px] text-white font-bold">G2</div> {/* G2 */}
          <div className="w-5 h-5 overflow-hidden"> {/* TrustRadius style */}
            <svg viewBox="0 0 24 24" className="text-blue-500 fill-current"><path d="M12 2L2 22h20L12 2z"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;