const TodoListContent = ({ key, todoList, removeButton, doneClick, cancelClick }) => {
  return (
    <div className="list-content">
      {/* Todo-list */}
      <h2>Todo-List</h2>
      <div className="todoList-wrap">
        {
          todoList.filter((item) => {
            return item.checked === false
          })
            .map((item) => {
              return (
                <div className="todoList" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <div className="button-group">
                    <button className="delete-button" onClick={() => removeButton(item.id)}>삭제하기</button>
                    <button className="done-button" onClick={() => doneClick(item.id)}>완료</button>
                  </div>
                </div>
              )
            })
        }
      </div>

      {/* done-list */}
      <h2>Done-List</h2>
      <div className="todoList-wrap">
        {
          todoList.filter((item) => { return item.checked === true })
            .map((item) => {
              return (
                <div className="doneList" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <div className="button-group">
                    <button className="delete-button" onClick={() => removeButton(item.id)}>삭제하기</button>
                    <button className="cancel-button" onClick={() => cancelClick(item.id)}>취소</button>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default TodoListContent