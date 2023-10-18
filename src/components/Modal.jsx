import { ThumbsUp, X, Instagram, Twitter,Share2,Info,ArrowDownToLine } from "lucide-react";


const Modal = ({ selectedImage, close }) => {
 
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50  bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="p-4 rounded-2xl relative">
        <X
          onClick={close}
          className="absolute bg-[#FFFFFF] bg-opacity-50 text-black text-sm cursor-pointer rounded-full right-[-5px] top-[-2px]"
        />
        <div className="rounded-[15px] overflow-hidden bg-white">
          <img
            className="w-full h-[400px]  object-cover relative"
            src={selectedImage?.urls.full}
            alt="Mountain"
          />
          <div className="flex justify-between items-center absolute bottom-[28%]">
        
            <div className="flex items-center gap-2 px-2">
                <div className="bg-transparent text-white rounded-sm border px-2 py-1 cursor-pointer  flex items-center gap-1">
                <Share2 size={12} strokeWidth={1} />
                <span className="text-[8px] font-poppins">
                  <a href={selectedImage?.user.links.portfolio}>Share</a>
                </span>
                </div>
                <div className="bg-transparent text-white rounded-sm  border px-2 py-1 cursor-pointer flex items-center gap-1">
                <Info size={12} strokeWidth={1} />
                <span className="text-[8px] font-poppins capitalize">{selectedImage?.user.social.twitter_username}</span>
                </div>
             </div>
         
           <div className="">
           {/* <button
             className="w-max-content bg-[#3CB46E]  py-2 text-white text-[10px] rounded-sm cursor-pointer">
              <a href={selectedImage?.links.download}>Download Image</a>
             </button> */}
             <ArrowDownToLine className="w-6 h-6 p-1 bg-[#3CB46E] flex flex-end text-white rounded-full cursor-pointer" size={14} strokeWidth={1.5}>
             <a  className="text-sm" href={selectedImage?.links.download_location} download>Download Image</a>
             </ArrowDownToLine>
           </div>
          </div>

          <div className="flex items-center  justify-between px-2 py-3 ">
            <div className="flex gap-2">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={selectedImage?.user.profile_image.small}
                alt="agavc"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold font-montserrat">
                  {selectedImage?.user.name}
                </p>
                <span className="text-[10px] font-poppins">{selectedImage?.user.username}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 mt-1">
                  <Instagram size={12} strokeWidth={1} color="#A7A7A7" />
                  <span className="text-[8px] text-[#A7A7A7] font-poppins cursor-pointer">
                  {selectedImage?.user.instagram_username}
                  </span>
                </div>
                <div className="flex gap-1 mt-1">
                  <Twitter size={12} strokeWidth={1} color="#A7A7A7" />
                  <span className="text-[8px] text-[#A7A7A7] font-poppins cursor-pointer">
                  {selectedImage?.user.twitter_username}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div>
                <span className="text-[12px] text-[#858484] font-montserrat font-semibold">
                {selectedImage?.downloads} downloads
                </span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="text-[#858484]" size={14} />
                <span className="text-[12px] text-[#858484] font-montserrat font-semibold">
                {selectedImage?.user.total_likes}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 mb-2">
            <p className="text-[12px] font-semibold font-montserrat">
              Related Tags
            </p>

            <div className="flex gap-4">
              {selectedImage?.tags?.map((t,i)=>(
                <span key={i} className="text-[10px] font-semibold bg-[#ECECEC] text-black rounded-md p-1 font-montserrat">
                {t.title}
              </span>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;