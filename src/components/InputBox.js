import { useState } from "react";

function InputBox(props) {
  // keyword : Bermain
  const [keyword, setKeyword] = useState(100);

  const onAddHandler = () => {
    props.addTodos(keyword);
  };

  const onInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const countCompleteTodo = () => {
    const completeTodos = props.todos.filter((todo) => todo.isComplete);
    return `Done ${completeTodos.length} of ${props.todos.length}`;
  };

  return (
    <div className="mb-2">
      <p>{countCompleteTodo()}</p>
      <input
        type="text"
        className="form-control"
        placeholder="What is next ?"
        onChange={onInputChange}
      />
      <button
        onClick={onAddHandler}
        className="btn btn-outline-primary w-100 mt-2"
      >
        Add
      </button>
    </div>
  );
}

export default InputBox;
