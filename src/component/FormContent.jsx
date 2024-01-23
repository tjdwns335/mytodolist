import { useState } from "react";

function FormContent({ todoList, setTodoList }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const changeTitle = (event) => {
    const titleValue = event.target.value;
    setTitle(titleValue);
  };
  const changeDetail = (event) => {
    const detailValue = event.target.value;
    if (detailValue === "") {
      alert("내용을 입력해 주세요!")
      return
    }
    setDetail(detailValue);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newTodoList = {
      id: Date.now(),
      title,
      detail,
      isDone: false,
    };
    if (title === "") {
      alert("제목을 입력해 주세요!")
      return
    }
    if (detail === "") {
      alert("내용을 입력해 주세요!")
      return
    }
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