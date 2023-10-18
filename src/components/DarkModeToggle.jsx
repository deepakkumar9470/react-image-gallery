import React, { useContext } from "react";
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      onClick={toggleDarkMode}
      className={`flex flex-end w-[50px]  items-center justify-between  py-2 px-[1px] cursor-pointer relative rounded-3xl
    ${darkMode ? " bg-[#232323] text-white" : " bg-[#FFF] text-black"}`}
    >
      <div
        className={`w-[15px] h-[15px] absolute rounded-full ${darkMode ? " bg-[#FFF]" : " bg-[#232323]"}
      `}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
