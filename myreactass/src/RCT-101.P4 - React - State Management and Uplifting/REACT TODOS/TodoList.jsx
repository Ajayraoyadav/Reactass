import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [Todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    const taskObj = {
      title: task,
      status: false,
      id: nanoid(),
    };
    setTodo([taskObj, ...Todo]);
  };

  const handleDelete = (id) => {
    let newTodo = Todo.filter((item) => item.id != id);
    setTodo(newTodo);
  };

  return (
    <>
      <input
        type={"text"}
        className="header"
        value={task}
        onChange={handleChange}
        placeholder="Write Something"
      />
      <button className="header" onClick={handleClick}>
        {" "}
        +{" "}
      </button>
      {Todo.map((item) => {
        return <TodoItem key={item.id} {...item} handleDelete={handleDelete} />;
      })}
    </>
  );
};