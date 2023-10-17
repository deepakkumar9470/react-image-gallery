import React from 'react'

const Loader = () => {

  const newarr = [0,1,2,3,4,5,6,7,8,9,10]
  return (
   
<div className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl">
    <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
    </div>
    <div className="p-3">
        <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 bg-gray-200 rounded  animate-pulse">
            </div>
            <div className="col-span-2 ...">
            </div>
        </div>
    </div>
</div>

  
  )
}

export default Loader