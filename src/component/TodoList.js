import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todolist);
  const [done, setDone] = useState(false);
  return (
    <div className="todo-list">
      <AddTodo />
      <button onClick={() => setDone(!done)} style={{ width: 150 }}>
        {done ? "show undone" : "show done"}
      </button>
      {todos
        .filter((todo) => todo.isDone === done)
        .map((todo) => (
          <TodoItem todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
