import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col">
      <img className="w-20 h-20" src="/loader.svg" alt="loader" />
      <p className="text-[#A7A7A7] font-semibold font-montserrat">
        Loading some awesome Images...
      </p>
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-green-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-pink-400"></div>
      </div>
    </div>
  );
};

export default Loading;
