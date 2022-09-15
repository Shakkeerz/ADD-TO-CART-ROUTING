import React, { useEffect, useRef, useState } from "react";

function Cart({ cartItems, removeCartItem }) {
  const inputPriceRef = useRef(null);
  const inputQntyRef = useRef(null);

  const [qnty, setQnty] = useState(1);
  const [price, setPrice] = useState(0);
  const [removeMessage, setRemoveMessage] = useState({
    message: "",
    show: false,
  });
  const totalPrice = () => {
    // cartItems.reduce(item)
  };
  useEffect(() => {
    console.log(inputPriceRef.current);
    console.log(inputQntyRef.current);
    totalPrice();
  }, []);
  return (
    <div className="p-4  font-bold bg-yellow-600">
      <h1 className="text-5xl font-bold underline">Your cart</h1>
      <div className="bg-yellow-500 relative transition ">
        <div
          className={
            removeMessage.show &&
            "bg-red-500 inline-block p-2 absolute  right-0 rounded-md"
          }
        >
          {removeMessage.show && removeMessage.message}
        </div>
      </div>
      {cartItems.length === 0 && (
        <div className="text-5xl font-mono h-96 flex justify-center items-center">
          Your Cart is Empty
        </div>
      )}

      <div className="">
        {cartItems &&
          cartItems.map((cart, index) => {
            const { title, image, price, description } = cart;

            return (
              <div className="flex justify-between  mb-2 border-2" key={index}>
                <div className="w-40 h-48">
                  <img src={image} alt="" className="h-full w-full  " />
                </div>

                <div className="w-2/5">
                  <p>{title}</p>
                  <p className="text-sm font-normal">{description}</p>
                </div>
                <div className="w-2/5 flex flex-col md:flex-row gap-4 justify-center items-center">
                  <p
                    ref={inputPriceRef}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    ${price}
                  </p>
                  <label for="quantity">
                    Qnty{" "}
                    <input
                      ref={inputQntyRef}
                      type="number"
                      className="w-10 p-1"
                      min="1"
                      step="1"
                      name="quantity"
                      onChange={(e) => setQnty(e.target.value)}
                      // value={qnty}
                    />
                  </label>
                  <button
                    type="button"
                    className="p-1 bg-red-700 hover:bg-red-500 rounded -lg"
                    onClick={() => removeCartItem(cart, setRemoveMessage)}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {cartItems == 0 ? (
        ""
      ) : (
        <div className="border-2 border-black flex justify-between">
          <h1>Total</h1>
          <h1>=$
            {price}
            /-</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
