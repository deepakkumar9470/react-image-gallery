import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MenuList = () => {
    const [open, setOpen] = useState(false);


  return (
    <div>
        {
            !open ? 
            <Menu  className="cursor-pointer" onClick={()=>setOpen(true)}/> : 
            <X className="cursor-pointer"  onClick={()=>setOpen(false)}/>
        }

        {open && <div className="w-full flex items-center justify-center flex-col gap-20 z-10 bg-[#232323] text-white absolute left-0 top-20 h-[80vh]">
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