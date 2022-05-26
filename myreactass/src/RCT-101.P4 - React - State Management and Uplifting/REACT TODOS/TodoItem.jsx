import React from "react";

const TodoItem = (props) => {
  console.log(props);
  const { title, id, handleDelete } = props;
  return (
    <>
      <h1 className="header1">{title}</h1>
      <button className="header1" onClick={() => handleDelete(id)}>
        Delete
      </button>
      
    </>
  );
};

export default TodoItem;