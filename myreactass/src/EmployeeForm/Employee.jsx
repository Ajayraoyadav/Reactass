import React, { useState } from 'react'

export default function Employee() {

    var [username,setuserName]=useState("");
    var [username1,setuserName1]=useState("");
    var [username2,setuserName2]=useState("");
    var [username3,setuserName3]=useState("");
    
    const handleChange = (e)=>{
        setuserName(e.target.value);
    }
    const handleChange1 = (e)=>{
        setuserName1(e.target.value);
    }
    const handleChange2 = (e)=>{
        setuserName2(e.target.value);
    }
    const handleChange3 = (e)=>{
        setuserName3(e.target.value);
    }
    

  return (
    <>
    <form >
        <label>Name : </label> 
        <input placeholder='Name' type="text" onChange={handleChange} />
        <br/>
        <label>Age : </label>
        <input placeholder='Age' type="number"  onChange={handleChange1}/>
        <br/>
        <label>Address : </label>
        <input placeholder='Address' type="text" onChange={handleChange2} />
        <br/>
        <label>Salary : </label>
        <input placeholder='Salary' type="number"  onChange={handleChange3}/>
        <br/>
        <label>Department : </label>
        <select>
            <option>Department</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <br/>
        <label>Matrial states : </label>
        <input type="checkbox" />
        <label>Marital State</label>
        <br/>
        <input type="submit" />
    </form>

    <h3>{username}</h3>
    <h3>{username1}</h3>
    <h3>{username2}</h3>
    <h3>{username3}</h3>
    </>
  )
}