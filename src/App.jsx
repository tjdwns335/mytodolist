import "App.css";
import { useState } from "react";
import FormContent from "component/FormContent";
import TodoListContent from "component/TodoListContent";
import Header from "component/header";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "리엑트 공부를 합시다", detail: "리엑트 공부를 해야합니다.", isDone: false },
    { id: 2, title: "리엑트 공부를 합시다", detail: "리엑트 공부를 해야합니다.", isDone: true },
  ]);






  return (
    <div className="basic">
      <Header />
      <FormContent todoList={todoList} setTodoList={setTodoList} />
      <TodoListContent key={todoList.id} todoList={todoList} setTodoList={setTodoList} isActive={false} />
      <TodoListContent key={todoList.id} todoList={todoList} setTodoList={setTodoList} isActive={true} />
    </div >
  )
}
export default App;
