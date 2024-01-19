import 'App.css';
import { useState } from 'react';
import 'reset.css';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1, title: '리엑트를 공부하자',
      detail: "리엑트 공부를 해야합니다."
    },
  ]);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const clickAddButtonHandler = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title,
      detail,
    }
    setTodoList([...todoList, newTodoList]);
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  }


  return (
    <div>
      <div className='basic'>
        <header className='header-style'>
          <h1>My Todo List</h1>
          <p>React</p>
        </header>
        <form>
          <div>
            <label>제목</label>
            <input
              value={title}
              onChange={titleChangeHandler}
            />
            <label>내용</label>
            <input
              value={detail}
              onChange={detailChangeHandler}
            />
          </div>
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </form>
        <div>
          {
            todoList.map((item) => {
              return (
                <>
                  <p>{item.id}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
