import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const MenuList = ({ darkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-1 items-center">
      {!open ? (
        <Menu
          className={`${
            darkMode ? " text-black" : "text-white"
          } cursor-pointer`}
          onClick={() => setOpen(true)}
        />
      ) : (
        <X
          className={`${darkMode ? "text-black" : "text-white"} cursor-pointer`}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          className={`w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center  gap-10 z-10  
         left-0 top-[65px]  bg-opacity-100 absolute
        ${darkMode ? "bg-[#FFF] text-[#33333]" : "bg-[#232323] text-[#FFF]"}`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Explore
            </span>
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Collection
            </span>
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Community
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuList;
