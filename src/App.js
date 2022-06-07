import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, action: "Bangun Tidur", isComplete: true },
    { id: 2, action: "Mandi", isComplete: false },
    { id: 3, action: "Nyarap", isComplete: false },
  ]);

  const onCompleteTodo = (todoId) => {
    // todoId : 2
    const mappedTodos = todos.map((todo) => {
      // { id: 3, action: "Nyarap", isComplete: false },
      if (todo.id === todoId) {
        return { ...todo, isComplete: true };
      } else {
        return todo;
      }
    });

    setTodos(mappedTodos);
  };

  const onCancelTodo = () => {};

  const onDeleteTodo = () => {};

  const renderList = () => {
    return todos.map((todo) => {
      let actionClass = "lead";
      if (todo.isComplete) actionClass += " text-decoration-line-through";
      return (
        <div className="d-flex pt-3 border-bottom justify-content-between">
          <p className={actionClass}>{todo.action}</p>
          <div>
            <button
              onClick={() => {
                onCompleteTodo(todo.id);
              }}
              className="btn btn-outline-success"
            >
              Complete
            </button>
            <button className="btn btn-outline-warning mx-2">Cancel</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      );
    });
  };

  const addTodos = (keyword) => {
    const todo = { id: Math.random(), action: keyword, isComplete: false };
    setTodos([...todos, todo]);
  };

  return (
    <div className="container p-5">
      <InputBox addTodos={addTodos} />
      {renderList()}
    </div>
  );
}

export default App;
