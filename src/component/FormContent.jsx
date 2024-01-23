import { useState } from "react";

function FormContent({ todoList, setTodoList }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeDetail = (event) => {
    setDetail(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newTodoList = {
      id: Date.now(),
      title,
      detail,
      isDone: false,
    };
    setTodoList([...todoList, newTodoList]);
  };
  return (
    <form className="form-style">
      <div>
        <label className="label-style">제목</label>
        <input
          onChange={changeTitle}
          type="text"
          name="title"
          className="input-style"
          value={title}
        />
        <label className="label-style">내용</label>
        <input
          onChange={changeDetail}
          type="text"
          name="detail"
          className="input-style"
          value={detail}
        />
      </div>
      <div>
        <button className="formButton-style" onClick={addHandler}>추가하기</button>
      </div>
    </form>
  )
}

export default FormContent