import React from "react";
import { RiTodoLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="app-header">
      <RiTodoLine style={{ width: 50, height: 50, padding: "10px" }} />
      <h1>Feriel's Todo-App</h1>
    </div>
  );
};

export default Header;
