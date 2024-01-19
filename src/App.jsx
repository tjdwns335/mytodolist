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

  const addHandler = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title,
      detail,
      checked: false,
    }
    setTodoList([...todoList, newTodoList]);
    alert('test');
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
    <div className='basic'>
      <header className='header-style'>
        <h1>My Todo List</h1>
        <p>React</p>
      </header>
      <form className='form-style'>
        <div>
          <label className="label-style">제목</label>
          <input
            onChange={changeTitle}
            type="text"
            name="title"
            value={title}
            className='input-style'
          />
          <label className="label-style">내용</label>
          <input
            onChange={changeDetail}
            type="text"
            name="detail"
            value={detail}
            className='input-style'
          />
        </div>
        <div >
          <button onClick={addHandler} className='formButton-style'>추가하기</button>
        </div>
      </form>

      <div className='list-content'>
        {/* TOdo-list */}
        <h2>Todo-List</h2>
        <div className='todoList-wrap'>
          {
            todoList.filter((item) => {
              return item.checked === false
            }).map((item) => {
              return (
                <div className="todoList">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <button onClick={() => removeButton(item.id)}>삭제하기</button>
                  <button onClick={() => doneButton(item.id)}>완료</button>
                </div>
              )
            })
          }
        </div>

        {/* done-list */}
        <h2>Done-List</h2>
        <div className='todoList-wrap'>
          {
            todoList.filter((item) => {
              return item.checked === true
            }).map((item) => {
              return (
                <div className="todoList">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <button onClick={() => removeButton(item.id)}>삭제하기</button>
                  <button onClick={() => cancelButton(item.id)}>취소</button>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default App;
