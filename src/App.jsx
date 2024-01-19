import "App.css";
import { useState } from "react";
import FormContent from "component/FormContent";
import TodoListContent from "component/TodoListContent";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "리엑트 공부를 합시다", detail: "리엑트 공부를 해야합니다.", checked: false },
    { id: 2, title: "리엑트 공부를 합시다", detail: "리엑트 공부를 해야합니다.", checked: true },
  ]);

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
      id: todoList.length + 1,
      title,
      detail,
      checked: false,
    };
    setTodoList([...todoList, newTodoList]);
  };


  const removeButton = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id)
    setTodoList(newTodoList);
  };
  const doneClick = (id) => {
    const updatedTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, checked: true } : item
    });
    setTodoList(updatedTodoList);
  }
  const cancelClick = (id) => {
    const updatedTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, checked: false } : item
    });
    setTodoList(updatedTodoList);
  }



  return (
    <div className="basic">
      <header className="header-style">
        <h1>My Todo List</h1>
        <p>React</p>
      </header>
      <FormContent title={title} detail={detail} changeTitle={changeTitle} changeDetail={changeDetail} addHandler={addHandler} />
      <TodoListContent todoList={todoList} removeButton={removeButton} doneClick={doneClick} cancelClick={cancelClick} />

    </div >
  )
}




export default App;
