import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "20px" }}>
        About
      </Link>
      <Link to="/products" style={{ marginRight: "20px" }}>
        Products
      </Link>
    </>
  );
}
