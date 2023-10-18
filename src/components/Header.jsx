import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import MenuList from "./MenuList";

const Header = ({
  query,
  handleChange,
  handleSubmit,
  darkMode,
  toggleDarkMode,
  handleSerachEnter,
}) => {
  return (
    <div
      className={`flex items-center justify-between h-16 gap-4 md:gap-10 px-6 md:px-20
    ${darkMode ? "bg-white" : "bg-[#232323]"}`}
    >
      <div className="md:w-[200px]">
        <h2
          className={`text-2xl md:text-3xl font-bold font-pattaya
         ${darkMode ? "text-[#232323]" : "text-[white]"}`}
        >
          Image Gallery
        </h2>
      </div>

      <div className="relative flex md:w-[50%]   items-center  rounded-lg">
        <div className="flex right-1 items-center absolute md:left-1">
          <Search
            onClick={handleSubmit}
            className=" text-gray-400 mr-2 ml-2 cursor-pointer"
          />
        </div>

        <input
          type="text"
          id="search"
          value={query}
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleSerachEnter}
          className={`sm:w-full md:w-full text-base  font-montserrat  font-light rounded-md md:border px-10 py-3 outline-none 
              ${
                darkMode
                  ? "md:bg-[#ECECEC] text-[#4F4F4F]"
                  : "bg-[#4F4F4F] text-[#fff] border-[#232323]"
              }`}
          placeholder="Search Images here.."
        />
      </div>

      <div className="hidden md:flex gap-6">
        <Link to="/">
          <span
            className={`text-2xl md:text-sm ${
              darkMode ? "text-[#33333]" : "text-[#FFFFFF]"
            }  font-semibold font-montserrat`}
          >
            Explore
          </span>
        </Link>
        <Link to="/">
          <span
            className={`text-2xl md:text-sm ${
              darkMode ? "text-[#33333]" : "text-[#FFFFFF]"
            } font-semibold font-montserrat`}
          >
            Collection
          </span>
        </Link>
        <Link to="/">
          <span
            className={`text-2xl md:text-sm ${
              darkMode ? "text-[#33333]" : "text-[#FFFFFF]"
            } font-semibold font-montserrat`}
          >
            Community
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        <MenuList darkMode={darkMode} />
      </div>
      <div className="hidden md:block lg:block">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Header;
