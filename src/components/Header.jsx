import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import MenuList from "./MenuList";

const Header = ({ query, handleChange, handleSubmit,theme,toggleDarkMode}) => {
  return (
    <div className={`flex items-center justify-between h-16 gap-4 md:gap-10 px-6 md:px-20`}>
        
        
        <div className="md:w-[200px]">
        <h2 className={`text-2xl md:text-3xl font-bold font-pattaya`}>Image Gallery</h2>

        </div>

           
          <div className="relative flex md:w-[50%]   items-center  rounded-lg">
            <div className="grid place-items-center absolute left-1">
              <Search
                onClick={handleSubmit}
                className="text-gray-400 mr-2 ml-2 cursor-pointer"
              />
            </div>

            <input
              type="text"
              id="search"
              value={query}
              autoComplete="off"
              onChange={handleChange}
              className="sm:w-full md:w-full text-base bg-[#ECECEC] font-montserrat text-gray-400 font-light rounded-md border px-10 py-3 outline-none "
              placeholder="Search Images here.."
            />
          </div>
        
          <div className="hidden md:flex gap-6">
        <Link to="/">
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Explore
            </span>
          </Link>
          <Link to="/">
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Collection
            </span>
          </Link>
          <Link to="/">
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Community
            </span>
          </Link>
        </div>      
           
           <div className="md:hidden">
           <MenuList/>
           </div>
           <DarkModeToggle theme={theme} toggleDarkMode={toggleDarkMode}/>

    
    </div>

  )
}

export default Header