import { useState } from "react";

function InputBox() {
  // keyword akan menjadi variable yg menyimpan data
  // setKeyword adalah function untuk update keyword
  const [keyword, setKeyword] = useState(100);

  const onAddHandler = () => {
    console.log(keyword);
  };

  const onInputChange = (event) => {
    // Value pada tag input akan disimpan ke state keyword
    setKeyword(event.target.value);
  };

  return (
    <div>
      <p>Isi dari keyword : {keyword}</p>
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
