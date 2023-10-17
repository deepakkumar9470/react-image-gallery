import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import MenuList from "./MenuList";

const Navbar = ({ query, handleChange, handleSubmit }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-10 md:px-16 lg:px-20 py-4">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold font-pattaya">Image Gallery</h2>
      </div>
      <div className="flex items-center justify-between gap-14">
        <div className="max-w-[400px]">
          <div className="relative flex  items-center w-full md:w-[400px] rounded-lg">
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
              onChange={handleChange}
              className=" w-full text-base bg-[#ECECEC] font-montserrat text-gray-400 font-light rounded-md border px-10 py-3 outline-none "
              placeholder="Search Images here.."
            />
          </div>
        </div>

        {/* <div className="flex items-center">
          <Link to="/">
            <span className="text-sm text-[#33333] font-semibold font-montserrat">
              Explore
            </span>
          </Link>
          <Link to="/">
            <span className="text-sm text-[#33333] font-semibold font-montserrat">
              Collection
            </span>
          </Link>
          <Link to="/">
            <span className="text-sm text-[#33333] font-semibold font-montserrat">
              Community
            </span>
          </Link>
        </div> */}
        <MenuList/>
      </div>

      <DarkModeToggle />

    </div>
  );
};

export default Navbar;
