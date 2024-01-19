import 'App.css';
import { useState } from 'react';
import 'reset.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '리엑트 공부를 합시다', detail: '리엑트 공부를 해야합니다.' }
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
      detail
    }
    setTodoList([...todoList, newTodoList]);
  }


  return (
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
            onChange={changeTitle}
          />
          <label>내용</label>
          <input
            value={detail}
            onChange={changeDetail}
          />
        </div>
        <button onClick={addHandler}>추가하기</button>
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
  );
}

export default App;
