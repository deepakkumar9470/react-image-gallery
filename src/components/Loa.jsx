import React from 'react'
import {ThumbsUp} from 'lucide-react'
const Loa = () => {
  return (
<div className="cursor-pointer">
      <div className="rounded-xl bg-gray-600  overflow-hidden border">
          <img 
          className="w-full h-[400px] bg-gray-600  object-cover" 
          src={""} alt="Mountain" />
          <div className="flex items-center justify-between px-2 py-3 ">
            <div className="flex gap-2">
              <img
                className="w-8 h-8 object-cover rounded-full bg-gray-600 "
                src={""}
                alt="agavc"
                              
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold w-[200px] bg-gray-700  font-montserrat"></p>
                <span className="text-[10px] bg-gray-700 w-[100px] font-poppins"></span>
              </div>
            </div>
            <div className="flex gap-2">
              <ThumbsUp size={14} className="bg-gray-600 " />
              <span className="text-[12px] bg-gray-600  font-montserrat font-semibold">200</span>
            </div>
          </div>
      </div>
      </div>   
      )
}

export default Loa