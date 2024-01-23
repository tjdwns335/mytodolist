const TodoListContent = ({ key, todoList, setTodoList, isActive }) => {
  const removeButton = (id) => {
    const newTodoList = todoList.filter((todoList) => todoList.id !== id)
    setTodoList(newTodoList);
  };
  const doneClick = (id) => {
    const updatedTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    setTodoList(updatedTodoList);
  }

  return (
    <div className="list-content">
      {/* Todo-list */}
      <h2>{(isActive === false) ? "Todo-List" : "Done-List"}</h2>
      <div className="todoList-wrap">
        {
          todoList.filter((item) => { return (item.isDone === isActive) ? false : true })
            .map((item) => {
              return (
                <div className="todoList" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <div className="button-group">
                    <button className="delete-button" onClick={() => removeButton(item.id)}>삭제하기</button>
                    <button className={isActive ? "cancel-button" : "done-button"}
                      onClick={() => doneClick(item.id)}>{isActive ? "취소" : "완료"}</button>
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