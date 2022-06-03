import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartcount, setCartcount] = useState(0);
  const handleCount = (value) => {
    setCartcount(cartcount + value);
  };
  return (
    <CartContext.Provider value={{ cartcount, handleCount }}>
      {children}
    </CartContext.Provider>
  );
};
