import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "../front/About";
import Cart from "../front/Cart";
import Home from "../front/Home";
import ProductsLists from "../front/ProductsLists";

function AppRouter({ fetchData, cartItems, handleAddProduct ,removeCartItem ,loading}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ProductsLists"
          element={
            <ProductsLists
            fetchData={fetchData}
              handleAddProduct={handleAddProduct}
              removeCartItem={removeCartItem}
              loading={loading}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}
            removeCartItem={removeCartItem} />
          }
        />
      </Routes>
    </div>
  );
}

export default AppRouter;
