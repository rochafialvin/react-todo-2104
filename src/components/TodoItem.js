function TodoItem({
  actionClass,
  todo,
  onCancelTodo,
  onCompleteTodo,
  onDeleteTodo,
}) {
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
        <button
          onClick={() => {
            onCancelTodo(todo.id);
          }}
          className="btn btn-outline-warning mx-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
