import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import InputBox from "./components/InputBox";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(getTodos, 2000);
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:2104/todos");
      setTodos(res.data);
    } catch (error) {
      console.log({ error: error.message, detail: error });
    }
  };

  const onCompleteTodo = async (todoId) => {
    try {
      await axios.patch(`http://localhost:2104/todos/${todoId}`, {
        isComplete: true,
      });
      getTodos();
    } catch (error) {
      alert("Error");
      console.log({ error });
    }
  };

  const onCancelTodo = async (todoId) => {
    try {
      await axios.patch(`http://localhost:2104/todos/${todoId}`, {
        isComplete: false,
      });
      getTodos();
    } catch (error) {
      alert("Error");
      console.log({ error });
    }
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

  const addTodos = async (keyword) => {
    try {
      const todo = { id: Math.random(), action: keyword, isComplete: false };
      await axios.post("http://localhost:2104/todos", todo);
      getTodos();
    } catch (error) {
      alert("Error");
      console.log({ error });
    }
  };

  return (
    <div className="container p-5">
      <InputBox addTodos={addTodos} todos={todos} />
      {todos.length ? (
        renderList()
      ) : (
        <h3 style={{ textAlign: "center" }}>Loading ...</h3>
      )}
    </div>
  );
}

export default App;
