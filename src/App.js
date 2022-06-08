import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import InputBox from "./components/InputBox";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const onCompleteTodo = (todoId) => {
    const mappedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: true };
      } else {
        return todo;
      }
    });

    setTodos(mappedTodos);
  };

  const onCancelTodo = (todoId) => {
    const mappedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: false };
      } else {
        return todo;
      }
    });

    setTodos(mappedTodos);
  };

  const onDeleteTodo = (todoId) => {
    // copy isi dari todos ke tmp
    const tmp = [...todos];
    // temukan index todo yang hendak dihapus
    const index = tmp.findIndex((todo) => todo.id === todoId);
    // hapus todo dengan menggunakan index yg ditemukan
    tmp.splice(index, 1);
    // update todos dengan tmp
    setTodos(tmp);
  };

  const renderList = () => {
    return todos.map((todo) => {
      let actionClass = "lead";
      if (todo.isComplete) actionClass += " text-decoration-line-through";
      return (
        <TodoItem
          actionClass={actionClass}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onCancelTodo={onCancelTodo}
          onDeleteTodo={onDeleteTodo}
        />
      );
    });
  };

  const addTodos = (keyword) => {
    const todo = { id: Math.random(), action: keyword, isComplete: false };
    setTodos([...todos, todo]);
  };

  return (
    <div className="container p-5">
      <InputBox addTodos={addTodos} todos={todos} />
      {renderList()}
    </div>
  );
}

export default App;
