import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MenuList = () => {
    const [open, setOpen] = useState(false);


  return (
    <div className="flex flex-1 items-center">
        {
            !open ? 
            <Menu  className="cursor-pointer" onClick={()=>setOpen(true)}/> : 
            <X className="cursor-pointer"  onClick={()=>setOpen(false)}/>
        }

        {open && 
        <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center  gap-10 z-10  text-[#33333] left-0 top-[65px]  bg-zinc-400 bg-opacity-100 absolute">
          <Link to="/" onClick={()=>setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Explore
            </span>
          </Link>
          <Link to="/" onClick={()=>setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Collection
            </span>
          </Link>
          <Link to="/" onClick={()=>setOpen(false)}>
            <span className="text-2xl md:text-sm text-[#33333] font-semibold font-montserrat">
              Community
            </span>
          </Link>
        </div>}
    </div>
  )
}

export default MenuList