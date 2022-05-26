import React from "react";

export const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [value, setValue] = React.useState(todo.value);

  const deleteTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    onDelete(todo.id);
  };

  const editTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });
    let data = await res.json();
    console.log(data);
  };

  // let data = await res.json()
  // console.log(data)

  return (
    <>
      <div
      ></div>
      {isEditable ? (
        <div>
          <input
            type="text"
            placeholder="enter here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              let v = value.trim();
              if (v) {
                editTodo(value);
                setIsEditable(false);
              }
            }}
          >
            Update
          </button>
        </div>
      ) : (
        <div>{todo.value}</div>
      )}

      <div>
        <button onClick={() => setIsEditable(!isEditable)}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </>
  );
};