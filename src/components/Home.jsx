import React from "react";
import Gallery from "./Gallery";

const Home = ({ photo,setOpenModal,showDetailsModal}) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {photo?.map((item) => (
        <Gallery 
           key={item.id} 
           photo={item} 
           setOpenModal={setOpenModal}
           showDetailsModal={showDetailsModal}
           onClick={()=>showDetailsModal(item)} />
      ))}
    </div>
  );
};

export default Home;
