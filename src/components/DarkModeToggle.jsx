import React, { useContext } from 'react'
import {Sun,Moon} from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'
const DarkModeToggle = () => {
  const {theme,toggle} = useContext(ThemeContext)
  
  return (
    <div onClick={toggle} className="flex flex-end w-[50px] bg-gray-500 items-center justify-between bg-[#858484] py-1 px-[1px] cursor-pointer relative rounded-3xl">
      <Moon size={14} color="white" />
      <div className={`w-[15px] h-[15px] absolute rounded-full ${theme === "dark" ? "left-1 bg-white": "right-1 bg-black"}`}
      >

      </div>
      <Sun size={14} color="#fcff52" />   
      </div>
  )
}

export default DarkModeToggle