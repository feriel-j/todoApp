import { createSlice, CreateSlice } from "@reduxjs/toolkit";
const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "Task 1",
      description: "description task 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "Task 2",
      description: "description task 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "Task 3",
      description: "description task 3",
      isDone: true,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //add
    addTask: (state, action) => {
      state.todolist.push(action.payload);
    },
    //delete
    removeTask: (state, action) => {
      state.todolist = state.todolist.filter(
        (el) => el.id !== action.payload.id
      );
    },
    //donetask
    doneTask: (state, action) => {
      let i = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {
        ...state.todolist[i],
        isDone: !state.todolist[i].isDone,
      };
    },
    //update
    updateTask: (state, action) => {
      let i = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {
        ...state.todolist[i],
        title: action.payload.edited.title,
        description: action.payload.edited.description,
      };
    },
  },
});

export const { addTask, removeTask, doneTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
