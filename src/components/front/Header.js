import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="flex  h-20 bg-slate-600 items-center " >
      <div className="w-1/5 ">Online shopping</div>
      <div className="w-4/5">
        <ul className="flex list-none justify-evenly">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/ProductsLists">ProductList</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Cart">Cart</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
