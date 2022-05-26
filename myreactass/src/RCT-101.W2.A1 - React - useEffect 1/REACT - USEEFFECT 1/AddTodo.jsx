import React from "react";

export const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = React.useState("");

  const postTodo = async (value) => {
    let response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });

    let data = await response.json();
    console.log("data", data);
    // console.log(value)
    onAdd(data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter here"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            postTodo(value);
            setNewTodo("");
          }
        }}
      >
        Add
      </button>
    </>
  );
};