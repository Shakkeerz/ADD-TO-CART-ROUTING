import Header from "./components/front/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import data from "./components/data/data";
import { useEffect, useState } from "react";
import FetchProducts from "./components/axios/FetchProducts";
import axios from "axios";

function App() {
  
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDataFunc = async () => {
    console.log("workin");

    setLoading(true)
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false)
        setFetchData(res.data.json());
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(fetchData);
  };
  // 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
  useEffect(() => {
    fetchDataFunc();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (gettingProduct) => {
    const isProductExistsInCart = cartItems.find(
      (item) => item.id === gettingProduct.id
    );
    if (isProductExistsInCart) {
      alert("You already added! please go to cart page");
    }
    if (!isProductExistsInCart) {
      setCartItems([...cartItems, gettingProduct]);
    }
  };

  const removeCartItem = (cart,setRemoveMessage) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id != cart.id;
      })
      );  
      setRemoveMessage({message:"An item removed",show:true})  
     setTimeout(()=>{
      setRemoveMessage({message:"",show:false})  

     },2000)
  };
  return (
    <Router>
      <div className="App w-4/5 m-auto ">
        <div>
          <Header />
          <FetchProducts />
        </div>

        <AppRouter
          fetchData={fetchData}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          removeCartItem={removeCartItem}
          loading={loading}
        />
      </div>
    </Router>
  );
}

export default App;
