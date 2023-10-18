import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full">
      <img
        className="w-full h-[450px] md:h-[400px]  relative object-cover"
        src="/hero-bg.png"
        alt="heroimg"
      />
      <div className="flex flex-col gap-6 items-center justify-center absolute top-[30%] md:top-[30%] md:left-[15%]">
        <h1
          className="mb-2 text-4xl   md:text-4xl text-white font-bold text-center
        font-montserrat"
        >
          Download High Quality Images by creators
        </h1>
        <p
          className="text-[18px] w-[400px] md:text-base text-center text-[#C4C4C4]
        font-montserrat"
        >
          Over 2.4 million+ stock Images by our talented community
        </p>

        <div className="px-10 md:px-0 relative flex items-center justify-center w-full md:w-[900px] lg:w-[900px] rounded-lg">
          <div className="grid place-items-center absolute left-12 md:left-1 cursor-pointer">
            <Search className="text-gray-400 mr-2" />
          </div>

          <input
            className="w-full text-base bg-white text-[#C4C4C4] font-montserrat font-semibold rounded-md border px-10 py-3 outline-none "
            type="text"
            placeholder="Search high resolution Images"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
