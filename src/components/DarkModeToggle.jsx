import React, { useContext } from 'react'
import {Sun,Moon} from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'
const DarkModeToggle = () => {
  const {theme,toggle} = useContext(ThemeContext)
  
  return (
    <div onClick={toggle} className="hidden md:block flex items-center justify-between bg-[#858484] py-1 px-[1px] cursor-pointer relative w-10 h- rounded-3xl">
      <Moon size={14} color="white" />
      <div className="w-[15px] h-[15px] absolute rounded-full "
      style={theme === "dark" ? {left:1, backgroundColor:'white'} : {right:1, backgroundColor:'black'}}
      >

      </div>
      <Sun size={14} color="#fcff52" />   
      </div>
  )
}

export default DarkModeToggle