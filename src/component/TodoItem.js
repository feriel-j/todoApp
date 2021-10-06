import React from "react";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/todoSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import EditTask from "./EditTask";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ? "done" : "undone"}`}>
      <span onClick={() => dispatch(doneTask({ id: todo.id }))}>
        {" "}
        {todo.isDone ? (
          <MdDoneAll style={{ color: "green" }} />
        ) : (
          <MdDoneAll style={{ color: "#516a97" }} />
        )}
      </span>
      <div className="text">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>

      <EditTask id={todo.id} />

      <button
        className="del"
        onClick={() => dispatch(removeTask({ id: todo.id }))}
      >
        <RiDeleteBinLine className="del" />
      </button>
    </div>
  );
};

export default TodoItem;
