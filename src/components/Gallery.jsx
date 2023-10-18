import React,{useState} from "react";
import { ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = ({photo,setOpenModal,showDetailsModal}) => {
  return (
    
      <div className="cursor-pointer"
         onClick={()=>setOpenModal(true)}>
      <div key={photo.id} className="rounded-xl overflow-hidden border">
          <img 
          onClick={()=>showDetailsModal(photo)}
          className="w-full h-[400px]  object-cover transition duration-300 ease-in-out hover:scale-110" 
          src={photo?.urls.full} alt="Mountain" />
          <div className="flex items-center justify-between px-2 py-3 ">
            <div className="flex gap-2">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={photo?.user.profile_image.small}
                alt="agavc"
                
               
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold font-montserrat">{photo?.user.name}</p>
                <span className="text-[10px] font-poppins">{photo?.user.username}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <ThumbsUp size={14} />
              <span className="text-[12px] font-montserrat font-semibold">{photo?.user.total_likes}</span>
            </div>
          </div>
      </div>
      </div>  
  );
};

export default Gallery;
