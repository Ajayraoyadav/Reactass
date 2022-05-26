import React, { useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

export const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
    // console.log("new",newTodo)
  };

  // http://localhost:3000/todos

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const onEdit = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) return updatedTodo;
      else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        let res = await fetch(
          `http://localhost:3000/todos?_page=${pageNumber}`
        );

        let data = await res.json();
        setTodos(data);
        // console.log("data",data)
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, [pageNumber]);

  //  getTodos()

  return (
    <>
      <AddTodo onAdd={onAdd} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
      <div>
        <button
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
        >
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </>
  );
};