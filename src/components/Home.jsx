import React from "react";
import Gallery from "./Gallery";
import Loading from "./Loading";
import {tags} from '../data'
const Home = ({
  photo,
  setOpenModal,
  showDetailsModal,
  isLoading,
  darkMode,
  errMsg,
  handleTagSelection
}) => {
  return (
    <>
      {photo.length>0 && 
       <div className="filters grid grid-flow-row place-items-center py-1 gap-2 grid-cols-10 md:grid-cols-15 lg:grid-cols-20">
        <h1 className={` ${
            darkMode ? "text-[#0F0F0F]" : "text-[#E5E5E5]"
          } text-lg font-semibold  cursor-pointer`}>Related Tags</h1>
        {tags?.map((t) => (
          <div key={t.id} className={` ${
            darkMode ? "bg-[#0F0F0F] text-[#E5E5E5]" : "bg-white text-[#0F0F0F]"
          } rounded-lg px-2  cursor-pointer`}
          onClick={()=>handleTagSelection(t.title)}>{t.title}</div>
        ))}
      </div>}
      {errMsg && (
        <div
          class="w-[50%] flex items-center justify-center mx-auto p-4 mb-4 text-xl md:text-lg text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">{errMsg}</span>
        </div>
      )}
      <div
        className={`p-4 w-full md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          photo?.map((item) => (
            <Gallery
              key={item.id}
              photo={item}
              setOpenModal={setOpenModal}
              darkMode={darkMode}
              showDetailsModal={showDetailsModal}
              onClick={() => showDetailsModal(item)}
            />
          ))
        )}

        {/* PAGINATION */}
        {/* <div className="flex items-center gap-10 text-center">
        {
          page > 1 && (<ChevronLeftSquare onClick={()=>setPage(page-1)} size={32} 
          className="cursor-pointer"/>)
        }

       {
          page < totalPages && (<ChevronRightSquare onClick={()=>setPage(page+1)} size={32} 
          className="cursor-pointer"/>)
        }
       </div> */}
      </div>
    </>
  );
};

export default Home;
