import "./App.css";
import AddTodo from "./component/AddTodo";
import Header from "./component/Header";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Header />

      <TodoList />
    </div>
  );
}

export default App;
