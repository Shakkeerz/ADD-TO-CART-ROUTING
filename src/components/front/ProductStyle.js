import React from "react";

function ProductStyle({ fetchData, handleAddProduct, index }) {
  const { image, title, price, description } = fetchData;
  return (
    <div key={index} className="w-56 bg-yellow-400 p-4">
      <div className="w-inherit h-60 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-5 flex flex-col justify-between">
        <div className="font-bold flex ">
          <p className='md:hidden'>{title.substring(0,20)}...</p>
          <p className='hidden md:block'>{title.substring(0,40)}...</p>
          <p className="text-orange-700  ">${price}</p>
        </div>
        {/* <p className="text-sm">{description.substring(0, 30)}</p> */}
        <button
          type="button"
          className="p-2 bg-yellow-500 hover:bg-yellow-800 hover:text-white font-bold rounded-lg w-full "
          onClick={() => handleAddProduct(fetchData)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductStyle;
