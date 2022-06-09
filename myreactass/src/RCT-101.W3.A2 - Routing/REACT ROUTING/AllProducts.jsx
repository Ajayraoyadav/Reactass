import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsDetails from "./ProductsDetails";

export default function AllProducts() {
  const [givedata, setGiveData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let res = await fetch("http://localhost:3001/Products");
      let data = await res.json();
      // console.log("data:", data);
      setGiveData(data);
    };
    getdata();
  }, []);
  return (
    <>
      <h1>All Products</h1>
      <div className="prid533">
        {givedata.map((el) => {
          return (
            <ProductsDetails key={el.id} {...el} />
          );
        })}
      </div>
    </>
  );
}
