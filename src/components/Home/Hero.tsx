import Navbar from "@/common/Navbar";
import { Mail, ArrowRight } from "lucide-react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="h-screen p-2">
      {/* Outer div acts as the border */}
      <div className="h-full w-full rounded-[30px] bg-gradient-to-br from-[#170d52] via-[#afafaf] to-[#afafaf] p-[1px]">
        {/* Inner div acts as the background */}
        <div className="h-full w-full rounded-[28px] bg-gradient-to-br from-[#2C199E] via-[#ffffff] to-[#ffffff] flex flex-col items-center justify-start pt-4 px-4 md:px-8">
          {/* Navbar */}
          <Navbar />

          {/* Hero Content Section - Made relative & w-full for positioning */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-7xl w-full px-4 pb-20 relative">
            {/* Left Hand-drawn Annotation */}
            <div className="absolute left-2 xl:left-4 bottom-20 hidden lg:flex flex-col items-center w-[190px] -rotate-[7deg] select-none pointer-events-none">
              <span className="font-marker text-[#2C199E] text-xl leading-tight tracking-wide text-center lowercase">
                SEE WHAT OUR CUSTOMERS ARE BUILDING
              </span>
              <svg
                width="55"
                height="55"
                viewBox="0 0 50 50"
                fill="none"
                className="mt-1 translate-x-4"
              >
                <path
                  d="M10 5 C 16 12, 26 26, 30 38"
                  stroke="#2C199E"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 33 L30 39 L33 28"
                  stroke="#2C199E"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-[64px] text-[#240029] tracking-tight max-w-[1400px] font-kaio">
              Project your networth at each point
            </h1>

            {/* Subheading with Serif Font and custom underlines */}
            <p className="font-serif text-[18px] sm:text-xl md:text-[26px] text-[#4a2e55] mt-6 max-w-5xl">
              Connect your{" "}
              <span className="underline decoration-1 underline-offset-[6px] text-black decoration-[#4a2e55]/60">
                bank accounts
              </span>{" "}
              and see where you're headed with{" "}
              <span className="underline decoration-1 underline-offset-[6px] text-black decoration-[#4a2e55]/60">
                powerful ai
              </span>{" "}
              wealth projections.
            </p>

            {/* Email Input Form */}
            <form className="relative font-inter flex items-center w-full max-w-md mt-10 p-1.5 bg-[#fdfbf7]/60 backdrop-blur-md border border-blue-500/40 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] focus-within:border-[#2C199E]/40 focus-within:shadow-[0_0_25px_rgba(44,25,158,0.12)] transition-all duration-300">
              {/* Mail Icon */}
              <div className="pl-4 text-[#24112c]/40 shrink-0">
                <Mail size={19} strokeWidth={1.75} />
              </div>

              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full bg-transparent pl-3 pr-4 py-2 text-[#24112c] placeholder:text-[#24112c]/40 font-inter text-[15px] focus:outline-none tracking-tight"
                required
              />

              {/* Sleek Action Button */}
              <button
                type="submit"
                className="group flex items-center gap-2 h-11 shrink-0 px-6 bg-[#24112c] hover:bg-[#2C199E] text-white rounded-full font-semibold font-inter text-sm shadow-md hover:shadow-[0_4px_12px_rgba(44,25,158,0.25)] transition-all duration-300 cursor-pointer"
              >
                Dashboard
                <ArrowRight
                  size={16}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            <Slider />

            {/* Right Hand-drawn Annotation */}
            <div className="absolute right-2 xl:right-8 bottom-20 hidden lg:flex flex-col items-center w-[190px] rotate-[7deg] select-none pointer-events-none">
              <span className="text-[#2C199E] text-xl leading-tight tracking-wide text-center lowercase font-marker">
                $100K IN THE FIRST 48 HOURS WITH OUTSETA
              </span>
              <svg
                width="55"
                height="55"
                viewBox="0 0 50 50"
                fill="none"
                className="mt-1 -translate-x-4 scale-x-[-1]"
              >
                <path
                  d="M10 5 C 16 12, 26 26, 30 38"
                  stroke="#2C199E"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 33 L30 39 L33 28"
                  stroke="#2C199E"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
