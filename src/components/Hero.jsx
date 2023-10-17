import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (

    <div className='w-full'>
        <img className="w-full h-[300px]  relative object-cover" src="/hero-bg.png" alt="heroimg" />
    <div className="flex flex-col gap-6 items-center justify-center absolute top-[30%] left-[15%]">
        <h1 className="mb-2 text-2xl  md:text-4xl text-white font-bold text-center
        font-montserrat">
        Download High Quality Images by creators
        </h1>
        <p className="text-sm md:text-base text-center text-[#C4C4C4]
        font-montserrat">
        Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="">
        <div className="relative flex items-center justify-center w-[900px] rounded-lg">
              <div className="grid place-items-center absolute left-1">
                  <Search className="text-gray-400 mr-2"/>
              </div>

              <input
              className="w-full text-base bg-white text-[#C4C4C4] font-montserrat font-semibold rounded-md border px-10 py-3 outline-none "
              type="text"
              id="search"
              placeholder="Search something.." /> 
          </div>

        </div>
    </div>
</div>

  );
};

export default Hero;
