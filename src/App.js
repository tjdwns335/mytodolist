import 'App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '리엑트 공부를 합시다', detail: '리엑트 공부를 해야합니다.', checked: false },
    { id: 2, title: '리엑트 공부를 합시다', detail: '리엑트 공부를 해야합니다.', checked: true },
  ]);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  }
  const changeDetail = (event) => {
    setDetail(event.target.value);
  }

  const addClickHandler = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title,
      detail,
      checked: false,
    }
    setTodoList([...todoList, newTodoList]);
  }
  const removeButton = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id)
    setTodoList(newTodoList);
  }
  const doneButton = (id) => {
    const updatedTodoList = todoList.map(item =>
      item.id !== id ? { ...item, checked: true } : item
    );
    setTodoList(updatedTodoList);
  }

  const cancelButton = (id) => {
    const updatedTodoList = todoList.map(item =>
      item.id !== id ? { ...item, checked: false } : item
    );
    setTodoList(updatedTodoList);
  }


  return (
    <div>
      <header>
        <h1>My todoList</h1>
        <p>React</p>
      </header>
      <form>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={changeTitle}
          />
          <label>내용</label>
          <input
            type="text"
            value={detail}
            onChange={changeDetail}
          />
        </div>
        <div>
          <button onClick={() => addClickHandler}>추가하기</button>
        </div>
      </form>
      <div>
        <div>
          {
            todoList.filter((item) => {
              return item.checked === false
            }).map((item) => {
              <>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                <button onClick={() => removeButton(item.id)}>제거</button>
                <button onClick={() => doneButton(item.id)}>완료</button>
              </>
            })
          }
        </div>
      </div>
      <div>
        <div>
          {
            todoList.filter((item) => {
              return item.checked === true
            }).map((item) => {
              <>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                <button onClick={() => removeButton(item.id)}>제거</button>
                <button onClick={() => cancelButton(item.id)}>취소</button>
              </>
            })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
