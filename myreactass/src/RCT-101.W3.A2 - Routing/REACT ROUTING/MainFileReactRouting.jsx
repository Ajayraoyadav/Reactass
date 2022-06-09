import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Navbar from "./Navbar";
import AllProducts from "./AllProducts";
import Page404 from "./Page404";


export default function MainFileReactRouting() {
  return (
    <>
      <h1>React Routing</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/*" element={<Page404 />} />

      </Routes>
    </>
  );
}
