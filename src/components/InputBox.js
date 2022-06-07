function InputBox() {
  return (
    <div>
      <p>Done 1 of 3</p>
      <input
        type="text"
        className="form-control"
        placeholder="What is next ?"
      />
      <button className="btn btn-outline-primary w-100 mt-2">Add</button>
    </div>
  );
}

export default InputBox;
