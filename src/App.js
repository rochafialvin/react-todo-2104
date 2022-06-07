import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, action: "Bangun Tidur", isComplete: true },
    { id: 2, action: "Mandi", isComplete: false },
  ]);

  const renderList = () => {
    return todos.map((todo) => {
      return (
        <div className="d-flex pt-3 border-bottom justify-content-between">
          <p className="lead">{todo.action}</p>
          <div>
            <button className="btn btn-outline-success">Complete</button>
            <button className="btn btn-outline-warning mx-2">Cancel</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      );
    });
  };

  const addTodos = (keyword) => {
    // Bermain
    const todo = { id: Math.random(), action: keyword, isComplete: false };
    // [{id: 1}, {id: 2}, {id: 0.986789, action: Bermain}]
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
