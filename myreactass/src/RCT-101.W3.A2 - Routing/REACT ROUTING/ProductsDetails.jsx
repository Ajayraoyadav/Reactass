import React from "react";
import { Link } from "react-router-dom";

export default function ProductsDetails(props) {
  const { name, price,id} = props;
  return (
    <>
      <div >
        <div style={{ border: "1px solid black" }}>
          <h1>{name}</h1>
          <h1>{price}</h1>
          <Link to={`/Products/${id}`}>Add</Link>{" "}
        </div>
      </div>
    </>
  );
}
