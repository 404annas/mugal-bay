"use client";

import Marquee from "react-fast-marquee";

const Slider = () => {
  const tags = [
    "COMMUNITIES",
    "MEMBERSHIP SITES",
    "SAAS PRODUCTS",
    "CLUBS",
    "ASSOCIATIONS",
    "COURSES",
  ];

  // Double the array to ensure continuous flow on large viewports
  const repeatedTags = [...tags, ...tags, ...tags];

  return (
    <div className="relative w-[65%] flex items-center mt-10 mb-6">
      {/* Horizontal Axis Line behind the marquee */}
      <div className="absolute left-0 right-0 h-[1px] bg-black/[0.08]" />

      {/* Marquee Container with a subtle fade mask at the edges */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <Marquee speed={35} gradient={false} play={true} className="py-2">
          {repeatedTags.map((tag, idx) => (
            <div
              key={idx}
              className="mx-2.5 px-4 py-1.5 bg-transparent backdrop-blur-[1px] border border-black/10 rounded-full text-[#4a2e55] font-inter font-medium text-[12px] uppercase select-none shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              {tag}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
