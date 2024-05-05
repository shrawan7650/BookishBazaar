/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   let existingCartItem = localStorage.getItem("cart");
  //   if (existingCartItem) setCart(JSON.parse(existingCartItem));
  // }, []);

  useEffect(() => {
    const getCartItem = async () => {
      const response = await axios.get(
        "https://bookishbazaar-zf22.onrender.com/api/v1/getcart",
        { withCredentials: true }
      );
      // console.log(response)
      setCart(response.data.cart.products);
    };
    getCartItem();
  }, []);

  // console.log(order)

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
