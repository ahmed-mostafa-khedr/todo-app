import React from "react";
import { Button } from "react-bootstrap";

const TodoListCompo = ({ todo, onDelete, onComplete }) => {
  return (
    <div
      className="d-flex justify-content-between mx-5 bg-light text-dark  my-2 w-75 mx-auto"
      style={{ boxShadow: "0 0 2px #ccc", borderRadius: "10px" }}
    >
      <p
        className="mx-2 my-auto"
        style={{
          textDecoration: todo.complete && "line-through",
          opacity: todo.complete && "0.5",
        }}
      >
        <b>{todo.text}</b>
      </p>
      <div className="d-flex ">
        <Button className=" p-1" variant="outline-success" onClick={onComplete}>
          ✔
        </Button>
        <Button
          className="mx-1 p-1"
          variant="outline-danger"
          onClick={onDelete}
        >
          ✖
        </Button>
      </div>
    </div>
  );
};

export default TodoListCompo;
