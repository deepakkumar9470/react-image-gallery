import React from "react";
import Gallery from "./Gallery";
import Loading from "./Loading";

const Home = ({ photo,setOpenModal,showDetailsModal,isLoading}) => {
  return (

    <>
     <div className="filters flex items-center gap-8">
      {
        photo?.tags?.map((t)=>(
          <div className="bg-indigo-500 text-white">{t.title}</div>

        ))
      }

       </div>
       <div className="p-4 w-full md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      
      {isLoading ? <Loading/> :
      photo?.map((item) => (
        <Gallery 
           key={item.id} 
           photo={item} 
           setOpenModal={setOpenModal}
           showDetailsModal={showDetailsModal}
           onClick={()=>showDetailsModal(item)} />
      ))}
    </div>
    </>
    
  );
};

export default Home;
