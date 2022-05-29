import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormFetch from "./FormFetch";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    age: "",
    address: "",
    op: "",
    salary: "",
    tnc: false,
  });

  const HandleOnChange = (e) => {
    let { type, name, value, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  useEffect(() => {
    console.log(form);
    
  }, [form]);

  return (
    <>
      <form>
        <label>Name : </label>
        <input
          placeholder="Name"
          type="text"
          name="username"
          onChange={HandleOnChange}
        />
        <br />
        <label>Age : </label>
        <input
          placeholder="Age"
          type="number"
          name="age"
          onChange={HandleOnChange}
        />
        <br />
        <label>Address : </label>
        <input
          placeholder="Address"
          type="text"
          name="address"
          onChange={HandleOnChange}
        />
        <br />
        <label>Salary : </label>
        <input
          placeholder="Salary"
          type="number"
          name="salary"
          onChange={HandleOnChange}
        />
        <br />
        <label>Department : </label>
        <select name="op" onChange={HandleOnChange}>
          <option>Department</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <br />
        <label>Matrial states : </label>
        <input type="checkbox" name="tnc" onChange={HandleOnChange} />
        <label>Marital</label>
        <br />
        <label>Select Image : </label>
        <input type="file" name="Image" onChange={HandleOnChange} />
        <br />
        <input type="submit" />
      </form>
      <FormFetch />
    </>
  );
}
