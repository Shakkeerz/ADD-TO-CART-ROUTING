import React from "react";
import ProductStyle from "./ProductStyle";

function ProductsLists({ fetchData, handleAddProduct ,loading}) {
 
  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-wrap  gap-4">
        {loading && <h1 className="text-5xl font-bold animate-bounce">Loading...</h1>}
        {fetchData.map((fetchData, index) => (
          <ProductStyle index={index}
          fetchData={fetchData}
            handleAddProduct={handleAddProduct}
           loading={loading}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsLists;
