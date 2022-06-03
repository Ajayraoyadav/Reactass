import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cartcount, handleCount } = useContext(CartContext);
  return (
    <>
      <div>Cart : {cartcount}</div>
      <button
        onClick={() => {
          handleCount(1);
        }}
      >
        +
      </button>
    </>
  );
}
